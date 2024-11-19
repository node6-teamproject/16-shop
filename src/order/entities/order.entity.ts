import {
  Column,
  CreateDateColumn,
  Entity,
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
}
