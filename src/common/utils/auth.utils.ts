import { UnauthorizedException } from '@nestjs/common';
import { User } from '../../user/entities/user.entity';

export class AuthUtils {
  static validateLogin(user: User): void {
    if (!user) {
      throw new UnauthorizedException('로그인이 필요한 서비스입니다.');
    }
  }

  static validateResourceOwner(resourceUserId: number, currentUser: User): void {
    if (resourceUserId !== currentUser.id) {
      throw new UnauthorizedException('해당 리소스에 대한 권한이 없습니다.');
    }
  }
}
