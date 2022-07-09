import Pagination01 from "../../../commons/pagination/01/Pagination01.Container";
import * as S from "./ProductsList.Styles";

export default function ProductsListUI() {
  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <S.SearchBarWrapper>
          <S.SearchBarIcon />
          <S.SearchBarInput placeholder="상품을 검색해보세요." />
        </S.SearchBarWrapper>
        <S.SelectBtnWrapper>
          <S.CreateBtnWrapper>
            <S.CreateBtn>상품등록</S.CreateBtn>
          </S.CreateBtnWrapper>
          <S.Select>
            <option>전체상품</option>
            <option>판매중</option>
            <option>판매완료</option>
          </S.Select>
        </S.SelectBtnWrapper>
      </S.SearchWrapper>

      {/* 상품 그리드 */}
      <S.GridWrapper>
        {new Array(12).fill(1).map((el, index) => (
          <S.GridItemWrapper key={index + 1}>
            <S.ImageWrapper>
              <S.Image src="https://images.unsplash.com/photo-1568150491977-b06e2fdf84cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" />
            </S.ImageWrapper>
            <S.TextWrapper>
              <S.Text>상품명</S.Text>
              <S.Text>10000원</S.Text>
            </S.TextWrapper>
          </S.GridItemWrapper>
        ))}
      </S.GridWrapper>

      {/* 페이지네이션 */}
      <Pagination01 />
    </S.Wrapper>
  );
}
