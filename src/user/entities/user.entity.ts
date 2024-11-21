import { CartItem } from 'src/cart-item/entities/cart-item.entity';
import { Order } from 'src/order/entities/order.entity';
import { Review } from 'src/review/entities/review.entity';
import { Store } from 'src/store/entities/store.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum UserRole {
  CUSTOMER = '일반',
  SELLER = '판매자',
  ADMIN = '관리자',
}
@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  nickname: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.CUSTOMER })
  role: UserRole;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @OneToOne(() => Store, (store) => store.user)
  store: Store;

  @OneToMany(() => Review, (review) => review.user)
  review: Review[];

  @OneToMany(() => Order, (order) => order.user)
  order: Order[];

  @OneToMany(() => CartItem, (cartItem) => cartItem.user)
  cartItem: CartItem[];
}
