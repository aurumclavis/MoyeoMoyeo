import * as S from "../events/MyPageUserEvents.Styles";

export default function MyPageUserBuy() {
  return (
    <S.Wrapper>
      {new Array(5).fill(1).map((el, index) => (
        <S.ItemWrapper key={index}>
          <S.ItemImageWrapper>
            <S.ItemImage src="../../배너이미지_상품1.png" />
          </S.ItemImageWrapper>
          <S.ItemContentsWrapper>
            <S.ItemTitle>상품이름</S.ItemTitle>
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
          </S.ItemContentsWrapper>
        </S.ItemWrapper>
      ))}
    </S.Wrapper>
  );
}
