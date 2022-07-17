import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation createPost($postInput: PostInput!) {
    createPost(postInput: $postInput) {
      _id
    }
  }
`;

export const UPLOAD_IMAGES = gql`
  mutation uploadImages($files: Upload!) {
    uploadFile(file: $files) {
      # 리턴값이 읎엉..?
      id
    }
  }
`;
