import { gql } from "@apollo/client";

// 회원가입
export const CREATE_USER = gql`
  mutation createUser($userInput: UserInput!) {
    createUser(userInput: $userInput) {
      id
      email
      name
      phone
    }
  }
`;

//핸드폰인증
export const SEND_SMS = gql`
  mutation sendSMS($phone: String!) {
    sendSMS(phone: $phone)
  }
`;

//인증번호 확인
export const validatePhone = gql`
  mutation sendSMS($phone: String!, $tokenInput: String!) {
    sendSMS(phone: $phone, tokenInput: $tokenInput)
  }
`;
