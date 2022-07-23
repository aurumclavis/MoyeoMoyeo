import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      id
      title
      contents
      remark
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
      scheduledUsers {
        id
        name
      }
      boardAddress {
        lat
        lng
        postal
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
      createdAt
      accompanyRequests {
        id
        # reqUser {
        #   id
        # }
      }
    }
  }
`;

export const MAKE_BOARD_FULL = gql`
  mutation makeBoardFull($boardId: String!) {
    makeBoardFull(boardId: $boardId) {
      title
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

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: String!) {
    deleteBoard(boardId: $boardId)
  }
`;
