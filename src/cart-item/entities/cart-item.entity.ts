import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CartItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  store_product_id: number;

  @Column()
  quantity: number;

  @ManyToOne(() => User, (user) => user.cartItem)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
