import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import useScrollClipPath from "../../../../commons/hooks/useScrollClipPath";

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
const TitleRightWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    color: #42c2ff;
  }
  gap: 5px;
`;
const More = styled.span``;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
const BoardsImage = styled.img`
  width: 60%;
  height: 100%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
const CarouselWrapper = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;

  /* .slick-next:before {
    opacity: 0.2;
    color: #15133c;
  }
  .slick-prev:before {
    opacity: 0.2;
    color: #15133c;
  } */
  /* .slick-dots {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 15px;
    padding: 20px 0;
    list-style-type: none;
  } */
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const MySlider = styled(Slider)`
  width: 100%;
  display: flex;
  margin-top: 40px;
  @media (max-width: 767px) {
    width: 100%;
    margin-top: 0px;
  }
`;
const BoardList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 15px 0px;
  transition: 0.2s;
  box-shadow: 0px 3px 1px 0px #00000033;
  :hover {
    box-shadow: 0px 5px 1px 0px #ffd24c;
    transform: translateY(-5px);
  }
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
`;
const BoardTitle = styled.div`
  text-align: center;
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
  const animatedItem = useScrollClipPath();

  const settings = {
    infinite: true,
    vertical: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    // arrows: true,
    dots: true,
    responsive: [
      // 반응형
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <OutWrapper>
      <Title>
        <div>
          <h1> # 동행구하기 </h1>
          <div>이제 혼자가 아닌 우리 같이 가요!</div>
        </div>
        <TitleRightWrapper>
          <More>더보기</More>
          <img src="/icon/arrow_right.png" />
        </TitleRightWrapper>
      </Title>
      <Wrapper>
        <BoardsImage src="/main/boards.png" {...animatedItem} />
        <CarouselWrapper>
          <MySlider {...settings}>
            {new Array(6).fill(1).map((el: any, index: number) => (
              <BoardList key={index} {...animatedItem[index]}>
                <BoardTitleWrapper>
                  <BoardCategory>[모집중]</BoardCategory>
                  <BoardTitle>
                    이번 주 금요일에 하는 지브리전시회 동행구해요~~!!
                  </BoardTitle>
                </BoardTitleWrapper>
                <BoardContents>
                  20대 대학생이구요. 총 2~3명이 좋아요 전시회 보고 같이 밥도
                  드실분 연락주세요! 남녀 상관 없습니다.{" "}
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
          </MySlider>
        </CarouselWrapper>
      </Wrapper>
    </OutWrapper>
  );
};
export default BoardSection;
