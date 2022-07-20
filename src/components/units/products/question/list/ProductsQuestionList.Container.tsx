import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductsQuestionListUI from "./ProductsQuestionList.Presenter";
import { FETCH_PRODUCT_COMMENTS } from "./ProductsQuestionList.Queries";

export default function ProductsQuestionList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT_COMMENTS, {
    variables: {
      productId: router.query.productId,
    },
  });
  return <ProductsQuestionListUI data={data} />;
}
