import * as S from "./EventsDetail.Styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import KakakomapPage from "./kakaomap/kakaomap.Container";
import BackTopAnt from "../../../commons/backTop";
import { getDate } from "../../../commons/getDate";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export default function EventsDetailUI(props: any) {
  return (
    <>
      <S.Wrapper>
        <S.MainHost>{props.data?.fetchPost?.writer} 주최</S.MainHost>
        <S.HeaderTitle>{props.data?.fetchPost?.title}</S.HeaderTitle>
        <S.HeaderCalendar>
          {getDate(props.data?.fetchPost?.dateStart)} -
          {getDate(props.data?.fetchPost?.dateEnd)}
        </S.HeaderCalendar>
        <S.CountWrapper>
          조회수 {props.data?.fetchPost?.viewCount}
          <S.CountIcon />
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
            <S.PickWraepper onClick={props.onClickDibs}>
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
        <S.MainTitle ref={props.markerRef}>
          {props.data?.fetchPost?.category} 요약
        </S.MainTitle>
        <S.MainImg src="/배너이미지_행사1.png" />
        <S.ContetsText>{props.data?.fetchPost?.description}</S.ContetsText>
        <S.LineDiv />
        <S.MapWrapper ref={props.mapsRef}>
          <S.MapTitle>행사 위치</S.MapTitle>
          <S.ContetsText>{props.data?.fetchPost?.address}</S.ContetsText>
          <KakakomapPage address={props.data?.fetchPost?.address} />
        </S.MapWrapper>
        <S.LineDiv />
        <S.ContentsWrapper ref={props.contentsRef}>
          <S.ContentsTitle>상세 이미지</S.ContentsTitle>
          <S.ContentImg src="/배너이미지_행사1.png" />
          <S.ContentImg src="/배너이미지_행사1.png" />
          <S.ContentImg src="/배너이미지_행사1.png" />
        </S.ContentsWrapper>

        <S.EditWrapper>
          <S.EditBtn onClick={props.onClickEdit}>
            <EditOutlined />
            수정
          </S.EditBtn>
          <S.EditBtn onClick={props.onClickEdit}>
            <DeleteOutlined />
            삭제
          </S.EditBtn>
        </S.EditWrapper>
        <S.LineDiv />

        <S.Footer>
          {/* <S.BtnRouter>관련 사이트 보러가기</S.BtnRouter> */}
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
