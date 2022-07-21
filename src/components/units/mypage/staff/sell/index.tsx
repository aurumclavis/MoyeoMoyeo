import { gql, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../../commons/store";
import { getDate } from "../../../../commons/getDate";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import * as S from "../../listItem/MyPageListItem.Styles";
const FETCH_PRODUCTS = gql`
  query {
    fetchProducts {
      id
      name
      price
      createdAt
      description
      images {
        src
      }
      isSoldout
      seller {
        email
        manager
      }
    }
  }
`;

export default function MyPageStaffSell() {
  const { data } = useQuery(FETCH_PRODUCTS);
  const [userInfo] = useRecoilState(userInfoState);
  const SELLER_ARR = data?.fetchProducts.filter(
    (el: any) => el.seller.email === userInfo.email
  );

  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      {SELLER_ARR?.map((el: any) => (
        <S.ItemWrapper key={el.id}>
          <S.ItemImageWrapper>
            <S.ItemImage
              onError={(event) => {
                if (event.target instanceof HTMLImageElement)
                  event.target.src = "../../error-image.png";
              }}
              src={`https://storage.googleapis.com/${el.images[0]?.src}`}
            />
          </S.ItemImageWrapper>
          <S.ItemContentsWrapper>
            <S.ItemTitle>
              <S.ItemFinished isFinished={el.isSoldout}>
                {el.isSoldout ? "[판매완료]" : "[판매중]"}
              </S.ItemFinished>{" "}
              {el.name}
            </S.ItemTitle>
            <S.ItemRowWrapper>
              <S.ItemText>{el.price}원</S.ItemText>
              <S.ItemText>{getDate(el.createdAt)}</S.ItemText>
            </S.ItemRowWrapper>
            <S.ItemText>{el.description}</S.ItemText>
            <S.MoreText
              onClick={onClickMoveToPage(`/products/${el.id}`)}
              type="staff"
            >
              상품 정보 더 보기
            </S.MoreText>
          </S.ItemContentsWrapper>
        </S.ItemWrapper>
      ))}
    </S.Wrapper>
  );
}
