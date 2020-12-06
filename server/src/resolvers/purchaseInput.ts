import { InputType, Field, Int } from "type-graphql";

@InputType()
export class PurchaseInput {
  @Field(() => Int)
  clientId!: number;
  @Field(() => Int)
  productId!: number;
  @Field(() => Int)
  quantity!: number;
}
