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
        id
        email
        phone
        manager
        institution
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

export const DIBS_PRODUCT = gql`
  mutation dibsProduct($productId: String!) {
    dibsProduct(productId: $productId) {
      email
    }
  }
`;
export const UNDIBS_PRODUCT = gql`
  mutation undibsProduct($productId: String!) {
    undibsProduct(productId: $productId) {
      email
    }
  }
`;
// export const UNDIBS_PRODUCT = gql`
//   mutation undibsProduct($productId: String!) {
//     undibsProduct(productId: $productId) {
//       name
//       email
//     }
//   }
// `;
