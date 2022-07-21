import { gql } from "@apollo/client";

// 로그인
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

// 로그인한) 유저정보
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
