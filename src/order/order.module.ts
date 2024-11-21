import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderItemModule } from 'src/order-item/order-item.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Order]),
   OrderItemModule, 
   UserModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
