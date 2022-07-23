import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import ProductsListItem from "./item/ProductsListItem.Container";
import * as S from "./ProductsList.Styles";
import { IProductsListUIProps } from "./ProductsList.Types";
import InfiniteScroll from "react-infinite-scroller";

export default function ProductsListUI(props: IProductsListUIProps) {
  const { onClickMoveToPage } = useMoveToPage();
  const [userInfo] = useRecoilState(userInfoState);
  const [selected, setSelected] = useState("");

  const SOLD_ARR = props.data?.fetchProducts?.filter((el: any) => el.isSoldout);
  const UNSOLD_ARR = props.data?.fetchProducts?.filter(
    (el: any) => !el.isSoldout
  );

  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
  };

  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <S.SelectBtnWrapper>
          {!userInfo.name && (
            <S.CreateBtnWrapper>
              <S.CreateBtn onClick={onClickMoveToPage("products/new")}>
                상품 등록
              </S.CreateBtn>
            </S.CreateBtnWrapper>
          )}
          <S.Select onChange={onChangeSelect}>
            <option value="">전체상품</option>
            <option value={"false"}>판매중</option>
            <option value={"true"}>판매완료</option>
          </S.Select>
        </S.SelectBtnWrapper>
      </S.SearchWrapper>

      {/* 상품 그리드 : 무한 스크롤 적용 */}
      <InfiniteScroll
        pageStart={0}
        loadMore={props.loadProducts}
        hasMore={true || false}
        useWindow={true}
      >
        {SOLD_ARR || UNSOLD_ARR ? (
          <S.GridWrapper>
            {selected === "" &&
              props.data?.fetchProducts.map((el: any) => (
                <ProductsListItem el={el} key={el.id} />
              ))}
            {selected === "true" &&
              SOLD_ARR?.map((el: any) => (
                <ProductsListItem el={el} key={el.id} />
              ))}
            {selected === "false" &&
              UNSOLD_ARR?.map((el: any) => (
                <ProductsListItem el={el} key={el.id} />
              ))}
          </S.GridWrapper>
        ) : (
          <></>
        )}
      </InfiniteScroll>

      {/* 페이지네이션 */}
      {/* <Pagination01
        refetch={props.refetch}
        count={props.data?.fetchProducts.length || 0}
      /> */}
    </S.Wrapper>
  );
}
