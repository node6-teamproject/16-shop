import { UserInfo } from 'src/utils/userInfo.decorator';
import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Patch,
  Param,
  UnauthorizedException,
  Delete,
  Put,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { RegisterDto } from './dto/register.dto';
import { UpdateDto } from './dto/update.dto';
import { DeleteDto } from './dto/delete.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ChangeDto } from './dto/change.dto';
import { CashDto } from './dto/cash.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

//주소/user
@ApiTags('users')
@ApiBearerAuth('access-token')
@Controller('user')
//사용자와 관련된 HTTP 요청을 처리하는 역할
export class UserController {
  //UserService 실제 사용자 인증과 관련된 비즈니스 로직을 수행
  constructor(private readonly userService: UserService) {}

  //사용자 회원 가입
  @Post('sign-up')
  //loginDto에서 이메일과 비밀번호를 받아 사용자 등록
  async register(@Body() registerDto: RegisterDto) {
    return await this.userService.register(registerDto), { message: '회원가입이 완료되었습니다.' };
  }

  //로그인에 성공하면 토큰을 반환
  @Post('sign-in')
  async login(@Body() loginDto: LoginDto) {
    return await this.userService.login(loginDto);
  }
  //JwtAuthGuard는 요청 헤더에서 JWT 토큰을 추출하고, 토큰이 유효한지 확인한 후 해당 사용자의 정보를 요청 핸들러에 주입
  @UseGuards(JwtAuthGuard)
  //인증된 사용자 반환
  @Get('userinfo')
  getEmail(@UserInfo() user: User) {
    const { password, ...filteredUser } = user;
    return { data: filteredUser };
  }

  //역할변경
  @Put('seller')
  @UseGuards(JwtAuthGuard)
  async changeRole(@Body() changeDto: ChangeDto) {
    await this.userService.changeUserRole(changeDto);
    return { message: '변경이 완료되었습니다.' };
  }

  // 캐시 충전
  @Put('cash')
  @UseGuards(JwtAuthGuard)
  async cash(@UserInfo() user: User, @Body() cashDto: CashDto) {
    await this.userService.cash(user, cashDto);
    return { message: '캐쉬충전이 완료되었습니다.' };
  }

  // 사용자 정보 업데이트
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async updateInfo(@UserInfo() user: User, @Param('id') id: number, @Body() updateDto: UpdateDto) {
    if (user.id !== id) {
      throw new UnauthorizedException('권한이 없습니다.');
    }

    await this.userService.updateInfo(id, updateDto);
    const { password, ...filteredUser } = user;
    return { message: '사용자 정보가 성공적으로 업데이트되었습니다.', data: filteredUser };
  }

  // 회원탈퇴
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteInfo(@UserInfo() user: User, @Param('id') id: number, @Body() deleteDto: DeleteDto) {
    if (user.id !== id) {
      throw new UnauthorizedException('권한이 없습니다.');
    }
    await this.userService.deleteInfo(id, deleteDto);
    return { message: '탈퇴 되었습니다.' };
  }
}
