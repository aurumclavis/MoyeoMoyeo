import { gql } from "@apollo/client";

export const FETCH_EVENTS = gql`
  query fetchEvents {
    fetchEvents {
      id
      name
      description
      date
      areaCode
      imgSrc
    }
  }
`;

export const FETCH_POSTS = gql`
  query fetchPosts {
    fetchPosts {
      id
      title
      dateStart
      dateEnd
      # images{id src }
      category
      uploadedAt
      viewCount
      description
      likedUsers {
        id
      }
    }
  }
`;
