import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Item } from '@modules/items/infra/typeorm/entities/Item';
import { User } from '@modules/users/infra/typeorm/entities/User';

@Entity('points')
class Point {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

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

  @Column()
  image: string;

  @ManyToMany(() => Item)
  @JoinTable()
  items: Item[];

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @UpdateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Point };
