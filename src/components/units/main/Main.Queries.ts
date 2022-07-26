import { gql } from "@apollo/client";

// 상품리스트
export const FETCH_PRODUCTS = gql`
  query fetchProducts {
    fetchProducts {
      id
      name
      price
      viewCount
      mainImage
      seller
      likedUsers
    }
  }
`;

// 동행리스트
// 이벤트리스트
