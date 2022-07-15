import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import useScrollFadeIn from "../../../../commons/hooks/useScrollFadeIn";

const OutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const TitleIcon = styled.img`
  width: 34px;
  height: 30px;
`;
const Title = styled.h1`
  margin: 0;
`;
const TitleRightWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  gap: 5px;
`;
const More = styled.span`
  width: 45px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    color: #42c2ff;
  }
  margin-right: 5px;
`;

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
const ProductSection = (props) => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1),
    1: useScrollFadeIn("up", 1),
    2: useScrollFadeIn("up", 1),
    3: useScrollFadeIn("up", 1),
    4: useScrollFadeIn("up", 1),
  };

  return (
    <OutWrapper>
      <TitleWrapper>
        <Title># 굿즈찾기 </Title>
        <TitleIcon src="/icon/simbollogo.png" />
      </TitleWrapper>
      <TitleRightWrapper>
        <div>내 마음에 쏙!드는 행사들을 골라봐요!</div>
        <div>
          <More onClick={props.onClickMoveToPage("/products")}>더보기</More>
          <img src="/icon/arrow_right.png" />
        </div>
      </TitleRightWrapper>

      <InnerWrapper>
        {new Array(5).fill(1).map((el: any, index: number) => (
          <ProductList key={index} {...animatedItem[index]}>
            <ProductImages src="/example2.png" />
            <ProductName>행사굿즈 노트세트</ProductName>
            <ProductPrice>10000원</ProductPrice>
          </ProductList>
        ))}
      </InnerWrapper>
    </OutWrapper>
  );
};

export default ProductSection;
