import { useQuery } from "@apollo/client";
import ProductsListUI from "./ProductsList.Presenter";
import { FETCH_PRODUCTS } from "./ProductsList.Queries";

export default function ProductsList() {
  const PAGE_SIZE = 5;
  const { data, fetchMore } = useQuery(FETCH_PRODUCTS, {
    variables: { pageSize: PAGE_SIZE, page: 1 },
  });

  const loadProducts = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data.fetchProducts.length / PAGE_SIZE) + 1,
        pageSize: PAGE_SIZE,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchProducts)
          return { fetchProducts: [...prev.fetchProducts] };
        return {
          fetchProducts: [
            ...prev.fetchProducts,
            ...fetchMoreResult?.fetchProducts,
          ],
        };
      },
    });
  };
  return <ProductsListUI data={data} loadProducts={loadProducts} />;
}
