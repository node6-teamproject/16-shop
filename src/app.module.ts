import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { StoreModule } from './store/store.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { RegionModule } from './region/region.module';
import { ReviewModule } from './review/review.module';
import { ConfigModule } from '@nestjs/config';
import { configModuleValidationJoiSchema } from './configs/env-validation.config';

@Module({
  imports: [
    UserModule,
    StoreModule,
    AuthModule,
    OrderModule,
    ProductModule,
    RegionModule,
    ReviewModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: configModuleValidationJoiSchema,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
