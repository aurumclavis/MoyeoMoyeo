import ProductsQuestionListItem from "./item/ProductsQuestionListItem.Container";
import * as S from "./ProductsQuestionList.Styles";
interface ProductsQuestionListUIProps {
  data: any;
}
export default function ProductsQuestionListUI(
  props: ProductsQuestionListUIProps
) {
  return (
    <S.Wrapper>
      {props.data?.fetchProductComments.map((el: any) => (
        <ProductsQuestionListItem el={el} key={el.id} />
      ))}
    </S.Wrapper>
  );
}
