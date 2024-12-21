import { Injectable, NotFoundException } from '@nestjs/common';
import { LocalSpecialty } from './entities/local-specialty.entity';
import { Like, Repository } from 'typeorm';
import { Region } from './types/region.type';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchLocalSpecialtyDto } from './dto/search-local-specialty.dto';
import { FindSpecialtyOptions, SearchConditions } from './types/local-specialty.type';
import { LocalSpecialtyInterface } from './interfaces/local-specialty.interface';

const SPECIALTY_SELECT_FIELDS = {
  DEFAULT: {
    id: true,
    name: true,
    season_info: true,
    region: true,
    image: true,
  },
  DETAIL: {
    id: true,
    name: true,
    description: true,
    season_info: true,
    region: true,
    image: true,
  },
} as const;

// 생성, 삭제, 전체 조회, 지역별 조회, id로 조회, 검색
@Injectable()
export class LocalSpecialtyService implements LocalSpecialtyInterface {
  constructor(
    @InjectRepository(LocalSpecialty)
    private readonly localSpecialtyRepository: Repository<LocalSpecialty>,
  ) {}

  private async findSpecialties(
    options: FindSpecialtyOptions & { customConditions?: SearchConditions },
  ): Promise<LocalSpecialty[]> {
    const {
      id,
      region,
      withStoreProducts = false,
      selectDetail = false,
      customConditions,
    }: FindSpecialtyOptions = options;

    const whereConditions: FindSpecialtyOptions = {
      ...(id && { id }),
      ...(region && { region }),
      ...(customConditions && customConditions),
    };

    return this.localSpecialtyRepository.find({
      where: whereConditions,
      select: selectDetail ? SPECIALTY_SELECT_FIELDS.DETAIL : SPECIALTY_SELECT_FIELDS.DEFAULT,
      relations: withStoreProducts ? { store_products: true } : undefined,
    });
  }

  // 특산품 전체 조회
  async findAll(): Promise<LocalSpecialty[]> {
    // find는 조건에 맞는 모든 엔티티 인스턴스를 배열 형태로 반환시킨다
    return this.findSpecialties({});
  }

  // 지역별 특산품 조회
  async findByRegion(region: Region): Promise<LocalSpecialty[]> {
    return this.findSpecialties({
      region,
      withStoreProducts: true,
    });
  }

  // id로 특산품 조회
  async findById(id: number): Promise<LocalSpecialty> {
    const specialty = await this.findSpecialties({
      id,
      withStoreProducts: true,
      selectDetail: true,
    });

    if (!specialty.length) {
      throw new NotFoundException('특산품 찾지 못함');
    }

    return specialty[0];
  }

  // 특산품 검색
  async search(searchDto: SearchLocalSpecialtyDto): Promise<LocalSpecialty[]> {
    const conditions = this.buildSearchConditions(searchDto);

    return this.findSpecialties({ customConditions: conditions });
  }

  // 검색 조건 생성
  private buildSearchConditions(searchDto: SearchLocalSpecialtyDto): SearchConditions {
    const conditions: SearchConditions = {};

    if (searchDto.keyword) {
      conditions.name = Like(`%${searchDto.keyword}%`);
    }

    if (searchDto.region) {
      conditions.region = searchDto.region;
    }

    return conditions;
  }
}
