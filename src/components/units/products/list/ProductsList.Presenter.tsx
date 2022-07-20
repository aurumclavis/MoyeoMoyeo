import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import Pagination01 from "../../../commons/pagination/01/Pagination01.Container";
import * as S from "./ProductsList.Styles";

export default function ProductsListUI(props: any) {
  const { onClickMoveToPage } = useMoveToPage();
  const [userInfo] = useRecoilState(userInfoState);
  return (
    <S.Wrapper>
      <S.SearchWrapper>
        {/* <S.SearchBarWrapper>
          <S.SearchBarIcon />
          <S.SearchBarInput placeholder="상품을 검색해보세요." />
        </S.SearchBarWrapper> */}
        <S.SelectBtnWrapper>
          {!userInfo.name && (
            <S.CreateBtnWrapper>
              <S.CreateBtn onClick={onClickMoveToPage("products/new")}>
                상품 등록
              </S.CreateBtn>
            </S.CreateBtnWrapper>
          )}
          <S.Select>
            <option>전체상품</option>
            <option>판매중</option>
            <option>판매완료</option>
          </S.Select>
        </S.SelectBtnWrapper>
      </S.SearchWrapper>

      {/* 상품 그리드 */}
      <S.GridWrapper>
        {props.data?.fetchProducts.map((el: any) => (
          <S.GridItemWrapper
            onClick={onClickMoveToPage(`products/${el.id}`)}
            key={el.id}
          >
            <S.ImageWrapper>
              <S.Image src="https://images.unsplash.com/photo-1568150491977-b06e2fdf84cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" />
            </S.ImageWrapper>
            <S.TextWrapper>
              <S.Text>{el.name}</S.Text>

              {/* <S.Text>{el.isSoldout ? "판매 완료" : "판매 중"}</S.Text> */}
              <S.ViewPickWrapper>
                <S.Text>{el.price}원</S.Text>
                <S.IconWrapper>
                  <S.ViewIcon />
                  <S.Text>{el.viewCount}</S.Text>
                  <S.PickIcon />
                  <S.Text>{el.likedUsers?.length || "0"}</S.Text>
                </S.IconWrapper>
              </S.ViewPickWrapper>
            </S.TextWrapper>
          </S.GridItemWrapper>
        ))}
      </S.GridWrapper>

      {/* 페이지네이션 */}
      <Pagination01 />
    </S.Wrapper>
  );
}
