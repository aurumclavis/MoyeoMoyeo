import ProductsQuestionListItem from "./item/ProductsQuestionListItem.Container";
import * as S from "./ProductsQuestionList.Styles";
export default function ProductsQuestionListUI(props) {
  return (
    <S.Wrapper>
      {props.data?.fetchProductComments.map((el) => (
        <ProductsQuestionListItem el={el} key={el.id} />
      ))}
    </S.Wrapper>
  );
}
