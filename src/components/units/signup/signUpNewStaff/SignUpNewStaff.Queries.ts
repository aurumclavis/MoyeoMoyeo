import { gql } from "@apollo/client";

// 관리자 회원가입
export const CREATE_USER = gql`
  mutation createUser($userInput: UserInput!) {
    createUser(userInput: $userInput) {
      id
      email
      manager
      phone
      institution
      name
    }
  }
`;

//핸드폰 인증
export const SEND_SMS = gql`
  mutation sendSMS($phone: String!) {
    sendSMS(phone: $phone)
  }
`;

// 인증번호 확인
export const VALIDATE_PHONE = gql`
  mutation validatePhone($phone: String!, $tokenInput: String!) {
    validatePhone(phone: $phone, tokenInput: $tokenInput)
  }
`;
