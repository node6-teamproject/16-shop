import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
