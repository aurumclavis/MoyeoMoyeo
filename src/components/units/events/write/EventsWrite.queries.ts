import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation createPost($postInput: PostInput!) {
    createPost(postInput: $postInput) {
      id
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

export const UPDATE_POST = gql`
  mutation updatePost($postId: String!, $updatePostInput: UpdatePostInput) {
    updatePost(postId: $postId, updatePostInput: $updatePostInput) {
      id
    }
  }
`;
