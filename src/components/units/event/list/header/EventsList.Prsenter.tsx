import CalenderPage from "../DateList/DateList.Container";
import * as S from "./EventsList.Styles";
import OurEventList from "../eventList/OurEventList.Container";
import FestivalList from "../festivalList/festivalList.Container";
import BackTopAnt from "../../../../commons/backTop";
import { IEventsListUIProps } from "./EventsList.type";

export default function EventsListUI(props: IEventsListUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.TabWrapper>
          <S.Tab onClick={props.onClickDate} isActive={props.datePick}>
            일자별 행사
          </S.Tab>
          <S.Tab
            onClick={props.onClickOpenEventTap}
            isActive={props.openEvents}
          >
            행사 정보
          </S.Tab>
          <S.Tab onClick={props.onClickOurEventTap} isActive={props.ourEvents}>
            추천 행사
          </S.Tab>
          {props.userInfo.manager && (
            <S.EventWriteBtn onClick={props.onClickNew}>
              행사 등록
            </S.EventWriteBtn>
          )}
        </S.TabWrapper>
        <S.FlexWrapper>
          <S.DateWrapper isActive={props.datePick}>
            <CalenderPage />
          </S.DateWrapper>
          <S.FestivalWrapper isActive={props.openEvents}>
            <FestivalList />
          </S.FestivalWrapper>
          <S.EventsWrapper isActive={props.ourEvents}>
            <OurEventList />
          </S.EventsWrapper>
        </S.FlexWrapper>
        <BackTopAnt />
      </S.Wrapper>
    </>
  );
}
