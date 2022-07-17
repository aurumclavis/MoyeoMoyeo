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
const ImageWrapper = styled.div`
  width: 40%;
  /* height: 350px; */
  /* background-color: gray; */
  border: 1px solid black;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;
const EventImg = styled.img`
  width: 100%;
  height: 100%;
`;
const EventWrapper = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  @media ${breakPoints.mobile} {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-right: 2px;
  }
`;
const SliderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const MySlider = styled(Slider)`
  width: 100%;
  display: flex;
  @media ${breakPoints.mobile} {
    width: 100%;
    margin-top: 0px;
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

const EventsSlickList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: 0.2s;
  margin-right: 5px;
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

const EventSection = (props) => {
  const animatedItem = {
    0: useScrollFadeIn("down", 1),
    1: useScrollFadeIn("down", 1),
    2: useScrollFadeIn("down", 1),
    3: useScrollFadeIn("down", 1),
    4: useScrollFadeIn("down", 1),
    5: useScrollFadeIn("down", 1),
  };
  const settings = {
    infinite: true,
    vertical: false,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    dots: true,
    responsive: [
      // 반응형
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
    ],
  };

  return (
    <OutWrapper>
      <TitleWrapper>
        <TitleIcon src="/icon/simbollogo.png" />
        <Title> 행사찾기</Title>
      </TitleWrapper>
      <TitleRightWrapper>
        <div>취향저격 탕! 나만의 행사들을 골라봐요!</div>
        <MoreBox>
          <More onClick={props.onClickMoveToPage("/events")}>더보기</More>
          <ArrowIcon src="/icon/arrow_right.png" />
        </MoreBox>
      </TitleRightWrapper>
      <Wrapper>
        <ImageWrapper>
          {/* <EventImg src="/main/eventImage.png" /> */}
        </ImageWrapper>
        <EventWrapper>
          {new Array(3).fill(1).map((el: any, index: number) => (
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
      <SliderWrapper>
        <MySlider {...settings}>
          {new Array(10).fill(1).map((el: any, index: number) => (
            <div key={index}>
              <EventsSlickList key={index}>
                <EventsImages src="/eventmap.png" />
                <InnderWrapper>
                  <EventsName>뮤지컬 아이다</EventsName>
                  <EventsPlaces>블루스퀘어 신한카드홀</EventsPlaces>
                  <EventsDate>2022.07.05~07.05</EventsDate>
                </InnderWrapper>
              </EventsSlickList>
            </div>
          ))}
        </MySlider>
      </SliderWrapper>
    </OutWrapper>
  );
};
export default EventSection;
