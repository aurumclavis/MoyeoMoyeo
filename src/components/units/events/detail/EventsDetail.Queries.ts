import { gql } from "@apollo/client";

export const FETCH_POST = gql`
  query fetchPost($postId: String!) {
    fetchPost(postId: $postId) {
      title
      address
      description
      dateStart
      dateEnd
      category
      images {
        src
      }
      viewCount
      likedUsers {
        id
      }
      writer {
        id
        manager
        email
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

export const DELETE_POST = gql`
  mutation deletePost($postId: String!) {
    deletePost(postId: $postId)
  }
`;
