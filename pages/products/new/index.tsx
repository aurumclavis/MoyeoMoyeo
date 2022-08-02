import { WithAuth } from "../../../src/components/commons/hocs/withAuth";
import ProductWrite from "../../../src/components/units/products/write/ProductWrite.Container";

function ProductsNewPage() {
  return <ProductWrite />;
}
export default WithAuth(ProductsNewPage);
