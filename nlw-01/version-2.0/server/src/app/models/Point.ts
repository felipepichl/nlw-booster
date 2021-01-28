import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Image from './Image';
import Item from './Item';

@Entity('points')
export default class Point {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  whatsapp: string;

  @Column('decimal')
  latitude: number;

  @Column('decimal')
  longitude: number;

  @Column()
  city: string;

  @Column()
  uf: string;

  @OneToMany(() => Image, image => image.point, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'point_id' })
  images: Image[];

  @ManyToMany(() => Item)
  @JoinTable()
  items: Item[];

  @UpdateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
