import * as S from "./EventsDetail.Styles";
import { Tooltip } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import KakakomapPage from "./kakaomap/kakomap";

export default function EventsDetailUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.MainHost>기관명 주최</S.MainHost>
        <S.HeaderTitle>행사명 행사명 행사명</S.HeaderTitle>
        <S.LineDiv />
        <S.HeaderCalendar>2022.07.01 - 2022.07.29</S.HeaderCalendar>
        <S.IconWrapper>
          <Tooltip placement="topRight" title={`행사 찜하기`}>
            <S.PickIcon />
          </Tooltip>
          <Tooltip placement="topRight" title={`링크 복사하기`}>
            <CopyToClipboard text={props.currentUrl}>
              <S.LincIcon />
            </CopyToClipboard>
          </Tooltip>
        </S.IconWrapper>
        <S.LineDiv />
        <S.NavWrapper ref={props.navRef}>
          <S.NavWrapper>
            <S.NavMenu>이벤트타입 요약</S.NavMenu>
            <S.NavMenu>상세 설명</S.NavMenu>
            <S.NavMenu>행사 위치</S.NavMenu>
          </S.NavWrapper>
        </S.NavWrapper>
        <S.MainTitle>이벤트타입 요약</S.MainTitle>
        <S.MainImg src="/배너이미지_행사1.png" />
        <S.MarkerWrapper>
          요약글 내용 요약글 내용 요약글 내용 요약글 내용 요약글 내용 요약글
          내용 요약글 내용 요약글 내용 요약글 내용 요약글 내용 요약글 내용
          요약글 내용 요약글 내용 요약글 내용 요약글 내용 요약글 내용 요약글
          내용 요약글 내용 요약글 내용 요약글 내용 요약글
        </S.MarkerWrapper>

        <S.LineDiv />

        <S.ContentsWrapper>
          <S.ContentsTitle id="contents">상세 설명</S.ContentsTitle>
          <S.ContentImg src="/배너이미지_행사1.png" />
          <S.ContetsText>
            상세 설명이 들어갈 곳 입니다.상세 설명이 들어갈 곳 입니다.상세
            설명이 들어갈 곳 입니다.상세 설명이 들어갈 곳 입니다.상세 설명이
            들어갈 곳 입니다.상세 설명이 들어갈 곳 입니다.상세 설명이 들어갈 곳
            입니다.상세 설명이 들어갈 곳 입니다.
          </S.ContetsText>
        </S.ContentsWrapper>

        <S.LineDiv />
        <S.MapWrapper>
          <S.MapTitle id="maptitle">행사 위치</S.MapTitle>
        </S.MapWrapper>
        <KakakomapPage />

        <S.LineDiv />
        <S.Footer>
          <S.BtnRouter>관련 사이트 보러가기</S.BtnRouter>
          <S.BtnRouterList onClick={props.onClickMoveToList}>
            목록으로
          </S.BtnRouterList>
          <S.BtnRouter>같이 갈 동행 구하기</S.BtnRouter>
        </S.Footer>
      </S.Wrapper>
    </>
  );
}
