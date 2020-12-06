import { Field, Float, Int, ObjectType } from "type-graphql";
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

@ObjectType()
@Entity()
export class Product extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column({ unique: true })
  name!: string;

  @Field(() => Float)
  @Column({ type: "decimal" })
  price!: number;

  @Field(() => Int)
  @Column({ type: "int", default: 0 })
  quantity!: number;

  @Field(() => String)
  @Column({ unique: true })
  pictureUrl!: string;

  @OneToMany(() => Purchase, (purchases) => purchases.client)
  purchases!: Purchase[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
