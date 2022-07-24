import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      id
      writer {
        id
        name
      }
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $boardId: String!
    $updateBoardInput: UpdateBoardInput!
  ) {
    updateBoard(boardId: $boardId, updateBoardInput: $updateBoardInput) {
      id
      # 널러블에러
      # writer {
      #   id
      #   name
      # }
      personCount
    }
  }
`;

export const FETCH_POST = gql`
  query fetchPost($postId: String!) {
    fetchPost(postId: $postId) {
      title
      address
      dateStart
      dateEnd
      category
      images {
        src
      }
    }
  }
`;

export const UPLOAD_IMAGES = gql`
  mutation uploadImages($files: [Upload!]!) {
    uploadImages(files: $files)
  }
`;

export const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      id
    }
  }
`;
