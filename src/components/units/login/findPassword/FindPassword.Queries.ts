import { gql } from "@apollo/client";
// 이메일 인증
export const sendEmail = gql`
  mutation sendEmail($email: String!) {
    sendEmail(email: $email){
    }
  }
`;
// 인증번호 확인
export const authorizeReset = gql`
  mutation sendEmail($email: String!, $tokenInput: String!) {
    sendEmail(email: $email, tokenInput:$tokenInput){
    }
  }
`;

// 비밀번호 업데이트
export const updateUser = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      name
      password
      email
      phone
      institution
      manager
    }
  }
`;
