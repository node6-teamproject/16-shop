import { Module } from '@nestjs/common';
import { CartItemService } from './cart-item.service';
import { CartItemController } from './cart-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartItem } from './entities/cart-item.entity';
import { UserModule } from 'src/user/user.module';
import { StoreProductModule } from 'src/store-product/store-product.module';

@Module({
  imports: [TypeOrmModule.forFeature([CartItem]), UserModule, StoreProductModule],
  controllers: [CartItemController],
  providers: [CartItemService],
})
export class CartItemModule {}
