import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./Product";
import { Client } from "./Client";

@Entity()
export class Purchase extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "int", default: 0 })
  quantity!: number;

  @ManyToOne(() => Product, (product) => product.purchases)
  product!: Product;

  @ManyToOne(() => Client, (client) => client.purchases)
  client!: Client;

  @CreateDateColumn()
  createdAt: Date;
}
