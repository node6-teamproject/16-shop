# Step 1: Node.js 베이스 이미지 선택
# LTS 버전으로 안정성을 확보합니다.
FROM node:16 AS builder

# Step 2: 작업 디렉터리 설정
# 컨테이너 내부에서 코드가 저장될 디렉터리를 설정합니다.
WORKDIR /app

# Step 3: package.json과 package-lock.json 복사
# 의존성 설치에 필요한 파일을 먼저 복사하여 캐싱 최적화를 합니다.
COPY package*.json ./

# Step 4: 의존성 설치
# --legacy-peer-deps: 의존성 충돌 방지 옵션
RUN npm install --legacy-peer-deps

# Step 5: 프로젝트 소스 복사
# 로컬의 모든 파일을 컨테이너의 /app 디렉터리에 복사합니다.
COPY . .

# Step 6: NestJS 애플리케이션 빌드
# TypeScript 코드를 JavaScript로 컴파일합니다.
RUN npm run build

# Step 7: 경량화된 런타임 이미지 설정
# 실행 환경에 필요한 최소한의 설정만 포함합니다.
FROM node:16 AS runner
WORKDIR /app

# Step 8: 빌드 결과물 복사
COPY --from=builder /app/dist ./dist
COPY package*.json ./

# Step 9: 런타임 의존성 설치
# devDependencies를 제외한 필요한 의존성만 설치합니다.
RUN npm install --only=production

# Step 10: 포트 노출
# NestJS 기본 실행 포트는 3000입니다.
EXPOSE 3000

# Step 11: 실행 명령어 설정
# NestJS 애플리케이션 시작 명령어를 설정합니다.
CMD ["node", "dist/main"]