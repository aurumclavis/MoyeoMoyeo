import OurEventListUI from "./OurEventList.Presenter";

import { FETCH_POSTS } from "./OurEventList.Queries";
import { useQuery } from "@apollo/client";

export default function OurEventList() {
  const PAGE_SIZE = 10;
  const { data, fetchMore } = useQuery(FETCH_POSTS, {
    variables: { pageSize: PAGE_SIZE, page: 1 },
  });
  console.log(data);
  const ToloadFunc = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data.fetchPosts.length / 10) + 1,
        pageSize: PAGE_SIZE,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchPosts)
          return {
            fetchPosts: [...prev.fetchPosts],
          };
        return {
          fetchPosts: [...prev.fetchPosts, ...fetchMoreResult.fetchPosts],
        };
      },
    });
  };

  return <OurEventListUI data={data} ToloadFunc={ToloadFunc} />;
}
