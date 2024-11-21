import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { StoreModule } from 'src/store/store.module';
import { ReviewModule } from 'src/review/review.module';
import { OrderModule } from 'src/order/order.module';
import { CartItemModule } from 'src/cart-item/cart-item.module';
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
    StoreModule,
    ReviewModule,
    OrderModule,
    CartItemModule,
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