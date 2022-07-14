import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const OutWrapper = styled.div`
  width: 100%;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Wrapper = styled(Slider)`
  width: 100%;
  /* margin: 0px 30px; */
  border: 20px;
  height: 250px;
`;

const InfoImg = styled.img`
  width: 100%;
  height: 300px;
  /* height: 200px; */
  /* border: 20px; */
`;

export default function InfoSection() {
  const settings = {
    infinite: false,
    speed: 100,
    slidesToShow: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
  };

  return (
    <OutWrapper>
      <Title>
        <h3> </h3>
      </Title>
      <Wrapper>
        <InfoImg src="/info/info1.png" />
        <InfoImg src="/info/info2.png" />
      </Wrapper>
    </OutWrapper>
  );
}
