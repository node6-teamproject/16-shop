# 1. 빌드 단계
FROM node:16 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 2. 실행 단계
FROM node:16 AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./
COPY public ./public
EXPOSE 3000
CMD ["node", "dist/main"]
