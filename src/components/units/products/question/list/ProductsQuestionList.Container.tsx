import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_PRODUCT_COMMENTS } from "./ProductsQuestionList.Queries";
import ProductsQuestionListItem from "./item/ProductsQuestionListItem.Container";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3.125rem 0;
`;

export default function ProductsQuestionList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT_COMMENTS, {
    variables: {
      productId: router.query.productId,
    },
  });
  return (
    <Wrapper>
      {data?.fetchProductComments.map((el: any) => (
        <ProductsQuestionListItem el={el} key={el.id} />
      ))}
    </Wrapper>
  );
}
