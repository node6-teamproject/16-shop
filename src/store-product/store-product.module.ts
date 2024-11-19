import { Module } from '@nestjs/common';
import { StoreProductService } from './store-product.service';
import { StoreProductController } from './store-product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreProduct } from './entities/store-product.entity';
import { StoreModule } from 'src/store/store.module';
import { CartItemModule } from 'src/cart-item/cart-item.module';
import { OrderItemModule } from 'src/order-item/order-item.module';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([StoreProduct]),
    StoreModule,
    CartItemModule,
    OrderItemModule,
    ProductModule,
  ],
  controllers: [StoreProductController],
  providers: [StoreProductService],
})
export class StoreProductModule {}
