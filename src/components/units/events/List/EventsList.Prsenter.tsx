import CalenderPage from "./calender/Calender";
import * as S from "./EventsList.Styles";
import OurEventList from "./EventsList/OurEventList.Container";
import FestivalList from "./festivalList/festivalList.Container";

export default function EventsListUI(props) {
  return (
    <>
      <S.Wrapper>
        여기에 헤더를 둬서 버튼과 날짜 표시 버튼 그리고 전체보기??
        <S.TabWrapper>
          <S.Tab onClick={props.onClickDate} isActive={props.datePick}>
            날짜별 행사
          </S.Tab>
          <S.Tab
            onClick={props.onClickOpenEventTap}
            isActive={props.openEvents}
          >
            공공 행사
          </S.Tab>
          <S.Tab onClick={props.onClickOurEventTap} isActive={props.ourEvents}>
            추천 행사
          </S.Tab>
          <S.EventWriteBtn onClick={props.onClickMoveToPage("/events/new")}>
            행사 등록
          </S.EventWriteBtn>
        </S.TabWrapper>
        <S.FlexWrapper>
          <S.DateWrapper isActive={props.datePick}>
            <CalenderPage isActive={props.datePick} />
          </S.DateWrapper>
          <S.FestivalWrapper isActive={props.openEvents}>
            <FestivalList openEvents={props.openEvents} />
          </S.FestivalWrapper>
          <S.EventsWrapper isActive={props.ourEvents}>
            <OurEventList ourEvents={props.ourEvents} />
          </S.EventsWrapper>
        </S.FlexWrapper>
      </S.Wrapper>
    </>
  );
}
