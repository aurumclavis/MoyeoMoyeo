import ProductsQuestionListItem from "./item/ProductsQuestionListItem.Container";
import * as S from "./ProductsQuestionList.Styles";
export default function ProductsQuestionListUI() {
  return (
    <S.Wrapper>
      {new Array(3).fill(1).map((el, index) => (
        <ProductsQuestionListItem key={index} />
      ))}
    </S.Wrapper>
  );
}
