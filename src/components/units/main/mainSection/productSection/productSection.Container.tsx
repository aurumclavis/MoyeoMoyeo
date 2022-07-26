import * as S from "./productSection.Styles";
import useScrollFadeIn from "../../../../commons/hooks/useScrollFadeIn";
import { gql, useQuery } from "@apollo/client";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { v4 } from "uuid";

export const FETCH_PRODUCTS = gql`
  query fetchProducts {
    fetchProducts {
      id
      name
      price
      viewCount
      images {
        id
        src
      }
      likedUsers {
        id
      }
    }
  }
`;

const ProductSection = (props: any) => {
  const animatedItem = useScrollFadeIn();

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
          <S.More onClick={onClickMoveToPage("/products")}>더보기</S.More>
          <S.ArrowIcon src="/icon/arrow_right.png" />
        </S.MoreBox>
      </S.TitleRightWrapper>

      <S.InnerWrapper {...animatedItem}>
        {data?.fetchProducts
          .map((el: any) => (
            <S.ProductList
              key={v4(el.id)}
              onClick={onClickMoveToPage(`products/${el.id}`)}
            >
              <S.ProductImages
                onError={(event) => {
                  if (event.target instanceof HTMLImageElement)
                    event.target.src = "../../error-image.png";
                }}
                src={`https://storage.googleapis.com/${el.images[0]?.src}`}
              />
              <S.ProductName>{el.name}</S.ProductName>
              <S.ProductUnderWapper>
                <S.ProductPrice>{`${el.price.toLocaleString()}원`}</S.ProductPrice>
                <S.IconWrapper>
                  <S.ViewIcon />
                  <S.Text>{el.viewCount || "0"}</S.Text>
                  <S.PickIcon />
                  <S.Text>{el.likedUsers?.length || "0"}</S.Text>
                </S.IconWrapper>
              </S.ProductUnderWapper>
            </S.ProductList>
          ))
          .slice(0, 6)}
      </S.InnerWrapper>
    </S.OutWrapper>
  );
};

export default ProductSection;
