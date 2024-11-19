import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order_id: number;

  @Column()
  store_product_id: number;

  @Column()
  quantity: number;

  @CreateDateColumn()
  created_at: Date;
}
