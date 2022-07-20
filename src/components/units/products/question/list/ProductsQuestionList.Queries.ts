import { gql } from "@apollo/client";

// 댓글 조회할 때 사용
export const FETCH_PRODUCT_COMMENTS = gql`
  query fetchProductComments($productId: String!) {
    fetchProductComments(productId: $productId) {
      id
      content
      createdAt
      children {
        id
        createdAt
        content
      }
      parent {
        id
        createdAt
        content
      }
    }
  }
`;

// 대댓글 조회할 때 사용
export const FETCH_COMMENT = gql`
  query fetchComment($commentId: String!) {
    fetchComment(commentId: $commentId) {
      id
      content
      parent {
        id
        content
        createdAt
      }
      children {
        id
        content
        createdAt
      }
    }
  }
`;

// 댓글, 대댓글 삭제
export const DELETE_COMMENT = gql`
  mutation deleteComment($commentId: String!) {
    deleteComment(commentId: $commentId)
  }
`;
