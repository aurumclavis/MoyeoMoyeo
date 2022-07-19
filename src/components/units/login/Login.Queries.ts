import { gql } from "@apollo/client";

// 로그인
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

// 우리꺼 (는 확인하고 사용하기)
export const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      id
      email
      name
    }
  }
`;
