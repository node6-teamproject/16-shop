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
│  ├─ accountdelete.html
│  ├─ cash.html
│  ├─ data.html
│  ├─ goods.correction.html
│  ├─ goods.delete.html
│  ├─ goods.register.html
│  ├─ images
│  │  └─ south-korea.svg
│  ├─ index.html
│  ├─ korea-map.js
│  ├─ korea.html
│  ├─ login.html
│  ├─ map.js
│  ├─ mypage.correction.html
│  ├─ mypage.html
│  ├─ mypage.orderlist.html
│  ├─ mypage.review.html
│  ├─ register.html
│  ├─ rolechange.html
│  ├─ store.review.html
│  ├─ storecheck.correction.html
│  ├─ storecheck.html
│  ├─ storedelete.html
│  └─ storeregistration.html
├─ README.md
├─ src
│  ├─ app.controller.ts
│  ├─ app.module.ts
│  ├─ app.service.ts
│  ├─ auth
│  │  ├─ auth.module.ts
│  │  ├─ guards
│  │  │  ├─ jwt-auth.guard.ts
│  │  │  └─ roles.guard.ts
│  │  └─ strategies
│  │     └─ jwt.strategy.ts
│  ├─ cart-item
│  │  ├─ cart-item.controller.ts
│  │  ├─ cart-item.module.ts
│  │  ├─ cart-item.repository.ts
│  │  ├─ cart-item.service.ts
│  │  ├─ cart-item.validator.ts
│  │  ├─ dto
│  │  │  ├─ create-cart-item.dto.ts
│  │  │  └─ update-cart-item.dto.ts
│  │  ├─ entities
│  │  │  └─ cart-item.entity.ts
│  │  ├─ interfaces
│  │  │  └─ cart-item.interface.ts
│  │  └─ types
│  │     └─ cart-item.type.ts
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
│  ├─ crawl.ts
│  ├─ local-specialty
│  │  ├─ crawler
│  │  │  └─ local-specialty.crawler.ts
│  │  ├─ dto
│  │  │  ├─ create-local-specialty.dto.ts
│  │  │  ├─ search-local-specialty.dto.ts
│  │  │  └─ update-local-specialty.dto.ts
│  │  ├─ entities
│  │  │  ├─ local-specialty.crawler.entity.ts
│  │  │  └─ local-specialty.entity.ts
│  │  ├─ interfaces
│  │  │  └─ local-specialty.interface.ts
│  │  ├─ local-specialty.controller.ts
│  │  ├─ local-specialty.module.ts
│  │  ├─ local-specialty.repository.ts
│  │  ├─ local-specialty.service.ts
│  │  ├─ local-specialty.validator.ts
│  │  └─ types
│  │     ├─ local-specialty.type.ts
│  │     ├─ region.type.ts
│  │     └─ season.type.ts
│  ├─ main.ts
│  ├─ map.controller.ts
│  ├─ map.module.ts
│  ├─ map.service.ts
│  ├─ map.ts
│  ├─ order
│  │  ├─ dto
│  │  │  ├─ cart-order.dto.ts
│  │  │  └─ direct-order.dto.ts
│  │  ├─ entities
│  │  │  ├─ order-item.entity.ts
│  │  │  └─ order.entity.ts
│  │  ├─ interfaces
│  │  │  └─ order.interface.ts
│  │  ├─ order.controller.ts
│  │  ├─ order.module.ts
│  │  ├─ order.repository.ts
│  │  ├─ order.service.ts
│  │  ├─ order.validator.ts
│  │  ├─ schedulers
│  │  │  └─ order.scheduler.ts
│  │  └─ types
│  │     └─ order.type.ts
│  ├─ review
│  │  ├─ dto
│  │  │  ├─ create-review.dto.ts
│  │  │  └─ update-review.dto.ts
│  │  ├─ entities
│  │  │  └─ review.entity.ts
│  │  ├─ interfaces
│  │  │  └─ review.interface.ts
│  │  ├─ review.controller.ts
│  │  ├─ review.module.ts
│  │  ├─ review.repository.ts
│  │  ├─ review.service.ts
│  │  ├─ review.validator.ts
│  │  └─ types
│  │     └─ review.type.ts
│  ├─ store
│  │  ├─ dto
│  │  │  ├─ create-store.dto.ts
│  │  │  ├─ search-store.dto.ts
│  │  │  └─ update-store.dto.ts
│  │  ├─ entities
│  │  │  └─ store.entity.ts
│  │  ├─ interfaces
│  │  │  └─ store.interface.ts
│  │  ├─ store.controller.ts
│  │  ├─ store.module.ts
│  │  ├─ store.repository.ts
│  │  ├─ store.service.ts
│  │  ├─ store.validator.ts
│  │  └─ types
│  │     └─ store.type.ts
│  ├─ store-product
│  │  ├─ dto
│  │  │  ├─ create-store-product.dto.ts
│  │  │  └─ update-store-product.dto.ts
│  │  ├─ entities
│  │  │  └─ store-product.entity.ts
│  │  ├─ interfaces
│  │  │  └─ store-product.interface.ts
│  │  ├─ store-product.controller.ts
│  │  ├─ store-product.module.ts
│  │  ├─ store-product.repository.ts
│  │  ├─ store-product.service.ts
│  │  ├─ store-product.validator.ts
│  │  └─ types
│  │     └─ store-product.type.ts
│  └─ user
│     ├─ dto
│     │  ├─ cash.dto.ts
│     │  ├─ change.dto.ts
│     │  ├─ delete.dto.ts
│     │  ├─ login.dto.ts
│     │  ├─ register.dto.ts
│     │  └─ update.dto.ts
│     ├─ entities
│     │  └─ user.entity.ts
│     ├─ interfaces
│     │  └─ user.interface.ts
│     ├─ types
│     │  └─ user.type.ts
│     ├─ user.controller.ts
│     ├─ user.module.ts
│     ├─ user.repository.ts
│     ├─ user.service.ts
│     └─ user.validator.ts
├─ tsconfig.build.json
├─ tsconfig.build.tsbuildinfo
├─ tsconfig.json
├─ tsconfig.tsbuildinfo
└─ 특산물.sql

```
