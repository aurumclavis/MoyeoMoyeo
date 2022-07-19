import { gql } from "@apollo/client";

export const FETCH_LOGIN_PAYMENTS = gql`
  query fetchLoginPayments {
    fetchLoginPayments {
      impUid
      transactAt
      status
      payAmount
      retrieveAddress
    }
  }
`;
