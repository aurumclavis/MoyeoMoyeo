import styled from "@emotion/styled";
import useScrollFadeIn from "../../../../commons/hooks/useScrollFadeIn";
import { breakPoints } from "../../../../../commons/styles/media";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";

const OutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  @media ${breakPoints.mobile} {
    margin: 1rem 0rem 0rem 0rem;
    padding: 0 1.125rem;
  }
`;
const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const TitleIcon = styled.img`
  width: 20px;
  height: 16px;
  margin-right: 5px;
  @media ${breakPoints.mobile} {
    width: 1.5rem; //24
    height: 1.25rem; //20
  }
`;
const Title = styled.h1`
  margin: 0;
  @media ${breakPoints.mobile} {
    font-size: 1.6rem;
  }
`;
const TitleRightWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin-bottom: 30px;
`;

const MoreBox = styled.div`
  width: 60px;
  display: flex;
  justify-content: flex-end;
`;
const More = styled.span`
  width: 45px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    color: #42c2ff;
  }
  margin-right: 2px;
  text-align: center;
`;

const ArrowIcon = styled.img`
  width: 10px;
  height: 11px;
  margin-top: 7px;
  @media ${breakPoints.mobile} {
    margin-top: 6px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

const EventWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  @media ${breakPoints.mobile} {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-right: 2px;
  }
`;

const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.2s;
  :hover {
    box-shadow: 3px 5px 1px 0px #ffd24c;
    transform: translateY(-5px);
    border-radius: 5px;
  }
`;

const EventsImages = styled.img`
  width: 100%;
`;
const InnderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const EventsName = styled.div`
  width: 100%;
  font-size: 0.875rem;
  text-align: center;
`;
const EventsPlaces = styled.div`
  width: 100%;
  font-size: 0.875rem;
  text-align: center;
`;
const EventsDate = styled.div`
  width: 100%;
  font-size: 0.875rem;
  text-align: center;
`;

const EventSection = (props: any) => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1),
    1: useScrollFadeIn("up", 1),
    2: useScrollFadeIn("up", 1),
    3: useScrollFadeIn("up", 1),
    4: useScrollFadeIn("up", 1),
    5: useScrollFadeIn("up", 1),
  };
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <OutWrapper>
      <TitleWrapper>
        <TitleIcon src="/icon/simbollogo.png" />
        <Title> 행사찾기</Title>
      </TitleWrapper>
      <TitleRightWrapper>
        <div>취향저격 탕! 나만의 행사들을 골라봐요!</div>
        <MoreBox>
          <More onClick={onClickMoveToPage("/events")}>더보기</More>
          <ArrowIcon src="/icon/arrow_right.png" />
        </MoreBox>
      </TitleRightWrapper>
      <Wrapper>
        <EventWrapper>
          {new Array(5).fill(1).map((el: any, index: number) => (
            <EventsList key={index} {...animatedItem[index]}>
              <EventsImages src="/eventmap.png" />
              <InnderWrapper>
                <EventsName>뮤지컬 아이다</EventsName>
                <EventsPlaces>블루스퀘어 신한카드홀</EventsPlaces>
                <EventsDate>2022.07.05~07.05</EventsDate>
              </InnderWrapper>
            </EventsList>
          ))}
        </EventWrapper>
      </Wrapper>
    </OutWrapper>
  );
};
export default EventSection;
