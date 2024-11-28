import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { LocalSpecialty } from './entities/local-specialty.entity';
import { IsNull, Like, Repository } from 'typeorm';
import { CreateLocalSpecialtyDto } from './dto/create-local-specialty.dto';
import { User } from 'src/user/entities/user.entity';
import { Region } from './types/region.type';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchLocalSpecialtyDto } from './dto/search-local-specialty.dto';

// TODO: 예외 처리, name이 같은 특산품 등록 시 예외 처리 추가
@Injectable()
export class LocalSpecialtyService {
  constructor(
    @InjectRepository(LocalSpecialty)
    private readonly localSpecialtyRepository: Repository<LocalSpecialty>,
  ) {}

  /**
   * 특산품 생성
   * @param user 유저
   * @param createDto 특산품 생성 정보
   * @returns 특산품 생성 결과
   */
  async create(user: User, createDto: CreateLocalSpecialtyDto) {
    const { name } = createDto;
    const existedSpecialty = this.localSpecialtyRepository.find({
      where: { name },
    });

    if (existedSpecialty) {
      throw new BadRequestException('이미 존재하는 특산품 이름');
    }

    const specialty = this.localSpecialtyRepository.create(createDto);

    return await this.localSpecialtyRepository.save(specialty);
  }

  /**
   * 특산품 삭제
   * @param user 유저
   * @param id 특산품 id
   * @returns 특산품 삭제 결과
   */
  async delete(user: User, id: number) {
    const specialty = await this.localSpecialtyRepository.findOne({
      where: { id },
    });

    if (!specialty) {
      throw new NotFoundException('특산품 찾지 못함');
    }

    await this.localSpecialtyRepository.remove(specialty);

    return { message: '특산품 삭제 완료' };
  }

  /**
   * 특산품 전체 조회
   * @returns 특산품 전체 조회 결과
   */
  async findAll(): Promise<LocalSpecialty[]> {
    return this.localSpecialtyRepository.find({
      select: { id: true, name: true, season_info: true, region: true },
      where: {
        deleted_at: IsNull(),
      },
    });
  }

  /**
   * 특산품 지역별 조회
   * @param region 지역
   * @returns 특산품 지역별 조회 결과
   */
  async findByRegion(region: Region): Promise<LocalSpecialty[]> {
    return this.localSpecialtyRepository.find({
      where: { region },
    });
  }

  /**
   * 특산품 id로 조회
   * @param id 특산품 id
   * @returns 특산품 id로 조회 결과
   */
  async findById(id: number) {
    const specialty = await this.localSpecialtyRepository.findOne({
      where: { id },
      select: {
        id: true,
        name: true,
        description: true,
        season_info: true,
        region: true,
        created_at: true,
      },
    });

    if (!specialty) {
      throw new NotFoundException('특산품 찾지 못함');
    }

    return specialty;
  }

  /**
   * 특산품 검색
   * @param searchDto 검색 조건
   * @returns 특산품 검색 결과
   */
  async search(searchDto: SearchLocalSpecialtyDto): Promise<LocalSpecialty[]> {
    const condition: any = {
      deleted_at: IsNull(),
    };

    if (searchDto.keyword) {
      condition.name = Like(`%${searchDto.keyword}%`);
    }

    if (searchDto.region) {
      condition.region = searchDto.region;
    }

    return await this.localSpecialtyRepository.find({
      where: condition,
    });
  }
}
