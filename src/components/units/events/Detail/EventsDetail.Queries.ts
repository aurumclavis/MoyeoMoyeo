import { gql } from "@apollo/client";

export const FETCH_POST = gql`
  query fetchPost($postId: String!) {
    fetchPost(postId: $postId) {
      id
      title
      # writer {
      #   id
      #   manager
      # }
      address
      description
      dateStart
      dateEnd
      # images
      category
      viewCount
      uploadedAt
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

export const UNDIBS_POST = gql`
  mutation undibsPost($postId: String!) {
    undibsPost(postId: $postId) {
      id
    }
  }
`;
