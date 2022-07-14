import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import useScrollFadeIn from "../../../../commons/hooks/useScrollFadeIn";

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
  justify-content: space-between;
  /* background-color: gray; */
`;

// const MySlider = styled(Slider)`
//   width: 100%;
//   /* display: flex;
//   flex-direction: column; */
//   margin-right: 30px;
// `;
const BoardList = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 15px solid #ffe69a;
  border-radius: 5px;
  margin-right: 10px;
  /* padding: 10px 10px; */
`;
const BoardTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const BoardCategory = styled.div`
  text-align: center;
  color: green;
  /* font-size: 0.825rem; */
`;
const BoardTitle = styled.div`
  text-align: center;
  /* font-size: 0.825rem; */
`;
const BoardContents = styled.div`
  width: 100%;
  height: 70px;
  text-align: left;
  font-size: 0.825rem;
`;
const BoardInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
const BoardEvents = styled.div`
  text-align: center;
  font-size: 0.825rem;
  margin-right: 10px;
`;
const BoardPeople = styled.div`
  text-align: center;
  font-size: 0.825rem;
  margin-right: 10px;
`;
const BoardDate = styled.div`
  text-align: center;
  font-size: 0.825rem;
  margin-right: 10px;
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
`;

const BoardSection = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1),
    1: useScrollFadeIn("up", 1, 0.2),
    2: useScrollFadeIn("up", 1, 0.4),
  };
  // const settings = {
  //   slide: "div",
  //   infinite: false,
  //   speed: 100,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //   initialSlide: 1,
  //   autoplay: true,
  //   autoplaySpeed: 1000,
  //   pauseOnHover: true,
  //   vertical: false,
  // responsive: [
  //   // 반응형
  //   {
  //     breakpoint: 767,
  //     settings: {
  //       slidesToShow: 1,
  //     },
  //   },
  // ],
  // };

  return (
    <OutWrapper>
      <Title>
        <h3> 같이 즐길 동행구하기 </h3>
        <More>더보기</More>
      </Title>
      <Wrapper>
        {/* <MySlider {...settings}> */}
        {new Array(2).fill(1).map((el: any, index: number) => (
          <BoardList key={index} {...animatedItem[index]}>
            <BoardTitleWrapper>
              <BoardCategory>[모집중]</BoardCategory>
              <BoardTitle>
                이번 주 금요일에 하는 지브리전시회 동행구해요~~!!
              </BoardTitle>
            </BoardTitleWrapper>
            <BoardContents>
              20대 대학생이구요. 총 2~3명이 좋아요 전시회 보고 같이 밥도 드실분
              연락주세요! 남녀 상관 없습니다.{" "}
            </BoardContents>
            <BoardInfo>
              <Icon src="/example3.png" />
              <BoardEvents>지브리전시회</BoardEvents>
              <Icon src="/example4.png" />
              <BoardPeople>2~3명</BoardPeople>
              <Icon src="/example5.png" />
              <BoardDate>2022.07.06~2022.07.06</BoardDate>
            </BoardInfo>
          </BoardList>
        ))}
        {/* </MySlider> */}
      </Wrapper>
    </OutWrapper>
  );
};
export default BoardSection;
