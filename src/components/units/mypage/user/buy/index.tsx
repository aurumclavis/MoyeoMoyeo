import { gql, useQuery } from "@apollo/client";
import * as S from "../../listItem/MyPageListItem.Styles";
import NoDataFound from "../../noDataFound";

const FETCH_LOGIN_PAYMENTS = gql`
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

export default function MyPageUserBuy() {
  const { data } = useQuery(FETCH_LOGIN_PAYMENTS);

  return (
    <S.Wrapper>
      {data?.fetchLoginPayments.map((el: any, index: number) => (
        <S.ItemWrapper key={index}>
          <S.ItemContentsWrapper>
            <S.ItemTitle>
              [{el.status === "PAYMENT" ? "결제완료" : "결제취소"}] {el.impUid}
            </S.ItemTitle>
            <S.ItemRowWrapper>
              <S.ItemText>{el.payAmount}원</S.ItemText>
              <S.ItemText>{el.transactAt}</S.ItemText>
            </S.ItemRowWrapper>
            <S.ItemText>배송 주소 : {el.retrieveAddress}</S.ItemText>
          </S.ItemContentsWrapper>
        </S.ItemWrapper>
      ))}
      {(data?.fetchLoginPayments.length === 0 || !data?.fetchLoginPayments) && (
        <NoDataFound />
      )}
    </S.Wrapper>
  );
}
