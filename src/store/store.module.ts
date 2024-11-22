import { forwardRef, Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from './entities/store.entity';
import { UserModule } from 'src/user/user.module';
import { ReviewModule } from 'src/review/review.module';
import { StoreProductModule } from 'src/store-product/store-product.module';
import {AuthModule} from 'src/auth/auth.module'

@Module({
  imports: [TypeOrmModule.forFeature([Store]), 
  forwardRef(() => UserModule), 
  forwardRef(() => ReviewModule),
  forwardRef(() =>AuthModule),
  forwardRef(() =>StoreProductModule)
  ],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
