import { gql } from "@apollo/client";

export const FETCH_PRODUCTS = gql`
  query fetchProducts {
    fetchProducts {
      id
      name
      description
      contentSrc
      price
      viewCount
      createdAt
      isSoldout
      seller {
        id
        name
        email
      }
    }
  }
`;
