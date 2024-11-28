import { forwardRef, Module } from '@nestjs/common';
import { LocalSpecialtyService } from './local-specialty.service';
import { LocalSpecialtyController } from './local-specialty.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalSpecialty } from './entities/local-specialty.entity';
import { UserModule } from 'src/user/user.module';
import { AuthModule } from 'src/auth/auth.module';
import { UserService } from '../user/user.service';
import { User } from 'src/user/entities/user.entity';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([LocalSpecialty]),TypeOrmModule.forFeature([User]), forwardRef(() =>AuthModule), forwardRef(() => UserModule)
  ,JwtModule.registerAsync({
    useFactory: (config: ConfigService) => ({
      secret: config.get<string>('JWT_SECRET'),
    }),
    inject: [ConfigService],
  }),
],
  controllers: [LocalSpecialtyController],
  providers: [RolesGuard,LocalSpecialtyService,UserService],
  exports: [RolesGuard,TypeOrmModule,LocalSpecialtyService],
})
export class LocalSpecialtyModule {}
