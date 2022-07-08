import * as S from "./EventsDetail.Styles";

export default function EventsDetailUI() {
  return (
    <>
      <S.Wrapper>
        <S.HeaderWrapper>
          <S.HeaderTitle>행사명 행사명 행사명</S.HeaderTitle>
          <S.HeaderCalendar>기간 2022.07.01 - 2022.07.29</S.HeaderCalendar>
        </S.HeaderWrapper>
        <S.BodyWrapper>
          <S.MainWrapper>
            <S.MainImg src="/배너이미지_행사1.png" />
            <S.MainLeftWrapper>
              <S.MainHeaderWrapper>
                <S.MainTitle>이벤트타입 요약</S.MainTitle>
                <S.MainHost>기관명</S.MainHost>
              </S.MainHeaderWrapper>
              <S.MainContents>
                요약글 내용 요약글 내용 요약글 내용 요약글 내용 요약글 내용
                요약글 내용 요약글 내용 요약글 내용 요약글 내용 요약글 내용
                요약글 내용 요약글 내용 요약글 내용 요약글 내용 요약글 내용
                요약글 내용 요약글 내용 요약글 내용 요약글 내용 요약글 내용
                요약글 내용 요약글 내용 요약글 내용 요약글 내용 요약글 내용
                요약글 내용 요약글 내용 요약글 내용 요약글 내용 요약글 내용
                요약글 내용 요약글 내용 요약글 내용 요약글 내용 요약글 내용
                요약글 내용 요약글 내용 요약글 내용 요약글 내용 요약글 내용
                요약글 내용 요약글 내용 요약글 내용 요약글 내용요약글 내용
                요약글 내용 요약글 내용 요약글 내용 요약글 내용 요약글 내용
                요약글 내용 요약글 내용 요약글 내용 요약글 내용 요약글
              </S.MainContents>
            </S.MainLeftWrapper>
          </S.MainWrapper>
          <S.ContentsWrapper>
            <S.MenuBtnWrapper>
              <S.MenuBtn>상세보기</S.MenuBtn>
              <S.MenuBtn>이벤트장소</S.MenuBtn>
            </S.MenuBtnWrapper>
            <S.Contents>
              <S.ContentImg src="/배너이미지_행사1.png" />
            </S.Contents>
            <S.ContetsText></S.ContetsText>
          </S.ContentsWrapper>

          <S.Footer>
            <S.BtnRouter>관련 사이트 보러가기</S.BtnRouter>
            <S.BtnRouterList>목록으로</S.BtnRouterList>
            <S.BtnRouter>같이 갈 동행 구하기</S.BtnRouter>
          </S.Footer>
        </S.BodyWrapper>
      </S.Wrapper>
    </>
  );
}
