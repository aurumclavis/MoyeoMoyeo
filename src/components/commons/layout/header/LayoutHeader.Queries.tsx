import { gql } from "@apollo/client";

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

export const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      id
      email
      manager
      institution
      phone
    }
  }
`;
