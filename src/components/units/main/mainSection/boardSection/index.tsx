import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import useScrollClipPath from "../../../../commons/hooks/useScrollClipPath";
import { breakPoints } from "../../../../../commons/styles/media";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";

const OutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${breakPoints.mobile} {
    margin: 2rem 0rem 2rem 0rem;
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
  margin-bottom: 10px;
  gap: 5px;
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
  display: flex;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;
const BoardsImage = styled.img`
  width: 60%;
  height: 100%;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
const CarouselWrapper = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

const MySlider = styled(Slider)`
  width: 100%;
  display: flex;
  margin-top: 40px;
  @media ${breakPoints.mobile} {
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

const BoardSection = (props: any) => {
  const animatedItem = useScrollClipPath();
  const { onClickMoveToPage } = useMoveToPage();
  const settings = {
    infinite: true,
    vertical: true,
    slidesToShow: 2,
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
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <OutWrapper>
      <TitleWrapper>
        <TitleIcon src="/icon/simbollogo.png" />
        <Title>동행구하기 </Title>
      </TitleWrapper>
      <TitleRightWrapper>
        <div>이제 혼자가 아닌 우리 같이 가요!</div>
        <MoreBox>
          <More onClick={onClickMoveToPage("/boards")}>더보기</More>
          <ArrowIcon src="/icon/arrow_right.png" />
        </MoreBox>
      </TitleRightWrapper>
      <Wrapper>
        <BoardsImage src="/main/boards.png" {...animatedItem} />
        <CarouselWrapper>
          <MySlider {...settings}>
            {new Array(6).fill(1).map((el: any, index: number) => (
              <BoardList key={index}>
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
