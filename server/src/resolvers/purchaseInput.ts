import { InputType, Field, Int } from "type-graphql";

@InputType()
export class ProductQuantity {
  @Field(() => Int)
  productId!: number;
  @Field(() => Int)
  quantity!: number;
}

@InputType()
export class PurchaseInput {
  @Field(() => Int)
  clientId!: number;
  @Field(() => [ProductQuantity])
  productsQuantities!: ProductQuantity[];
}
