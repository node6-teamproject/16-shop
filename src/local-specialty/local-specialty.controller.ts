// src/local-specialty/local-specialty.controller.ts
import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { LocalSpecialtyService } from './local-specialty.service';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { CreateLocalSpecialtyDto } from './dto/create-local-specialty.dto';
import { User, UserRole } from 'src/user/entities/user.entity';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Region } from './types/region.type';
import { SearchLocalSpecialtyDto } from './dto/search-local-specialty.dto';

// TODO: 예외 처리
@Controller('specialty')
export class LocalSpecialtyController {
  constructor(private readonly localSpecialtyService: LocalSpecialtyService) {}

  /**
   * 특산품 생성
   * @param user 유저 정보
   * @param createDto 특산품 생성 정보
   * @returns 특산품 생성 결과
   * UseGuard 데코레이터가 있는 라우트는 메소드 실행 전 JWT 토큰 검증을 거친다
   */
  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  create(@GetUser() user: User, @Body() createDto: CreateLocalSpecialtyDto) {
    return this.localSpecialtyService.create(user, createDto);
  }

  /**
   * 특산품 삭제
   * @param user 유저 정보
   * @param id 특산품 id
   * @returns 특산품 삭제 결과
   */
  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  delete(@GetUser() user: User, @Param('id') id: number) {
    return this.localSpecialtyService.delete(user, id);
  }

  /**
   * 특산품 전체 조회
   * @returns 특산품 전체 조회 결과
   */
  @Get()
  findAll() {
    return this.localSpecialtyService.findAll();
  }

  /**
   * 특산품 지역별 조회
   * @param region 지역
   * @returns 특산품 지역별 조회 결과
   */
  @Get('region/:region')
  findByRegion(@Param('region') region: Region) {
    return this.localSpecialtyService.findByRegion(region);
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.localSpecialtyService.findById(id);
  }

  /**
   * 특산품 검색
   * @param searchDto 검색 조건
   * @returns 특산품 검색 결과
   */
  @Post('search')
  async search(@Body() searchDto: SearchLocalSpecialtyDto) {
    return this.localSpecialtyService.search(searchDto);
  }
}
