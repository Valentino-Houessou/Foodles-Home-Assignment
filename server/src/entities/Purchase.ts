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
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Purchase extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => Int)
  @Column({ type: "int", default: 0 })
  quantity!: number;

  @ManyToOne(() => Product, (product) => product.purchases)
  product!: Product;

  @ManyToOne(() => Client, (client) => client.purchases)
  client!: Client;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;
}
