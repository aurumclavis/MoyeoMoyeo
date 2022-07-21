import * as S from "./productSection.Styles";
import useScrollFadeIn from "../../../../commons/hooks/useScrollFadeIn";
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

const ProductSection = (props: any) => {
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
    <S.OutWrapper>
      <S.TitleWrapper>
        <S.TitleIcon src="/icon/simbollogo.png" />
        <S.Title> 굿즈찾기 </S.Title>
      </S.TitleWrapper>
      <S.TitleRightWrapper>
        <div>내 마음에 쏙!드는 행사들을 골라봐요!</div>
        <S.MoreBox>
          <S.More onClick={props.onClickMoveToPage("/products")}>더보기</S.More>
          <S.ArrowIcon src="/icon/arrow_right.png" />
        </S.MoreBox>
      </S.TitleRightWrapper>

      <S.InnerWrapper>
        {data?.fetchProducts
          .map((el: any, index: any) => (
            <S.ProductList
              {...animatedItem[index]}
              key={el.id}
              onClick={onClickMoveToPage(`products/${el.id}`)}
            >
              <S.ProductImages src="/example2.png" />
              <S.ProductName>{el.name}</S.ProductName>
              <S.ProductPrice>{el.price.toLocaleString()}</S.ProductPrice>
            </S.ProductList>
          ))
          .slice(0, 5)}
      </S.InnerWrapper>
    </S.OutWrapper>
  );
};

export default ProductSection;
