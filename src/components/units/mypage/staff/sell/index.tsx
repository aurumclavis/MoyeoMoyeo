import { gql, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../../commons/store";
import { getDate } from "../../../../commons/getDate";
import * as S from "../../listItem/MyPageListItem.Styles";
import InfiniteScroll from "react-infinite-scroller";

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
  const PAGE_SIZE = 3;
  const { data, fetchMore } = useQuery(FETCH_PRODUCTS, {
    variables: { pageSize: PAGE_SIZE, page: 1 },
  });
  const [userInfo] = useRecoilState(userInfoState);
  const SELLER_ARR = data?.fetchProducts.filter(
    (el: any) => el.seller.email === userInfo.email
  );

  const loadProducts = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(SELLER_ARR.length / PAGE_SIZE) + 1,
        pageSize: PAGE_SIZE,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchProducts)
          return { fetchProducts: [...prev.fetchProducts] };
        return {
          fetchProducts: [
            ...prev.fetchProducts,
            ...fetchMoreResult?.fetchProducts,
          ],
        };
      },
    });
  };

  return (
    <S.Wrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadProducts}
        hasMore={true || false}
        useWindow={false}
      >
        {SELLER_ARR ? (
          SELLER_ARR?.map((el: any) => (
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
          <></>
        )}
      </InfiniteScroll>
    </S.Wrapper>
  );
}
