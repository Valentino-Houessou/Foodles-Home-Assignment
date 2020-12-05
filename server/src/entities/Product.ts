import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Purchase } from "./Purchase";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  @Column({ type: "decimal" })
  price!: number;

  @Column({ type: "int", default: 0 })
  quantity!: number;

  @Column({ unique: true })
  pictureUrl!: string;

  @OneToMany(() => Purchase, (purchases) => purchases.client)
  purchases!: Purchase[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
