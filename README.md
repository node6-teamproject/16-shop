```
16-shop
├─ .dockerignore
├─ .eslintrc.js
├─ .prettierrc
├─ Dockerfile
├─ nest-cli.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ data.html
│  ├─ images
│  │  └─ south-korea.svg
│  ├─ index.html
│  ├─ korea-map.js
│  ├─ korea.html
│  └─ map.js
├─ README.md
├─ src
│  ├─ app.controller.spec.ts
│  ├─ app.controller.ts
│  ├─ app.module.ts
│  ├─ app.service.ts
│  ├─ auth
│  │  ├─ auth.controller.spec.ts
│  │  ├─ auth.controller.ts
│  │  ├─ auth.module.ts
│  │  ├─ auth.service.spec.ts
│  │  ├─ auth.service.ts
│  │  ├─ dto
│  │  │  ├─ create-auth.dto.ts
│  │  │  └─ update-auth.dto.ts
│  │  ├─ guards
│  │  │  ├─ jwt-auth.guard.ts
│  │  │  └─ roles.guard.ts
│  │  └─ strategies
│  │     └─ jwt.strategy.ts
│  ├─ cart-item
│  │  ├─ cart-item.controller.spec.ts
│  │  ├─ cart-item.controller.ts
│  │  ├─ cart-item.module.ts
│  │  ├─ cart-item.service.spec.ts
│  │  ├─ cart-item.service.ts
│  │  ├─ dto
│  │  │  ├─ create-cart-item.dto.ts
│  │  │  └─ update-cart-item.dto.ts
│  │  └─ entities
│  │     └─ cart-item.entity.ts
│  ├─ common
│  │  ├─ decorators
│  │  │  ├─ get-user.decorator.ts
│  │  │  └─ roles.decorator.ts
│  │  ├─ utils
│  │  │  └─ auth.utils.ts
│  │  └─ utils.ts
│  ├─ configs
│  │  ├─ database.config.ts
│  │  └─ env-validation.config.ts
│  ├─ local-specialty
│  │  ├─ dto
│  │  │  ├─ create-local-specialty.dto.ts
│  │  │  ├─ search-local-specialty.dto.ts
│  │  │  └─ update-local-specialty.dto.ts
│  │  ├─ entities
│  │  │  └─ local-specialty.entity.ts
│  │  ├─ local-specialty.controller.spec.ts
│  │  ├─ local-specialty.controller.ts
│  │  ├─ local-specialty.module.ts
│  │  ├─ local-specialty.service.spec.ts
│  │  ├─ local-specialty.service.ts
│  │  └─ types
│  │     ├─ region.type.ts
│  │     └─ season.type.ts
│  ├─ main.ts
│  ├─ map.controller.ts
│  ├─ map.module.ts
│  ├─ map.service.ts
│  ├─ map.ts
│  ├─ order
│  │  ├─ dto
│  │  │  ├─ create-order-item.dto.ts
│  │  │  └─ create-order.dto.ts
│  │  ├─ entities
│  │  │  ├─ order-item.entity.ts
│  │  │  └─ order.entity.ts
│  │  ├─ order.controller.spec.ts
│  │  ├─ order.controller.ts
│  │  ├─ order.module.ts
│  │  ├─ order.service.spec.ts
│  │  ├─ order.service.ts
│  │  └─ schedulers
│  │     └─ order.scheduler.ts
│  ├─ review
│  │  ├─ dto
│  │  │  ├─ create-review.dto.ts
│  │  │  └─ update-review.dto.ts
│  │  ├─ entities
│  │  │  └─ review.entity.ts
│  │  ├─ review.controller.spec.ts
│  │  ├─ review.controller.ts
│  │  ├─ review.module.ts
│  │  ├─ review.service.spec.ts
│  │  └─ review.service.ts
│  ├─ store
│  │  ├─ dto
│  │  │  ├─ create-store.dto.ts
│  │  │  ├─ search-store.dto.ts
│  │  │  └─ update-store.dto.ts
│  │  ├─ entities
│  │  │  └─ store.entity.ts
│  │  ├─ store.controller.spec.ts
│  │  ├─ store.controller.ts
│  │  ├─ store.module.ts
│  │  ├─ store.service.spec.ts
│  │  └─ store.service.ts
│  ├─ store-product
│  │  ├─ dto
│  │  │  ├─ create-store-product.dto.ts
│  │  │  └─ update-store-product.dto.ts
│  │  ├─ entities
│  │  │  └─ store-product.entity.ts
│  │  ├─ store-product.controller.spec.ts
│  │  ├─ store-product.controller.ts
│  │  ├─ store-product.module.ts
│  │  ├─ store-product.service.spec.ts
│  │  └─ store-product.service.ts
│  ├─ user
│  │  ├─ dto
│  │  │  ├─ cash.dto.ts
│  │  │  ├─ change.dto.ts
│  │  │  ├─ delete.dto.ts
│  │  │  ├─ login.dto.ts
│  │  │  ├─ register.dto.ts
│  │  │  └─ update.dto.ts
│  │  ├─ entities
│  │  │  └─ user.entity.ts
│  │  ├─ user.controller.spec.ts
│  │  ├─ user.controller.ts
│  │  ├─ user.module.ts
│  │  ├─ user.service.spec.ts
│  │  └─ user.service.ts
│  └─ utils
│     └─ userInfo.decorator.ts
├─ test
│  ├─ app.e2e-spec.ts
│  └─ jest-e2e.json
├─ tsconfig.build.json
├─ tsconfig.json
└─ 특산물.sql

```

