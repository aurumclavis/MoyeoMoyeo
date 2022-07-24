import { gql } from "@apollo/client";

export const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment($commentInput: CommentInput!, $boardId: String!) {
    createBoardComment(commentInput: $commentInput, boardId: $boardId) {
      id
      createdAt
      content
    }
  }
`;

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: String!, $page: Float, $pageSize: Float) {
    fetchBoardComments(boardId: $boardId, page: $page, pageSize: $pageSize) {
      id
      createdAt
      content
      writer {
        name
        id
      }
      children {
        id
        createdAt
        content
        writer {
          name
        }
      }
      parent {
        id
        createdAt
        content
        writer {
          name
        }
      }
    }
  }
`;

export const FETCH_COMMENT = gql`
  query fetchComment($commentId: String!) {
    fetchComment(commentId: $commentId) {
      id
      content
      createdAt
      writer {
        name
        manager
        id
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

export const DELETE_COMMENT = gql`
  mutation deleteComment($commentId: String!) {
    deleteComment(commentId: $commentId)
  }
`;
