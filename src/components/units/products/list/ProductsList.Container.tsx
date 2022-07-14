import { useQuery } from "@apollo/client";
import ProductsListUI from "./ProductsList.Presenter";
import { FETCH_PRODUCTS } from "./ProductsList.Queries";
import { useEffect } from "react";

export default function ProductsList() {
  const { data } = useQuery(FETCH_PRODUCTS);
  useEffect(() => {
    console.log(data?.fetchProducts);
  });

  return <ProductsListUI data={data} />;
}
