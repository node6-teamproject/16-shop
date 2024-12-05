import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { StoreModule } from '../store/store.module';
import { ReviewModule } from '../review/review.module';
import { OrderModule } from '../order/order.module';
import { CartItemModule } from '../cart-item/cart-item.module';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UserController } from './user.controller';
import { forwardRef,Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';


@Module({
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([User]),
    forwardRef(() => StoreModule),
    forwardRef(() =>ReviewModule),
    forwardRef(() =>OrderModule),
    forwardRef(() =>CartItemModule),
    JwtModule.registerAsync({
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}