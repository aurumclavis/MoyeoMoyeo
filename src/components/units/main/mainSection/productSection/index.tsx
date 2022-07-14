import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import useScrollFadeIn from "../../../../commons/hooks/useScrollFadeIn";

const OutWrapper = styled.section`
  /* width: 100vw; */
  display: flex;
  flex-direction: column;
  position: relative;
  /* width: calc(100vw - (100vw * 1.01 / 100));
  z-index: 30; */
  /* padding: 50px 20px; */
`;

// const Back = styled.div`
//   position: absolute;
//   width: 100vw;
//   height: 100%;
//   left: calc((100vw - 100%) / 2);
//   /* background-color: #f7e7e7; */
//   z-index: 10;
// `;
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
const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
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
const ProductList = styled.div`
  width: 240px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
const ProductSection = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1),
    1: useScrollFadeIn("up", 1),
    2: useScrollFadeIn("up", 1),
    3: useScrollFadeIn("up", 1),
    4: useScrollFadeIn("up", 1),
  };

  return (
    <OutWrapper>
      <Title>
        <div>
          <h1> # 굿즈찾기</h1>
          <div>내 마음에 쏙!드는 행사들을 골라봐요!</div>
        </div>
      </Title>
      <TitleRightWrapper>
        <More>더보기</More>
        <img src="/icon/arrow_right.png" />
      </TitleRightWrapper>

      <InnerWrapper>
        {/* <MySlider {...settings}> */}
        {new Array(5).fill(1).map((el: any, index: number) => (
          <ProductList key={index} {...animatedItem[index]}>
            <ProductImages src="/example2.png" />
            <ProductName>행사굿즈 노트세트</ProductName>
            <ProductPrice>10000원</ProductPrice>
          </ProductList>
        ))}
        {/* </MySlider> */}
      </InnerWrapper>
    </OutWrapper>
  );
};

export default ProductSection;
