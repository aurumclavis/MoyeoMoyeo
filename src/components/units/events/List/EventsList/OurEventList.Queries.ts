import { gql } from "@apollo/client";

export const FETCH_POSTS = gql`
  query fetchPosts($page: Float, $pageSize: Float) {
    fetchPosts(page: $page, pageSize: $pageSize) {
      id
      title
      dateStart
      dateEnd
      images {
        id
        src
      }
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

export const LOAD_EVENTS = gql`
  query loadEvents($pageIndex: String!, $loadSize: String!) {
    loadEvents(pageIndex: $pageIndex, loadSize: $loadSize)
  }
`;
