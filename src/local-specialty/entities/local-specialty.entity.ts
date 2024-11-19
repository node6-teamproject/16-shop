import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class LocalSpecialty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  region_id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  season_info: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
