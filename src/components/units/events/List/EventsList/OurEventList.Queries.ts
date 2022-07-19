import { gql } from "@apollo/client";

export const FETCH_POST = gql`
  query fetchPosts {
    fetchPosts {
      id
      title
      dateStart
      dateEnd
      # images
      category
      uploadedAt
      viewCount
      likedUsers {
        id
      }
    }
  }
`;
