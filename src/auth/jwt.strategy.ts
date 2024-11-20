//https://velog.io/@wkddudghks81/JWT%EB%A5%BC-%EA%B2%80%EC%A6%9D-jwt.strategy.ts
//JWT를 검증
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
//JWT 인증 전략을 설정
export class JwtStrategy extends PassportStrategy(Strategy) {
  //configService 인스턴스를 통해 환경 변수나 설정 값을 애플리케이션에서 읽을 수 있음
  constructor(private readonly configService: ConfigService) {
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
    // TODO. payload(토큰에 담긴 데이터)로 전달된 데이터를 통해 실제 유저 정보를 조회
  }
}