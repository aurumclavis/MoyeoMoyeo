import { gql, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../../commons/store";
import { getDate } from "../../../../commons/getDate";
import * as S from "../../listItem/MyPageListItem.Styles";
import NoDataFound from "../../noDataFound";

const FETCH_PRODUCTS = gql`
  query fetchProducts($page: Float, $pageSize: Float) {
    fetchProducts(page: $page, pageSize: $pageSize) {
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
      transaction {
        id
        impUid
        transactAt
        status
        retrieveAddress
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

  return (
    <S.Wrapper>
      {SELLER_ARR && SELLER_ARR.length !== 0 ? (
        SELLER_ARR?.map((el: any) => (
          <S.ItemWrapper key={el.id}>
            <S.ItemImageWrapper>
              {el.images[0]?.src ? (
                <S.ItemImage
                  onError={(event) => {
                    if (event.target instanceof HTMLImageElement)
                      event.target.src = "../../error-image.png";
                  }}
                  src={`https://storage.googleapis.com/${el.images[0]?.src}`}
                />
              ) : (
                <S.ItemImage src="../../error-image.png" />
              )}
            </S.ItemImageWrapper>
            <S.ItemContentsWrapper>
              <S.ItemTitle>
                <S.ItemIsFull isFull={el.isSoldout}>
                  {el.isSoldout ? "[판매완료]" : "[판매중]"}
                </S.ItemIsFull>{" "}
                {el.name}
              </S.ItemTitle>
              <S.ItemRowWrapper>
                <S.ItemText>{el.price}원</S.ItemText>
                <S.ItemText>{getDate(el.createdAt)}</S.ItemText>
              </S.ItemRowWrapper>
              {el.isSoldout && (
                <>
                  <S.ItemText>
                    거래 날짜 : {getDate(el.transaction.transactAt)}
                  </S.ItemText>
                  <S.ItemText>
                    구매자 주소 : {el.transaction.retrieveAddress}
                  </S.ItemText>
                </>
              )}
            </S.ItemContentsWrapper>
          </S.ItemWrapper>
        ))
      ) : (
        <NoDataFound />
      )}
    </S.Wrapper>
  );
}
