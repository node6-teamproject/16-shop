import { forwardRef, Module } from '@nestjs/common';
import { LocalSpecialtyService } from './local-specialty.service';
import { LocalSpecialtyController } from './local-specialty.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalSpecialty } from './entities/local-specialty.entity';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthModule } from 'src/auth/auth.module';
import { RolesGuard } from '../auth/guards/roles.guard';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([LocalSpecialty]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    AuthModule,
    UserModule,
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [LocalSpecialtyController],
  providers: [RolesGuard,LocalSpecialtyService],
  exports: [LocalSpecialtyService],
})
export class LocalSpecialtyModule {}
