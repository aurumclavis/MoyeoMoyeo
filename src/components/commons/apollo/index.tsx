import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { GetAccessToken } from "../../../commons/libraries/getAccessToken";
import { accessTokenState } from "../../../commons/store";
import { onError } from "@apollo/client/link/error";

export default function ApolloSetting(props: any) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  useEffect(() => {
    GetAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  const uploadLink = createUploadLink({
    uri: "https://backend07.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // call-back함수
    // 1-1. 에러를 캐치
    if (graphQLErrors) {
      // 여러개가 배열로 들어온다
      for (const err of graphQLErrors) {
        // 1-2. 해당에러가 토큰만료 에러인지 체크
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2-1. refreshToken으로 accessToken을 재발급 받기
          GetAccessToken().then((newAccessToken) => {
            // 2-2. 재발급 받은 accessToken 저장하기
            setAccessToken(newAccessToken); // recoil state에 다시 넣음
            // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
            // operation -> 방금 실패한 쿼리에 대한 정보들
            // 토큰만 조용히 새로 바꾸는거임
            operation.setContext({
              // 정보 바꾸기
              ...operation.getContext().headers, // 정보 가져오기
              headers: {
                Authorization: `Bearer ${newAccessToken}`, // accessToken만 바꿔치기
              },
            });
            // 3-2. 변경된 operation재요청하기
            return forward(operation);
          });
        }
      }
    }
  });
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });
  return (
    <>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </>
  );
}
