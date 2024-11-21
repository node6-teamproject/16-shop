import { Product } from 'src/product/entities/product.entity';
import { Region } from 'src/region/entities/region.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class LocalSpecialty {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column({ type: 'int', unsigned: true })
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

  @ManyToOne(() => Region, (region) => region.localSpecialty)
  @JoinColumn({ name: 'region_id' })
  region: Region;

  @OneToMany(() => Product, (product) => product.localSpecialty)
  product: Product[];
}
