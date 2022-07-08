import * as S from "../events/MyPageUserEvents.Styles";

export default function MyPageUserBoards() {
  return (
    <S.Wrapper>
      {new Array(4).fill(1).map((el, index) => (
        <S.ItemWrapper key={index}>
          <S.ItemImageWrapper>
            <S.ItemImage src="../../배너이미지_동행1.png" />
          </S.ItemImageWrapper>
          <S.ItemContentsWrapper>
            <S.ItemTitle>[모집중] 음악페스티벌 하루 동행하실 분</S.ItemTitle>
            <S.ItemRowWrapper>
              <S.IconWrapper>
                <S.PeopleIcon />
                <S.ItemText>1명</S.ItemText>
              </S.IconWrapper>
              <S.IconWrapper>
                <S.CalendarIcon />
                <S.ItemText>2022.07.28~2022.07.28</S.ItemText>
              </S.IconWrapper>
            </S.ItemRowWrapper>
            <S.ItemText>
              요약 내용입니다 요약 내용입니다 요약 내용입니다 요약 내용입니다
              요약 내용입니다 요약 내용입니다 요약 내용입니다 요약 내용입니다
              요약 내용입니다 요약 내용입니다 요약 내용입니다 요약 내용입니다
              요약 내용입니다 요약 내용입니다 요약 내용입니다 요약 내용입니다
              요약 내용입니다 요약 내용입니다 요약 내용입니다 요약 내용입니다
              요약 내용입니다 요약 내용입니다 요약 내용입니다 요약 내용입니다
            </S.ItemText>
          </S.ItemContentsWrapper>
        </S.ItemWrapper>
      ))}
    </S.Wrapper>
  );
}
