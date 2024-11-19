import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unsigned: true })
  user_id: number;

  @Column()
  name: string;

  @Column()
  content: string;

  @Column()
  address: string;

  @Column()
  contact: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
