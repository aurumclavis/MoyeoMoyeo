import ProductsAnswerList from "../../../productsAnswer/list/ProductsAnswerList.Container";
import * as S from "./ProductsQuestionListItem.Style";
export default function ProductsQuestionListItem() {
  return (
    <>
      <S.ItemWrapper>
        <S.ContentsWrapper>
          <S.Text>작성자</S.Text>
          <S.Date>2022-07-01</S.Date>
          <S.Contents>
            문의 내용입니다. 문의 내용입니다. 문의 내용입니다. 문의 내용입니다.
            문의 내용입니다. 문의 내용입니다. 문의 내용입니다. 문의 내용입니다.
            문의 내용입니다. 문의 내용입니다. 문의 내용입니다. 문의 내용입니다.
            문의 내용입니다. 문의 내용입니다. 문의 내용입니다. 문의 내용입니다.
            문의 내용입니다.문의 내용입니다. 문의 내용입니다. 문의 내용입니다.
            문
          </S.Contents>
        </S.ContentsWrapper>
        <S.IconWrapper>
          <S.ReplyIcon />
          <S.DeleteIcon />
        </S.IconWrapper>
      </S.ItemWrapper>
      <ProductsAnswerList />
    </>
  );
}
