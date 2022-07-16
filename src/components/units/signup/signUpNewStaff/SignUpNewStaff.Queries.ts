import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($userInput: UserInput!) {
    createUser(userInput: $userInput) {
      _id
      email
      manager
      phone
      institution
    }
  }
`;
export const SEND_SMS = gql`
  mutation sendSMS($phone: String!) {
    sendSMS(phone: $phone)
  }
`;
export const VALIDATE_PHONE = gql`
  mutation sendSMS($phone: String!, $tokenInput: String!) {
    sendSMS(phone: $phone, tokenInput: $tokenInput)
  }
`;
