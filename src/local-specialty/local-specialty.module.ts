import { Module } from '@nestjs/common';
import { LocalSpecialtyService } from './local-specialty.service';
import { LocalSpecialtyController } from './local-specialty.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalSpecialty } from './entities/local-specialty.entity';
import { RegionModule } from 'src/region/region.module';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [TypeOrmModule.forFeature([LocalSpecialty]), RegionModule, ProductModule],
  controllers: [LocalSpecialtyController],
  providers: [LocalSpecialtyService],
})
export class LocalSpecialtyModule {}
