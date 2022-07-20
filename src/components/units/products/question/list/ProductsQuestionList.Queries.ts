import { gql } from "@apollo/client";

export const FETCH_PRODUCT_COMMENTS = gql`
  query fetchProductComments($productId: String!) {
    fetchProductComments(productId: $productId) {
      id
      content
      createdAt
      children {
        id
        content
      }
    }
  }
`;
