import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Float, $pageSize: Float) {
    fetchBoards(page: $page, pageSize: $pageSize) {
      id
      isFull
      title
      contents
      remark
      viewCount
      personCount
      dateStart
      dateEnd
      writer {
        id
      }
      coverImage {
        src
      }
      eventName
      eventStart
      eventEnd
      eventCategory
      accompanyRequests {
        id
        reqUser {
          id
        }
      }
    }
  }
`;
export const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      id
      manager
    }
  }
`;
export const REQUEST_ACCOMPANY = gql`
  mutation requestAccompany($boardId: String!) {
    requestAccompany(boardId: $boardId)
  }
`;
