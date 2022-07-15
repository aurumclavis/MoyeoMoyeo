import { gql } from "@apollo/client";

export const FETCH_PRODUCT = gql`
  query fetchProduct($productId: String!) {
    fetchProduct(productId: $productId) {
      id
      name
      description
      contentSrc
      price
      viewCount
      createdAt
      isSoldout
      seller {
        name
        id
        email
        phone
        isAdmin
      }
      likedUsers {
        id
      }
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: String!) {
    deleteProduct(productId: $productId)
  }
`;
