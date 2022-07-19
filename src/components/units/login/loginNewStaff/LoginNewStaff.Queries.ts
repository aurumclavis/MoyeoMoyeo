import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const FETCH_LOGIN_USER = gql`
  query fetchLoginUser($email: String!) {
    fetchLoginUser(email: $email) {
      id
      email
      manager
      institution
      phone
    }
  }
`;
