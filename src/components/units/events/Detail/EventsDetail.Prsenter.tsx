import * as S from "./EventsDetail.Styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import KakakomapPage from "./kakaomap/kakaomap.Container";
import BackTopAnt from "../../../commons/backTop";

export default function EventsDetailUI(props: any) {
  return (
    <>
      <S.Wrapper>
        <S.MainHost>기관명 주최</S.MainHost>
        <S.HeaderTitle>행사명 행사명 행사명</S.HeaderTitle>
        <S.HeaderCalendar>2022.07.01 - 2022.07.29</S.HeaderCalendar>
        <S.CountWrapper>
          <S.CountIcon />
          조회수
        </S.CountWrapper>
        <S.LineDiv />
        <S.NavWrapper ref={props.navRef}>
          <S.NavMenuWrapper>
            <S.NavMenu
              isActive={props.activedTab === "marker"}
              onClick={props.onClickMarker}
              id="marker"
            >
              요약
            </S.NavMenu>{" "}
            <S.NavMenu
              isActive={props.activedTab === "maps"}
              onClick={props.onClickMaps}
              id="maps"
            >
              지도
            </S.NavMenu>
            <S.NavMenu
              isActive={props.activedTab === "contents"}
              onClick={props.onClickContents}
              id="contents"
            >
              상세설명
            </S.NavMenu>
          </S.NavMenuWrapper>

          <S.IconWrapper>
            <S.PickWraepper>
              <S.IconTitle>행사 찜하기</S.IconTitle>
              <S.PickIcon />
            </S.PickWraepper>
            <CopyToClipboard text={props.currentUrl}>
              <S.Linkraepper onClick={props.onClickLink}>
                <S.IconTitle>링크 복사</S.IconTitle>
                <S.LincIcon />
              </S.Linkraepper>
            </CopyToClipboard>
          </S.IconWrapper>
        </S.NavWrapper>
        <S.MainTitle ref={props.markerRef}>이벤트 요약</S.MainTitle>
        <S.MainImg src="/배너이미지_행사1.png" />
        <S.ContetsText>
          상세 설명이 들어갈 곳 입니다.상세 설명이 들어갈 곳 입니다.상세 설명이
          들어갈 곳 입니다.상세 설명이 들어갈 곳 입니다.상세 설명이 들어갈 곳
          입니다.상세 설명이 들어갈 곳 입니다.상세 설명이 들어갈 곳 입니다.상세
          설명이 들어갈 곳 입니다.
        </S.ContetsText>{" "}
        <S.LineDiv />
        <S.MapWrapper ref={props.mapsRef}>
          <S.MapTitle>행사 위치</S.MapTitle>
          <KakakomapPage />
          <S.ContetsText>
            이벤트 주소 이벤트 주소 이벤트 주소 이벤트 주소 이벤트 주소 이벤트
            주소 이벤트 주소 이벤트 주소 이벤트 주소 이벤트 주소{" "}
          </S.ContetsText>
        </S.MapWrapper>
        <S.LineDiv />
        <S.ContentsWrapper ref={props.contentsRef}>
          <S.ContentsTitle>상세 설명</S.ContentsTitle>
          <S.ContentImg src="/배너이미지_행사1.png" />
          <S.ContentImg src="/배너이미지_행사1.png" />
          <S.ContentImg src="/배너이미지_행사1.png" />
        </S.ContentsWrapper>
        <S.LineDiv />
        <S.Footer>
          <S.BtnRouter>관련 사이트 보러가기</S.BtnRouter>
          <S.BtnRouterList onClick={props.onClickMoveToPage("/events")}>
            목록으로
          </S.BtnRouterList>
          <S.BtnRouter onClick={props.onClickMoveToBoardNew}>
            같이 갈 동행 구하기
          </S.BtnRouter>
        </S.Footer>
        <BackTopAnt />
      </S.Wrapper>
    </>
  );
}
