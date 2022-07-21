import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { breakPoints } from "../../../../../commons/styles/media";

export default function InfoSection() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    dots: true,
    arrows: false,
  };

  return (
    <OutWrapper>
      <TitleWrapper>
        <TitleIcon src="/icon/simbollogo.png" />
        <Title>공지사항</Title>
      </TitleWrapper>
      <Wrapper {...settings}>
        <InfoImg src="/info/info2.png" />
        <InfoImg src="/info/info1.png" />
      </Wrapper>
    </OutWrapper>
  );
}

const OutWrapper = styled.div`
  width: 100%;
  @media ${breakPoints.mobile} {
    margin: 2rem 0rem 3rem 0rem;
    padding: 0 1.125rem;
  }
`;
const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
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
const Wrapper = styled(Slider)`
  width: 100%;
  border: 20px;
  margin: 0;
  @media ${breakPoints.mobile} {
    height: 80%;
  }
`;

const InfoImg = styled.img`
  width: 100%;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 80%;
  }
`;
