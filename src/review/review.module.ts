import { forwardRef, Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { UserModule } from 'src/user/user.module';
import { StoreModule } from 'src/store/store.module';

@Module({
  imports: [TypeOrmModule.forFeature([Review]), 
  forwardRef(() =>UserModule), 
  forwardRef(() =>StoreModule)
],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}
