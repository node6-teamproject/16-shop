import { CartItem } from '../entities/cart-item.entity';

export type CartItemResponse = {
  message: string;
  cartItem?: CartItem;
};

export type DeleteOptions = {
  user_id: number;
  cart_item_id?: number;
  store_product_ids?: number[];
};

export type DeleteResult = {
  affected?: number;
  raw?: any;
};
