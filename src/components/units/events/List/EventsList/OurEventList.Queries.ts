import { gql } from "@apollo/client";

export const FETCH_POST = gql`
  query fetchPosts {
    fetchPosts {
      id
      title
      description
      # mainImage{
      #   id
      #   src
      # }
      category
      viewCount
      # likedUsers
    }
  }
`;
