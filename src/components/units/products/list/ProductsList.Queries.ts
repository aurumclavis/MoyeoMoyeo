import { gql } from "@apollo/client";

export const FETCH_PRODUCTS = gql`
  query fetchProducts($page: Float, $pageSize: Float) {
    fetchProducts(page: $page, pageSize: $pageSize) {
      id
      name
      description
      contentSrc
      price
      viewCount
      images {
        id
        src
      }
      createdAt
      isSoldout
      likedUsers {
        id
      }
    }
  }
`;
