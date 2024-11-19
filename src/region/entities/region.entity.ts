import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum RegionProvince {}
@Entity()
export class Region {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: RegionProvince })
  province: RegionProvince;
}
