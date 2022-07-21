import { gql } from "@apollo/client";

export const CREATE_PRODUCT_COMMENT = gql`
  mutation createProductComment(
    $commentInput: CommentInput!
    $productId: String!
  ) {
    createProductComment(commentInput: $commentInput, productId: $productId) {
      id
      createdAt
      content
    }
  }
`;
