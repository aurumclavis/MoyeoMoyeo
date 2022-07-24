import { gql, useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";
import * as S from "../../listItem/MyPageListItem.Styles";
import NoDataFound from "../../noDataFound";

const FETCH_LOGIN_PAYMENTS = gql`
  query fetchLoginPayments($page: Float, $pageSize: Float) {
    fetchLoginPayments(page: $page, pageSize: $pageSize) {
      impUid
      transactAt
      status
      payAmount
      retrieveAddress
    }
  }
`;

export default function MyPageUserBuy() {
  const PAGE_SIZE = 3;
  const { data, fetchMore } = useQuery(FETCH_LOGIN_PAYMENTS, {
    variables: { pageSize: PAGE_SIZE, page: 1 },
  });

  const loadPayments = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data.fetchLoginPayments.length / PAGE_SIZE) + 1,
        pageSize: PAGE_SIZE,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchLoginPayments)
          return { fetchLoginPayments: [...prev.fetchLoginPayments] };
        return {
          fetchLoginPayments: [
            ...prev.fetchLoginPayments,
            ...fetchMoreResult?.fetchLoginPayments,
          ],
        };
      },
    });
  };

  return (
    <S.Wrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadPayments}
        hasMore={true || false}
        useWindow={true}
      >
        {data?.fetchLoginPayments && data?.fetchLoginPayments.length !== 0 ? (
          data?.fetchLoginPayments.map((el: any, index: number) => (
            <S.ItemWrapper key={index}>
              <S.ItemContentsWrapper>
                <S.ItemTitle>
                  [{el.status === "PAYMENT" ? "결제완료" : "결제취소"}]{" "}
                  {el.impUid}
                </S.ItemTitle>
                <S.ItemRowWrapper>
                  <S.ItemText>{el.payAmount}원</S.ItemText>
                  <S.ItemText>{el.transactAt}</S.ItemText>
                </S.ItemRowWrapper>
                <S.ItemText>배송 주소 : {el.retrieveAddress}</S.ItemText>
              </S.ItemContentsWrapper>
            </S.ItemWrapper>
          ))
        ) : (
          <NoDataFound />
        )}
      </InfiniteScroll>
    </S.Wrapper>
  );
}
