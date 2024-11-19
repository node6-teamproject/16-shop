import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StoreProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  store_id: number;

  @Column()
  product_id: number;

  @Column()
  price: number;

  @Column()
  stock: number;
}
