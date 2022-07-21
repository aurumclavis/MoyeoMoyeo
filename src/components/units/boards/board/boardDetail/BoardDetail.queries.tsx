import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      id
      title
      contents
      viewCount
      personCount
      isFull
      dateStart
      dateEnd
      transport
      writer {
        id
        name
      }
      #   scheduledUsers {
      #     id
      #   }
      boardAddress {
        lat
        lng
        address_description
      }
      coverImage {
        src
      }
      eventImage {
        src
      }
      eventName
      eventStart
      eventEnd
      eventCategory
    }
  }
`;

export const FETCH_REQUEST_USERS = gql`
  query fetchBoardRequest($boardId: String!) {
    fetchBoardRequest(boardId: $boardId) {
      reqUser {
        id
        name
      }
    }
  }
`;

export const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      id
    }
  }
`;

export const REQUEST_ACCOMPANY = gql`
  mutation requestAccompany($boardId: String!) {
    requestAccompany(boardId: $boardId) {
      id
    }
  }
`;
