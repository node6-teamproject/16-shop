import { LocalSpecialty } from 'src/local-specialty/entities/local-specialty.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToMany(() => LocalSpecialty, (localSpecialty) => localSpecialty.region)
  localSpecialty: LocalSpecialty[];
}
