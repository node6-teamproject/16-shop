import { StoreProduct } from 'src/store-product/entities/store-product.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CartItem {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column({ type: 'int', unsigned: true })
  user_id: number;

  @Column({ type: 'int', unsigned: true })
  store_product_id: number;

  @Column()
  quantity: number;

  @ManyToOne(() => User, (user) => user.cartItem)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => StoreProduct, (storeProduct) => storeProduct.cartItem)
  @JoinColumn({ name: 'store_product_id' })
  storeProduct: StoreProduct;
}
