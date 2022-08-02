import { WithAuth } from "../../../../src/components/commons/hocs/withAuth";
import ProductsPayment from "../../../../src/components/units/products/payment/ProductsPayment.Container";

function ProductsProductIdPaymentPage() {
  return <ProductsPayment />;
}
export default WithAuth(ProductsProductIdPaymentPage);
