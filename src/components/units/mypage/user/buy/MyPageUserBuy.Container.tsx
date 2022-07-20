import { useQuery } from "@apollo/client";
import * as S from "../../listItem/MyPageListItem.Styles";
import NoDataFound from "../../noDataFound";
import { FETCH_LOGIN_PAYMENTS } from "./MyPageUserBuy.Queries";

export default function MyPageUserBuy() {
  const { data } = useQuery(FETCH_LOGIN_PAYMENTS);

  return (
    <S.Wrapper>
      {data?.fetchLoginPayments.map((el, index) => (
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
            {/* <S.MoreText>상품 정보 더 보기</S.MoreText> */}
          </S.ItemContentsWrapper>
        </S.ItemWrapper>
      ))}
      {(data?.fetchLoginPayments.length === 0 || !data?.fetchLoginPayments) && (
        <NoDataFound />
      )}
    </S.Wrapper>
  );
}
