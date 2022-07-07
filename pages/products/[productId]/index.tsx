import ProductDetail from "../../../src/components/units/products/detail/ProductsDetail.Container";
import ProductsQuestionWrite from "../../../src/components/units/productsQuestion/write/ProductsQuestionWrite.Container";
import styled from "@emotion/styled";
import ProductsQuestionList from "../../../src/components/units/productsQuestion/list/ProductsQuestionList.Container";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export default function ProductsProductIdPage() {
  return (
    <Wrapper>
      <ProductDetail />
      <ProductsQuestionWrite />
      <ProductsQuestionList />
    </Wrapper>
  );
}