| 큰 기능        | 기능                                         | method | URL                                  |
| -------------- | -------------------------------------------- | ------ | ------------------------------------ |
| user           |                                              |        |                                      |
|                | 회원가입                                     | POST   | /user/sign-up                        |
|                | 로그인                                       | POST   | /user/sign-in                        |
|                | 회원정보 조회                                | GET    | /user/userinfo                       |
|                | 회원정보 수정                                | POST   | /user                                |
|                | 회원탈퇴                                     | DELETE | /user/:id                            |
|                | 일반 유저가 판매자(seller) role 얻기         | PATCH  | /user/seller                         |
|                | 캐시 충전                                    | POST   | /user/cash                           |
|                | 사용자 정보 업데이트                         | PATCH  | /user/:id                            |
| localSpecialty |                                              |        |                                      |
|                | 특산품 등록                                  | POST   | /specialty                           |
|                | 특산품 삭제                                  | DELETE | /specialty/:id                       |
|                | 모든 지역의 특산품 조회                      | GET    | /specialty                           |
|                | 지역의 특산품 조회                           | GET    | /specialty/region/:region            |
|                | 특산품 검색                                  | POST   | /specialty/search                    |
|                | 특산품 정보 수정                             | PATCH  | /specialty/:id                       |
|                | 특산품 id로 조회                             | GET    | /specialty/:id                       |
| order          |                                              |        |                                      |
|                | 직접 주문하기                                | POST   | /order/direct                        |
|                | 장바구니 주문하기                            | POST   | /order/cart                          |
|                | 결제하기                                     | POST   | /order/:id/pay                       |
|                | 로그인한 유저의 모든 주문 조회하기           | GET    | /order                               |
|                | 주문 하나 조회하기                           | GET    | /order/:id                           |
|                | 주문 배송 상태 확인하기                      | GET    | /order/:id/status                    |
|                | 주문 취소하기                                | DELETE | /order/:id                           |
| cart-item      |                                              |        |                                      |
|                | 장바구니 담기                                | POST   | /cart-item/:store_id                 |
|                | 장바구니 조회                                | GET    | /cart-item                           |
|                | 장바구니에서 물품 삭제                       | DELETE | /cart-item/:id                       |
|                | 장바구니에서 물품 갯수 수정하기              | PATCH  | /cart-item/:id                       |
| review         |                                              |        |                                      |
|                | 로그인한 유저가 상점에 대한 리뷰 작성        | POST   | /review                              |
|                | 로그인한 유저가 상점에 대한 리뷰 제거        | DELETE | /review/:store_id                    |
|                | 특정 상점의 모든 리뷰 조회                   | GET    | /review/:store_id                    |
|                | 로그인한 유저가 상점에 대해 작성한 리뷰 수정 | PATCH  | /review/:store_id                    |
| store          |                                              |        |                                      |
|                | 상점 생성 (판매자)                           | POST   | /store                               |
|                | 상점 정보 수정                               | PATCH  | /store/:id                           |
|                | 상점 삭제                                    | DELETE | /store/:id                           |
|                | 상점 검색                                    | POST   | /store/search                        |
|                | 모든 상점 조회                               | GET    | /store                               |
|                | 특정 상점 조회                               | GET    | /store/:id                           |
|                | 상점 판매량 확인                             | GET    | /store/:id/sales                     |
|                |                                              |        |                                      |
|                | 상점 내 상품 등록                            | POST   | /store/:store_id/product             |
|                | 상점 내 상품 조회                            | GET    | /store/:store_id/product             |
|                | 상점 내 상품 하나 상세 조회                  | GET    | /store/:store_id/product/:product_id |
|                | 상점 내 상품 수정                            | PATCH  | /store/:store_id/product/:product_id |
|                | 상점 내 상품 삭제                            | DELETE | /store/:store_id/product/:product_id |
|                |                                              |        |                                      |
