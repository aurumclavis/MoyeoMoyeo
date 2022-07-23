import { gql } from "@apollo/client";

// 댓글 조회할 때 사용
export const FETCH_PRODUCT_COMMENTS = gql`
  query fetchProductComments(
    $productId: String!
    $page: Float
    $pageSize: Float!
  ) {
    fetchProductComments(
      productId: $productId
      page: $page
      pageSize: $pageSize
    ) {
      id
      content
      createdAt
      writer {
        name
        manager
      }
      children {
        id
        createdAt
        content
        writer {
          name
          manager
        }
      }
      parent {
        id
        createdAt
        content
        writer {
          name
          manager
        }
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
      createdAt
      writer {
        name
        manager
      }
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
