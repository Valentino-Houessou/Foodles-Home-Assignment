import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  searchByName?: Maybe<Array<Client>>;
  availableProducts?: Maybe<Array<Product>>;
};


export type QuerySearchByNameArgs = {
  limit?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
};

export type Client = {
  __typename?: 'Client';
  id: Scalars['Int'];
  name: Scalars['String'];
  email: Scalars['String'];
  credit: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['Int'];
  name: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Int'];
  pictureUrl: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  processPurchase: Scalars['Boolean'];
};


export type MutationProcessPurchaseArgs = {
  input: PurchaseInput;
};

export type PurchaseInput = {
  clientId: Scalars['Int'];
  productsQuantities: Array<ProductQuantity>;
};

export type ProductQuantity = {
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
};

export type ProcessPurchaseMutationVariables = Exact<{
  input: PurchaseInput;
}>;


export type ProcessPurchaseMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'processPurchase'>
);

export type AvailableProductQueryVariables = Exact<{ [key: string]: never; }>;


export type AvailableProductQuery = (
  { __typename?: 'Query' }
  & { availableProducts?: Maybe<Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'price' | 'quantity' | 'pictureUrl'>
  )>> }
);

export type SearchClientQueryVariables = Exact<{
  name: Scalars['String'];
  limit?: Maybe<Scalars['Float']>;
}>;


export type SearchClientQuery = (
  { __typename?: 'Query' }
  & { searchByName?: Maybe<Array<(
    { __typename?: 'Client' }
    & Pick<Client, 'id' | 'name' | 'email' | 'credit'>
  )>> }
);


export const ProcessPurchaseDocument = gql`
    mutation ProcessPurchase($input: PurchaseInput!) {
  processPurchase(input: $input)
}
    `;

export function useProcessPurchaseMutation() {
  return Urql.useMutation<ProcessPurchaseMutation, ProcessPurchaseMutationVariables>(ProcessPurchaseDocument);
};
export const AvailableProductDocument = gql`
    query AvailableProduct {
  availableProducts {
    id
    name
    price
    quantity
    pictureUrl
  }
}
    `;

export function useAvailableProductQuery(options: Omit<Urql.UseQueryArgs<AvailableProductQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AvailableProductQuery>({ query: AvailableProductDocument, ...options });
};
export const SearchClientDocument = gql`
    query SearchClient($name: String!, $limit: Float) {
  searchByName(name: $name, limit: $limit) {
    id
    name
    email
    credit
  }
}
    `;

export function useSearchClientQuery(options: Omit<Urql.UseQueryArgs<SearchClientQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SearchClientQuery>({ query: SearchClientDocument, ...options });
};