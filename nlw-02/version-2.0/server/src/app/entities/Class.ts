import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { v4 as uuid } from 'uuid';

import { Exclude } from 'class-transformer';

import { User } from './User';
import { Subject } from './Subject';

@Entity('classes')
class Class {
  @PrimaryColumn()
  id: string;

  @Column()
  cost: number;

  @Exclude()
  @Column()
  user_id: string;

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => User)
  user: User;

  @Exclude()
  @Column()
  subject_id: string;

  @JoinColumn({ name: 'subject_id' })
  @ManyToOne(() => Subject)
  subject: Subject;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Class };
