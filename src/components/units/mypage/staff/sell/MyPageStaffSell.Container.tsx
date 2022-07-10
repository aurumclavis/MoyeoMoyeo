import * as S from "../../listItem/MyPageListItem.Styles";
export default function MyPageStaffSell() {
  return (
    <S.Wrapper>
      <S.ItemWrapper>
        <S.ItemImageWrapper>
          <S.ItemImage src="../../배너이미지_상품1.png" />
        </S.ItemImageWrapper>
        <S.ItemContentsWrapper>
          <S.ItemTitle>
            <S.ItemFinished isFinished={false}>[판매중]</S.ItemFinished>{" "}
            상품이름
          </S.ItemTitle>
          <S.ItemRowWrapper>
            <S.ItemText>10000원</S.ItemText>
            <S.ItemText>2022.07.28 00:00</S.ItemText>
          </S.ItemRowWrapper>
          <S.ItemText>
            내용입니다 내용입니다 내용입니다 내용입니다 내용입니다 내용입니다
            내용입니다 내용입니다 내용입니다 내용입니다 내용입니다 내용입니다
            내용입니다 내용입니다 내용입니다 내용입니다 내용입니다 내용입니다
            내용입니다 내용입니다 내용입니다 내용입니다 내용입니다 내용입니다
            내용입니다 내용입니다 내용입니다 내용입니다 내용입니다 내용입니다
            내용입니다 내용입니다 내용입니다 내용입니다
          </S.ItemText>
          <S.MoreText type="staff">상품 정보 더 보기</S.MoreText>
        </S.ItemContentsWrapper>
      </S.ItemWrapper>
      <S.ItemWrapper>
        <S.ItemImageWrapper>
          <S.ItemImage src="../../배너이미지_상품2.png" />
        </S.ItemImageWrapper>
        <S.ItemContentsWrapper>
          <S.ItemTitle>
            <S.ItemFinished isFinished={true}>[판매완료]</S.ItemFinished>{" "}
            상품이름
          </S.ItemTitle>
          <S.ItemRowWrapper>
            <S.ItemText>10000원</S.ItemText>
            <S.ItemText>2022.07.28 00:00</S.ItemText>
          </S.ItemRowWrapper>
          <S.ItemText>
            내용입니다 내용입니다 내용입니다 내용입니다 내용입니다 내용입니다
            내용입니다 내용입니다 내용입니다 내용입니다 내용입니다 내용입니다
            내용입니다 내용입니다 내용입니다 내용입니다 내용입니다 내용입니다
            내용입니다 내용입니다 내용입니다 내용입니다 내용입니다 내용입니다
            내용입니다 내용입니다 내용입니다 내용입니다 내용입니다 내용입니다
            내용입니다 내용입니다 내용입니다 내용입니다
          </S.ItemText>
          <S.MoreText type="staff">상품 정보 더 보기</S.MoreText>
        </S.ItemContentsWrapper>
      </S.ItemWrapper>
    </S.Wrapper>
  );
}
