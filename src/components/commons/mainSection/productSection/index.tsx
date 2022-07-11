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
const ProductList = styled.div`
  width: 240px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #bdbdbd;
  margin-right: 10px;
`;
const ProductImages = styled.img`
  width: 100%;
  height: 240px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;
const ProductName = styled.div`
  width: 100%;
  font-size: 0.875rem;
  text-align: left;
`;

const ProductPrice = styled.div`
  width: 100%;
  font-size: 0.875rem;
  text-align: left;
  margin-bottom: 30px;
`;
export default function ProductSection() {
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
        <h3> 취향저격 나만의 행사굿즈찾기 </h3>
        <More>더보기</More>
      </Title>

      <Wrapper>
        {/* <Slider {...settings}> */}
        {new Array(5).fill(1).map((el: any, index: number) => (
          <ProductList key={el}>
            <ProductImages src="/example2.png" />
            <ProductName>행사굿즈 노트세트</ProductName>
            <ProductPrice>2022.07.05~2022.07.05</ProductPrice>
          </ProductList>
        ))}
        {/* </Slider> */}
      </Wrapper>
    </OutWrapper>
  );
}
