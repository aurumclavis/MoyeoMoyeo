import { gql } from "@apollo/client";

export const FETCH_POST = gql`
  query fetchPost($postId: String!) {
    fetchPost(postId: $postId) {
      # id
      title
      # writer
      description
      # mainImage {
      #   id
      # }
      # subImages {
      #   id
      # }
      category
      viewCount
      likedUsers {
        id
      }
    }
  }
`;

export const DIBS_POST = gql`
  mutation dibsPost($postId: String!) {
    dibsPost(postId: $postId) {
      id
    }
  }
`;
