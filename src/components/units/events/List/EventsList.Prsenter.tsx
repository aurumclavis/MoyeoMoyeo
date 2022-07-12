import * as S from "./EventsList.Styles";
import OurEventList from "./EventsList/OurEventList.Container";
import FestivalList from "./festivalList/festivalList.Container";

export default function EventsListUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.FlexWrapper>
          <S.FestivalWrapper isActive={props.openEvents}>
            <S.Tab onClick={props.onClickEventTap} isActive={props.openEvents}>
              행사 일정
            </S.Tab>
            <FestivalList openEvents={props.openEvents} />
          </S.FestivalWrapper>
          <S.EventsWrapper isActive={props.ourEvents}>
            <S.Tab onClick={props.onClickEventTap} isActive={props.ourEvents}>
              추천 행사
            </S.Tab>
            <OurEventList ourEvents={props.ourEvents} />
          </S.EventsWrapper>
        </S.FlexWrapper>
      </S.Wrapper>
    </>
  );
}
