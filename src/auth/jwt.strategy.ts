//https://velog.io/@wkddudghks81/JWT%EB%A5%BC-%EA%B2%80%EC%A6%9D-jwt.strategy.ts
//JWT를 검증
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';

import { UserService } from 'src/user/user.service';
import _ from 'lodash';

@Injectable()
//JWT 인증 전략을 설정
export class JwtStrategy extends PassportStrategy(Strategy) {
  //configService 인스턴스를 통해 환경 변수나 설정 값을 애플리케이션에서 읽을 수 있음
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {
    //JWT 전략을 초기화하는 데 사용
    super({
      //요청에서 JWT를 추출하는 방법을 정의
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //JWT의 만료 여부를 무시할지 여부를 설정하는 옵션
      ignoreExpiration: false,
      //JWT 서명 검증에 사용할 비밀 키(secret) 또는 공개 키를 설정
      secretOrKey: configService.get('JWT_SECRET_KEY'),
    });
  }

  async validate(payload: any) {
    const user = await this.userService.findByEmail(payload.email);
    if (_.isNil(user)) {
      throw new NotFoundException('해당하는 사용자를 찾을 수 없습니다.');
    }

    return user;
  }
}