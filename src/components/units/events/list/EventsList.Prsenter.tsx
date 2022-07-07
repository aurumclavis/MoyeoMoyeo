import * as S from "./EventsList.Styles";

export default function EventsListUI() {
  return (
    <>
      <S.Wrapper>
        <S.ListWrapper>
          <S.ListImg src="/배너이미지_동행2.png" />
          <S.ContentsWrapper>
            <S.ContentsTitleWrapper>
              <S.ContentsTitle>축제 이름 축제 이름</S.ContentsTitle>
              <S.ContentsPeriod>기간 yyyy-mm-dd - yyyy-mm-dd</S.ContentsPeriod>
            </S.ContentsTitleWrapper>
            <S.MarkerDetailWrapper>
              <S.Marker>
                요약글 요약글 요약글 요약글 요약글 요약글 요약글 요약글 요약글
                요약글 요약글 요약글 요약글 요약글 요약글 요약글 요약글 요약글
                요약글 요약글
              </S.Marker>
              <S.Btn>자세히 보러가기</S.Btn>
            </S.MarkerDetailWrapper>
          </S.ContentsWrapper>
        </S.ListWrapper>
      </S.Wrapper>
    </>
  );
}
