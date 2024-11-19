import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { StoreModule } from 'src/store/store.module';
import { ReviewModule } from 'src/review/review.module';
import { OrderModule } from 'src/order/order.module';
import { CartItemModule } from 'src/cart-item/cart-item.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    StoreModule,
    ReviewModule,
    OrderModule,
    CartItemModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
