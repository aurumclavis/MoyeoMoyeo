import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const OutWrapper = styled.div`
  width: 100%;
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
`;
const Title = styled.h1`
  margin: 0;
`;
const Wrapper = styled(Slider)`
  width: 100%;
  border: 20px;
  height: 250px;
`;

const InfoImg = styled.img`
  width: 100%;
  height: 230px;
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
