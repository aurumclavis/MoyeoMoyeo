import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_PRODUCT } from "../../../../src/components/units/products/detail/ProductsDetail.Queries";
import ProductsWrite from "../../../../src/components/units/products/write/ProductWrite.Container";

export default function ProductsProductIdEditPage() {
  const router = useRouter();
  const { data, loading } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.productId },
  });
  return loading ? <p></p> : <ProductsWrite data={data} isEdit={true} />;
}
