import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const OutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
  padding-right: 30px;
`;
const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-evenly;
`;
const EventsList = styled.div`
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  margin-right: 10px; ;
`;
const EventsImages = styled.img`
  width: 100%;
  height: 250px;
  /* margin-bottom: 10px; */
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

export default function EventSection() {
  // const settings = {
  //   slide: "div",
  //   infinite: false,
  //   speed: 100,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   initialSlide: 1,
  //   autoplay: true,
  //   autoplaySpeed: 10000,
  //   pauseOnHover: true,
  //   vertical: false,

  //   responsive: [
  //     // 반응형
  //     {
  //       breakpoint: 960,
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //   ],
  // };

  return (
    <OutWrapper>
      <Title>
        <h3> 취향저격 행사찾기 </h3>
        <More>더보기</More>
      </Title>
      <Wrapper>
        {/* <Slider {...settings}> */}
        {new Array(5).fill(1).map((el: any, index: number) => (
          <EventsList key={el}>
            <EventsImages src="/example1.png" />
            <InnderWrapper>
              <EventsName>뮤지컬 아이다</EventsName>
              <EventsPlaces>블루스퀘어 신한카드홀</EventsPlaces>
              <EventsDate>2022.07.05~2022.07.05</EventsDate>
            </InnderWrapper>
          </EventsList>
        ))}
        {/* </Slider> */}
      </Wrapper>
    </OutWrapper>
  );
}
