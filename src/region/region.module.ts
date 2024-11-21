import { forwardRef, Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionController } from './region.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Region } from './entities/region.entity';
import { LocalSpecialtyModule } from 'src/local-specialty/local-specialty.module';

@Module({
  imports: [TypeOrmModule.forFeature([Region]), 
  forwardRef(() =>LocalSpecialtyModule)
],
  controllers: [RegionController],
  providers: [RegionService],
})
export class RegionModule {}
