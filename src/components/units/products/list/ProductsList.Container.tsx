import { useQuery } from "@apollo/client";
import ProductsListUI from "./ProductsList.Presenter";
import { FETCH_PRODUCTS } from "./ProductsList.Queries";

export default function ProductsList() {
  const { data } = useQuery(FETCH_PRODUCTS);

  return <ProductsListUI data={data} />;
}
