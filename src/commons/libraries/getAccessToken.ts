// accessToken 재발급용도의 함수
// refreshToken 요청
import { GraphQLClient } from "graphql-request";
import { gql } from "@apollo/client";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken
  }
`;
export async function GetAccessToken() {
  try {
    const graphQLClient = new GraphQLClient("https://momoyeo.site/graphql", {
      credentials: "include",
    });
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken;
    return newAccessToken;
  } catch (error) {
    // refresh Token 만료된 상태면 다시 로그인해야함
    console.log(error.message);
  }
}
