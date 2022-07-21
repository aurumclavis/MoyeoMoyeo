import useScrollFadeIn from "../../../../commons/hooks/useScrollFadeIn";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import * as S from "./eventSection.Styles";

const EventSection = () => {
  const animatedItem = useScrollFadeIn();
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.OutWrapper>
      <S.TitleWrapper>
        <S.TitleIcon src="/icon/simbollogo.png" />
        <S.Title> 행사찾기</S.Title>
      </S.TitleWrapper>
      <S.TitleRightWrapper>
        <div>취향저격 탕! 나만의 행사들을 골라봐요!</div>
        <S.MoreBox>
          <S.More onClick={onClickMoveToPage("/events")}>더보기</S.More>
          <S.ArrowIcon src="/icon/arrow_right.png" />
        </S.MoreBox>
      </S.TitleRightWrapper>
      <S.Wrapper>
        <S.EventWrapper {...animatedItem}>
          {new Array(5).fill(1).map((el: any, index: number) => (
            <S.EventsList key={index}>
              <S.EventsImages src="/eventmap.png" />
              <S.InnderWrapper>
                <S.EventsName>뮤지컬 아이다</S.EventsName>
                <S.EventsPlaces>블루스퀘어 신한카드홀</S.EventsPlaces>
                <S.EventsDate>2022.07.05~07.05</S.EventsDate>
              </S.InnderWrapper>
            </S.EventsList>
          ))}
        </S.EventWrapper>
      </S.Wrapper>
    </S.OutWrapper>
  );
};
export default EventSection;
