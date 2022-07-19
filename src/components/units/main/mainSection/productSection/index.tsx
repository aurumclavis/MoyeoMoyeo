import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import useScrollFadeIn from "../../../../commons/hooks/useScrollFadeIn";
import { breakPoints } from "../../../../../commons/styles/media";
import { gql, useQuery } from "@apollo/client";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";

export const FETCH_PRODUCTS = gql`
  query fetchProducts {
    fetchProducts {
      id
      name
      price
    }
  }
`;

const OutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  @media ${breakPoints.mobile} {
    margin: 4rem 0rem 0rem 0rem;
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
  margin-bottom: 30px;
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
const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  @media ${breakPoints.mobile} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
const ProductList = styled.div`
  /* width: 240px;
  height: 300px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakPoints.mobile} {
    /* width: 30%;
    flex-wrap: wrap;
    height: 200px; */
  }
`;
const ProductImages = styled.img`
  width: 100%;
  /* height: 240px; */
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
  const { data } = useQuery(FETCH_PRODUCTS);
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <OutWrapper>
      <TitleWrapper>
        <TitleIcon src="/icon/simbollogo.png" />
        <Title> 굿즈찾기 </Title>
      </TitleWrapper>
      <TitleRightWrapper>
        <div>내 마음에 쏙!드는 행사들을 골라봐요!</div>
        <MoreBox>
          <More onClick={props.onClickMoveToPage("/products")}>더보기</More>
          <ArrowIcon src="/icon/arrow_right.png" />
        </MoreBox>
      </TitleRightWrapper>

      <InnerWrapper>
        {data.fetchProducts.map((el: any, index: number) => (
          <ProductList
            key={el.id}
            {...animatedItem[index]}
            onClick={onClickMoveToPage(`products/${el.id}`)}
          >
            <ProductImages src="/example2.png" />
            <ProductName>{el.name}</ProductName>
            <ProductPrice>{el.price.toLocaleString()}</ProductPrice>
          </ProductList>
        ))}
      </InnerWrapper>
    </OutWrapper>
  );
};

export default ProductSection;
