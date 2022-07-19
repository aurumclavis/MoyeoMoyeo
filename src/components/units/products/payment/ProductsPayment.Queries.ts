import { gql } from "@apollo/client";
export const CREATE_PAYMENT = gql`
  mutation createPayment(
    $impUid: String!
    $productId: String!
    $address: String!
  ) {
    createPayment(impUid: $impUid, productId: $productId, address: $address) {
      id
      payAmount
    }
  }
`;
