import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { breakPoints } from "../../../../../commons/styles/media";
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
const Wrapper = styled(Slider)`
  width: 100%;
  border: 20px;
  height: 200px;
  margin: 0;
  @media ${breakPoints.mobile} {
    height: 80px;
  }
`;

const InfoImg = styled.img`
  width: 100%;
  height: 200px;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 80px;
    flex-wrap: wrap;
  }
`;

export default function InfoSection() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    dots: true,
  };

  return (
    <OutWrapper>
      <TitleWrapper>
        <Title># 공지사항</Title>
        <TitleIcon src="/icon/simbollogo.png" />
      </TitleWrapper>
      <Wrapper {...settings}>
        <InfoImg src="/info/info2.png" />
        <InfoImg src="/info/info1.png" />
      </Wrapper>
    </OutWrapper>
  );
}
