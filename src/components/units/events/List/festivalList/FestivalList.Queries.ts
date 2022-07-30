import { gql } from "@apollo/client";

// export const FETCH_POSTS = gql`
//   query fetchPosts(page: Float $pageSize: Float) {
//     fetchPosts (page: $pagepageSize: $pageSize){
//       id
//     }
//   }
// `;

export const FETCH_EVENTS = gql`
  query fetchEvents {
    fetchEvents {
      id
      name
      description
      date
      areaCode
      imgSrc
      urlRedirect
    }
  }
`;
