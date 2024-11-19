import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { StoreProductModule } from 'src/store-product/store-product.module';
import { LocalSpecialtyModule } from 'src/local-specialty/local-specialty.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), StoreProductModule, LocalSpecialtyModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
