import { gql } from "@apollo/client";

// 로그인
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
    }
  }
`;
// backend 07꺼
// export const FETCH_USER_LOGGED_IN = gql`
//   query fetchUserLoggedIn {
//     fetchUserLoggedIn {
//       _id
//       email
//       name
//     }
//   }
// `;

// 우리꺼 (는 확인하고 사용하기)
// export const FETCH_USER = gql`
//   query fetchUser {
//     fetchUser {
//       _id
//       email
//       name
//     }
//   }
// `;
