import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Region } from '../types/region.type';
import { StoreProduct } from 'src/store-product/entities/store-product.entity';

@Entity()
export class LocalSpecialty {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column()
  season_info: string;

  @Column({ type: 'enum', enum: Region })
  region: Region;

  @Column()
  image_url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @OneToMany(() => StoreProduct, (storeProduct) => storeProduct.local_specialty)
  storeProducts: StoreProduct[];
}
