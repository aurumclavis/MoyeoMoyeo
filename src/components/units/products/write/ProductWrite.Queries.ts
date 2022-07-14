import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation createProduct($productInput: ProductInput!) {
    createProduct(productInput: $productInput) {
      id
      name
    }
  }
`;
