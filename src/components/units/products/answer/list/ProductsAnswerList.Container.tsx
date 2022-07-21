import ProductsAnswerListItem from "./item/ProductsAnswerListItem.Container";
import { IProductsAnswerListProps } from "./ProductsAnswerList.Types";

export default function ProductsAnswerList(props: IProductsAnswerListProps) {
  return (
    <>
      {props.data?.fetchComment.children.map((el: any) => (
        <ProductsAnswerListItem
          key={el.id}
          el={el}
          onClickActiveAnswer={props.onClickActiveAnswer}
        />
      ))}
    </>
  );
}
