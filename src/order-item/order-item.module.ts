import { forwardRef, Module } from '@nestjs/common';
import { OrderItemService } from './order-item.service';
import { OrderItemController } from './order-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItem } from './entities/order-item.entity';
import { OrderModule } from 'src/order/order.module';
import { StoreProductModule } from 'src/store-product/store-product.module';

@Module({
  imports: [TypeOrmModule.forFeature([OrderItem]), 
  forwardRef(() =>OrderModule),
  forwardRef(() =>StoreProductModule)
],
  controllers: [OrderItemController],
  providers: [OrderItemService],
})
export class OrderItemModule {}
