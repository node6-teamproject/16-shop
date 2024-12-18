//유저 정보 추출
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

//createParamDecorator HTTP 요청에서 특정 데이터를 추출하는 기능
export const UserInfo = createParamDecorator(
  //ctx: ExecutionContext 인스턴스,현재 실행 중인 요청에 대한 정보와 컨텍스트를 제공하며, 이 객체를 통해 HTTP 요청 객체에 접근 가능
  (data: unknown, ctx: ExecutionContext) => {
    //switchToHttp() 메서드를 호출하여 HTTP 요청 컨텍스트로 전환, getRequest()는 현재 HTTP 요청 객체를 반환, 요청 헤더, 본문(body), 쿼리 파라미터, 세션 정보 등이 포함
    const request = ctx.switchToHttp().getRequest();
    //request.user가 존재하면 해당 사용자 정보를 반환하고, 그렇지 않으면 null을 반환
    return request.user ? request.user : null;
  },
);