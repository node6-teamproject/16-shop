import { forwardRef, Module } from '@nestjs/common';
import { LocalSpecialtyService } from './local-specialty.service';
import { LocalSpecialtyController } from './local-specialty.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalSpecialty } from './entities/local-specialty.entity';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [TypeOrmModule.forFeature([LocalSpecialty]), forwardRef(() => ProductModule)],
  controllers: [LocalSpecialtyController],
  providers: [LocalSpecialtyService],
})
export class LocalSpecialtyModule {}
