import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { LocalSpecialtyService } from './local-specialty.service';
import { Region } from './types/region.type';
import { SearchLocalSpecialtyDto } from './dto/search-local-specialty.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiBearerAuth } from '@nestjs/swagger';

// 특산품 생성, 삭제, 전체 조회, 지역별 조회, id로 조회, 검색
@ApiTags('Local Specialty')
@ApiBearerAuth('access-token')
@Controller('specialty')
export class LocalSpecialtyController {
  constructor(private readonly localSpecialtyService: LocalSpecialtyService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.localSpecialtyService.findAll();
  }

  @Get('region/:region')
  findByRegion(@Param('region') region: Region) {
    return this.localSpecialtyService.findByRegion(region);
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.localSpecialtyService.findById(id);
  }

  @Post('search')
  @HttpCode(HttpStatus.OK)
  search(@Body() searchDto: SearchLocalSpecialtyDto) {
    return this.localSpecialtyService.search(searchDto);
  }
}
