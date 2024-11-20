import { UserInfo } from 'src/utils/userInfo.decorator';

import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { LoginDto } from './dto/login.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { RegisterDto } from './dto/resister.dto';

//주소/user
@Controller('user')
//사용자와 관련된 HTTP 요청을 처리하는 역할
export class UserController {
  //UserService 실제 사용자 인증과 관련된 비즈니스 로직을 수행
  constructor(private readonly userService: UserService) {}
  
  //사용자 회원 가입
  @Post('sign-up')
  //loginDto에서 이메일과 비밀번호를 받아 사용자 등록
  async register(@Body() registerDto: RegisterDto) {
    return await this.userService.register(registerDto.email, registerDto.password, registerDto.nickname, registerDto.address, registerDto.phone);
  }

  //로그인에 성공하면 토큰을 반환
  @Post('sign-in')
  async login(@Body() loginDto: LoginDto) {
    return await this.userService.login(loginDto.email, loginDto.password);
  }
  //AuthGuard('jwt')는 요청 헤더에서 JWT 토큰을 추출하고, 토큰이 유효한지 확인한 후 해당 사용자의 정보를 요청 핸들러에 주입
  @UseGuards(AuthGuard('jwt'))

  //인증된 사용자 반환
  @Get('userinfo')
  getEmail(@UserInfo() user: User) {
    const { password, ...filteredUser } = user;
    return { data: filteredUser };
  }
}