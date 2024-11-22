import { UserInfo } from 'src/utils/userInfo.decorator';

import { Body, Controller, Get, Post, UseGuards,Patch, Param, UnauthorizedException, Delete, Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { LoginDto } from './dto/login.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { RegisterDto } from './dto/register.dto';
import { UpdateDto } from './dto/update.dto';
import { DeleteDto } from './dto/delete.dto'
import { ChangeDto } from './dto/change.dto';

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
    return await this.userService.register(registerDto.email, registerDto.password, registerDto.nickname, registerDto.address, registerDto.phone),
    { message: '회원가입이 완료되었습니다.' };;
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
  async getEmail(@UserInfo() user: User) {
    const { password, ...filteredUser } = user;
    return await { data: filteredUser };
  }

  @Put('seller')
  @UseGuards(AuthGuard('jwt'))
  async changeUserRole(@Body() changeDto: ChangeDto) {
    await this.userService.changeUserRole(changeDto);
    return { message: '판매자 등록이 완료되었습니다.'}
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  async updateInfo(@UserInfo() user: User,@Param('id') id: number,@Body() updateDto: UpdateDto,) {
    if (user.id !== id) {
      throw new UnauthorizedException('권한이 없습니다.');
    }
    
    await this.userService.updateInfo(
      id,
      updateDto
    );
    const { password, ...filteredUser } = user;
    return await { message: '사용자 정보가 성공적으로 업데이트되었습니다.',data: filteredUser }
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
    async deleteInfo(@UserInfo() user: User,@Param('id') id: number,@Body() deleteDto: DeleteDto) {
      if (user.id !== id) {
        throw new UnauthorizedException('권한이 없습니다.');
      }
      await this.userService.deleteInfo(id,deleteDto);
      return { message: '탈퇴 되었습니다.' }
  }
}