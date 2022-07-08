import * as S from "./EventsDetail.Styles";

export default function EventsDetailUI() {
  return (
    <>
      <S.Wrapper>
        <S.MainHost>기관명 주최</S.MainHost>
        <S.HeaderTitle>행사명 행사명 행사명</S.HeaderTitle>
        <S.LineDiv />
        <S.HeaderCalendar>2022.07.01 - 2022.07.29</S.HeaderCalendar>
        <S.LineDiv />

        <S.MainImg src="/배너이미지_행사1.png" />
        <S.MarkerWrapper>
          <S.MainTitle>이벤트타입 요약</S.MainTitle>
          <S.MainContents>
            요약글 내용 요약글 내용 요약글 내용 요약글 내용 요약글 내용 요약글
            내용 요약글 내용 요약글 내용 요약글 내용 요약글 내용 요약글 내용
            요약글 내용 요약글 내용 요약글 내용 요약글 내용 요약글 내용 요약글
            내용 요약글 내용 요약글 내용 요약글 내용 요약글
          </S.MainContents>
        </S.MarkerWrapper>
        <S.LineDiv />
        <S.ContentsWrapper>
          {/* <S.MenuBtnWrapper>
            <S.MenuBtn>상세보기</S.MenuBtn>
            <S.MenuBtn>이벤트장소</S.MenuBtn>
          </S.MenuBtnWrapper> */}

          <S.ContentImg src="/배너이미지_행사1.png" />
          <S.ContetsText>
            상세 설명이 들어갈 곳 입니다.상세 설명이 들어갈 곳 입니다.상세
            설명이 들어갈 곳 입니다.상세 설명이 들어갈 곳 입니다.상세 설명이
            들어갈 곳 입니다.상세 설명이 들어갈 곳 입니다.상세 설명이 들어갈 곳
            입니다.상세 설명이 들어갈 곳 입니다.
          </S.ContetsText>
        </S.ContentsWrapper>
        <S.LineDiv />
        <S.Footer>
          <S.BtnRouter>관련 사이트 보러가기</S.BtnRouter>
          <S.BtnRouterList>목록으로</S.BtnRouterList>
          <S.BtnRouter>같이 갈 동행 구하기</S.BtnRouter>
        </S.Footer>
      </S.Wrapper>
    </>
  );
}
