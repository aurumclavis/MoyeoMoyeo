import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import useScrollFadeIn from "../../../../commons/hooks/useScrollFadeIn";
import { breakPoints } from "../../../../../commons/styles/media";

const OutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
  width: 34px;
  height: 30px;
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
  margin-bottom: 10px;
  gap: 5px;
`;
const More = styled.span`
  width: 45px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    color: #42c2ff;
  }
  margin-right: 5px;
`;
const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;
const ImageWrapper = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
const EventImg = styled.img`
  width: 100%;
`;
const EventWrapper = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  @media ${breakPoints.mobile} {
    width: 100%;
    justify-content: center;
  }
`;
const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.2s;
  box-shadow: 1px 3px 1px 0px #00000033;
  :hover {
    box-shadow: 3px 5px 1px 0px #ffd24c;
    transform: translateY(-5px);
  }
`;
const EventsImages = styled.img`
  width: 100%;
  /* height: 250px; */
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

const EventSection = (props) => {
  const animatedItem = {
    0: useScrollFadeIn("left", 1),
    1: useScrollFadeIn("left", 1),
    2: useScrollFadeIn("left", 1),
    3: useScrollFadeIn("left", 1),
    4: useScrollFadeIn("left", 1),
    5: useScrollFadeIn("left", 1),
  };

  return (
    <OutWrapper>
      <TitleWrapper>
        <Title> # 행사찾기</Title>
        <TitleIcon src="/icon/simbollogo.png" />
      </TitleWrapper>
      <TitleRightWrapper>
        <div>취향저격 탕! 나만의 행사들을 골라봐요!</div>
        <div>
          <More onClick={props.onClickMoveToPage("/events")}>더보기</More>
          <img src="/icon/arrow_right.png" />
        </div>
      </TitleRightWrapper>
      <Wrapper>
        <ImageWrapper>
          <EventImg src="/main/eventImage.png" />
        </ImageWrapper>
        {/* <Slider {...settings}> */}
        <EventWrapper>
          {new Array(6).fill(1).map((el: any, index: number) => (
            <EventsList key={index} {...animatedItem[index]}>
              <EventsImages src="/example1.png" />
              <InnderWrapper>
                <EventsName>뮤지컬 아이다</EventsName>
                <EventsPlaces>블루스퀘어 신한카드홀</EventsPlaces>
                <EventsDate>2022.07.05~07.05</EventsDate>
              </InnderWrapper>
            </EventsList>
          ))}
          {/* </Slider> */}
        </EventWrapper>
      </Wrapper>
    </OutWrapper>
  );
};
export default EventSection;
