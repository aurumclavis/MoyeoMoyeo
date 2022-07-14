import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($userInput: UserInput!) {
    createUser(userInput: $userInput) {
      _id
      email
      phone
      institution
      manager
    }
  }
`;
export const sendSMS = gql`
  mutation sendSMS($phone: String!) {
    sendSMS(phone: $phone){
    }
  }
`;
export const validatePhone = gql`
  mutation sendSMS($phone: String!,tokenInput: String!) {
    sendSMS(phone: $phone,tokenInput:$tokenInput){
    }
  }
`;
