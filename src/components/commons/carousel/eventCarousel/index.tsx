import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1000px;
  margin-bottom: 30px;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const More = styled.div`
  :hover {
    text-decoration: underline;
  }
`;
const EventsList = styled.div`
  width: 240px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  margin-right: 30px; ;
`;
const EventsImages = styled.img`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px; ;
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
export default function EventCarousel() {
  const settings = {
    slide: "div",
    infinite: false,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    vertical: false,

    responsive: [
      // 반응형
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <Title>
        <h3> 취향저격 행사찾기 </h3>
        <More>더보기</More>
      </Title>

      <Slider {...settings}>
        <EventsList>
          <EventsImages src="/example1.png" />
          <EventsName>뮤지컬 아이다</EventsName>
          <EventsPlaces>블루스퀘어 신한카드홀</EventsPlaces>
          <EventsDate>2022.07.05~2022.07.05</EventsDate>
        </EventsList>
        <EventsList>
          <EventsImages src="/example1.png" />
          <EventsName>뮤지컬 아이다</EventsName>
          <EventsPlaces>블루스퀘어 신한카드홀</EventsPlaces>
          <EventsDate>2022.07.05~2022.07.05</EventsDate>
        </EventsList>
        <EventsList>
          <EventsImages src="/example1.png" />
          <EventsName>뮤지컬 아이다</EventsName>
          <EventsPlaces>블루스퀘어 신한카드홀</EventsPlaces>
          <EventsDate>2022.07.05~2022.07.05</EventsDate>
        </EventsList>
        <EventsList>
          <EventsImages src="/example1.png" />
          <EventsName>뮤지컬 아이다</EventsName>
          <EventsPlaces>블루스퀘어 신한카드홀</EventsPlaces>
          <EventsDate>2022.07.05~2022.07.05</EventsDate>
        </EventsList>
        <EventsList>
          <EventsImages src="/example1.png" />
          <EventsName>뮤지컬 아이다</EventsName>
          <EventsPlaces>블루스퀘어 신한카드홀</EventsPlaces>
          <EventsDate>2022.07.05~2022.07.05</EventsDate>
        </EventsList>
        <EventsList>
          <EventsImages src="/example1.png" />
          <EventsName>뮤지컬 아이다</EventsName>
          <EventsPlaces>블루스퀘어 신한카드홀</EventsPlaces>
          <EventsDate>2022.07.05~2022.07.05</EventsDate>
        </EventsList>
        <EventsList>
          <EventsImages src="/example1.png" />
          <EventsName>뮤지컬 아이다</EventsName>
          <EventsPlaces>블루스퀘어 신한카드홀</EventsPlaces>
          <EventsDate>2022.07.05~2022.07.05</EventsDate>
        </EventsList>
        <EventsList>
          <EventsImages src="/example1.png" />
          <EventsName>뮤지컬 아이다</EventsName>
          <EventsPlaces>블루스퀘어 신한카드홀</EventsPlaces>
          <EventsDate>2022.07.05~2022.07.05</EventsDate>
        </EventsList>
      </Slider>
    </Wrapper>
  );
}
