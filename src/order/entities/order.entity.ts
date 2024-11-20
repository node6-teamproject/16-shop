import { OrderItem } from 'src/order-item/entities/order-item.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum ShipStatus {
  DELIVERY_COMPLETED = '배송 완료',
  SHIPPING = '배송 중',
  SHIP_WAITING = '배송 대기',
  ORDER_COMPLETED = '주문 완료',
}
@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column({ type: 'enum', enum: ShipStatus })
  status: ShipStatus;

  @Column()
  order_address: string;

  @Column()
  order_method: string;

  @Column()
  total_cash: number;

  @Column()
  order_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.order)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  orderItem: OrderItem;
}
