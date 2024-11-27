import { compare, hash } from 'bcrypt';
import _ from 'lodash';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { BadRequestException, ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserRole } from './entities/user.entity';
import { UpdateDto } from './dto/update.dto';
import { DeleteDto } from './dto/delete.dto';
import { ChangeDto } from './dto/change.dto';
import { CashDto } from './dto/cash.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(
    //TypeORM의 @InjectRepository 데코레이터는 특정 엔티티(User)의 데이터베이스 작업을 처리하는 Repository를 주입하는 데 사용
    @InjectRepository(User)
    //Repository 데이터베이스에서 특정 엔티티(User)를 관리하기 위한 메서드들이 포함
    private userRepository: Repository<User>,
    //JWT 토큰을 생성하고 검증하는 데 사용
    private readonly jwtService: JwtService,
    private readonly config: ConfigService
  ) {}
  //회원가입
  async register(email: string, password: string, nickname: string, address: string, phone: string, admincode?:string) {
    const admincode1 = process.env.ADMIN_CODE
    const existingUseremail = await this.findByEmail(email);
    const existingUsernickname = await this.findByNickname(nickname)
    if (existingUseremail) {
      throw new ConflictException(
        '이미 해당 이메일로 가입된 사용자가 있습니다!',
      );
    }

    if (existingUsernickname) {
      throw new ConflictException(
        '똑같은 닉네임이 이미 존재합니다.',
      );
    }

    let role = (admincode === admincode1) ? UserRole.ADMIN : UserRole.CUSTOMER;


    //비밀번호 암호화
    const hashedPassword = await hash(password, 10);

    //db 저장
    await this.userRepository.save({
      email,
      password: hashedPassword,
      nickname,
      address,
      phone,
      role
    });
  }

  async login(email: string, password: string) {
    const user = await this.userRepository.findOne({
      select: ['id', 'email', 'password'],
      where: { email },
    });
    //이메일칸이 비어있다면
    if (_.isNil(user)) {
      throw new UnauthorizedException('이메일을 확인해주세요.');
    }

    //비밀번호가 틀리다면
    if (!(await compare(password, user.password))) {
      throw new UnauthorizedException('비밀번호를 확인해주세요.');
    }

    //로그인 성공, jwt 토큰 반환
    const payload = { email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOneBy({ email });
  }

  async findByNickname(nickname: string) {
    return await this.userRepository.findOneBy({ nickname });
  }

  async changeUserRole(changeDto: ChangeDto): Promise<void> {
    const { email, role } = changeDto;

    // 사용자 찾기
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException('사용자를 찾을 수 없습니다.');
    }

    // 유효한 역할인지 확인
    if (!Object.values(UserRole).includes(role as UserRole)) {
      throw new BadRequestException('유효하지 않은 역할입니다.');
    }

    // 역할 업데이트
    user.role = role as UserRole;
    await this.userRepository.save(user);
  }

  async cash(user: User, cashDto: CashDto) {
    const { cash } = cashDto;

    // 유효성 검사 기능
    if (cash <= 0) {
      throw new BadRequestException('충전할 캐쉬는 0보다 커야 합니다.');
    }

    // 사용자 정보 업데이트
    user.cash += cash;
    await this.userRepository.save(user);
  }

  async updateInfo(id:number, updateDto: UpdateDto) {
    await this.verifyInfo(id,updateDto.password);
    const { nickname, address, phone } = updateDto;

    await this.userRepository.update({ id }, { nickname, address, phone });
  }

  async deleteInfo(id: number, deleteDto: DeleteDto) {
    await this.verifyInfo(id, deleteDto.password);
    await this.userRepository.delete({ id });
  }

  private async verifyInfo(id: number, password:string) {
    const user = await this.userRepository.findOneBy({
      id,
    });

    if (_.isNil(user)) {
      throw new NotFoundException(
        '데이터를 찾을 수 없거나 수정/삭제할 권한이 없습니다.',
      );
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('비밀번호가 일치하지 않습니다.');
    }
  }
}