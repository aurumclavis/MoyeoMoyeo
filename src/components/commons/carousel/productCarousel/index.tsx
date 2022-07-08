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
const ProductList = styled.div`
  width: 240px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #bdbdbd;
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
export default function ProductCarousel() {
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
        <h3> 취향저격 나만의 행사굿즈찾기 </h3>
        <More>더보기</More>
      </Title>

      <Slider {...settings}>
        <ProductList>
          <ProductImages src="/example2.png" />
          <ProductName>행사굿즈 노트세트</ProductName>
          <ProductPrice>2022.07.05~2022.07.05</ProductPrice>
        </ProductList>
        <ProductList>
          <ProductImages src="/example2.png" />
          <ProductName>행사굿즈 노트세트</ProductName>
          <ProductPrice>2022.07.05~2022.07.05</ProductPrice>
        </ProductList>
        <ProductList>
          <ProductImages src="/example2.png" />
          <ProductName>행사굿즈 노트세트</ProductName>
          <ProductPrice>2022.07.05~2022.07.05</ProductPrice>
        </ProductList>
        <ProductList>
          <ProductImages src="/example2.png" />
          <ProductName>행사굿즈 노트세트</ProductName>
          <ProductPrice>2022.07.05~2022.07.05</ProductPrice>
        </ProductList>
        <ProductList>
          <ProductImages src="/example2.png" />
          <ProductName>행사굿즈 노트세트</ProductName>
          <ProductPrice>2022.07.05~2022.07.05</ProductPrice>
        </ProductList>
        <ProductList>
          <ProductImages src="/example2.png" />
          <ProductName>행사굿즈 노트세트</ProductName>
          <ProductPrice>2022.07.05~2022.07.05</ProductPrice>
        </ProductList>
        <ProductList>
          <ProductImages src="/example2.png" />
          <ProductName>행사굿즈 노트세트</ProductName>
          <ProductPrice>2022.07.05~2022.07.05</ProductPrice>
        </ProductList>
        <ProductList>
          <ProductImages src="/example2.png" />
          <ProductName>행사굿즈 노트세트</ProductName>
          <ProductPrice>2022.07.05~2022.07.05</ProductPrice>
        </ProductList>
        <ProductList>
          <ProductImages src="/example2.png" />
          <ProductName>행사굿즈 노트세트</ProductName>
          <ProductPrice>2022.07.05~2022.07.05</ProductPrice>
        </ProductList>
      </Slider>
    </Wrapper>
  );
}
