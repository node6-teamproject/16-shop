import { LocalSpecialty } from 'src/local-specialty/entities/local-specialty.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum RegionProvince {
  do = '경상남도',
}
@Entity()
export class Region {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: RegionProvince,default: RegionProvince.do })
  province: RegionProvince;

  @OneToMany(() => LocalSpecialty, (localSpecialty) => localSpecialty.region)
  localSpecialty: LocalSpecialty[];
}
