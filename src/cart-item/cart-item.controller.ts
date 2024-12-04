import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CartItemService } from './cart-item.service';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { User } from 'src/user/entities/user.entity';
import { GetUser } from 'src/common/decorators/get-user.decorator';

@ApiTags('CartItem')
@ApiBearerAuth('access-token')
@Controller('cart-item')
export class CartItemController {
  constructor(private readonly cartItemService: CartItemService) {}

  // 장바구니에 물품 추가하기, 장바구니 모든 물품 조회하기, 장바구니 물품 삭제하기

  // 장바구니에 물품 추가하기
  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@GetUser() user: User, @Body() createCartItemDto: CreateCartItemDto) {
    return this.cartItemService.create(user, createCartItemDto);
  }

  // 장바구니 모든 물품 조회하기
  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@GetUser() user: User) {
    return this.cartItemService.findAll(user);
  }

  // 장바구니 물품 삭제하기
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@GetUser() user: User, @Param('id') id: number) {
    return this.cartItemService.remove(user, id);
  }
}
