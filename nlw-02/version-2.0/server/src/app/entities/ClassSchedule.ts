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

import { Exclude, Expose } from 'class-transformer';

import { Class } from './Class';

@Entity('class_schedule')
class ClassSchedule {
  @PrimaryColumn()
  id: string;

  @Column()
  week_day: number;

  @Column()
  from: number;

  @Column()
  to: number;

  @Exclude()
  @Column()
  class_id: string;

  @JoinColumn({ name: 'class_id' })
  @ManyToOne(() => Class)
  class: Class;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: 'class' })
  getClasses(): Class {
    return this.class;
  }

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { ClassSchedule };
