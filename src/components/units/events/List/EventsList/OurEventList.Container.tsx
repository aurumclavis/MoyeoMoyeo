import OurEventListUI from "./OurEventList.Presenter";

import { FETCH_POST } from "./OurEventList.Queries";
import { useQuery } from "@apollo/client";

export default function OurEventList() {
  const { data } = useQuery(FETCH_POST);
  // const { data, refetch, fetchMore } = useQuery(FETCH_POST);
  // const { data : dataPostsCount, refetch: refetchPostsCount } =
  //   useQuery(FETCH_POST);
  // const ToloadFunc = () => {
  //   if (!data) return;

  //   fetchMore({
  //     variables: { page: Math.ceil(data.fetchPosts.length / 10) + 1 },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       if (!fetchMoreResult?.fetchPosts)
  //         return {
  //           fetchPosts: [...prev.fetchPosts],
  //         };
  //       return {
  //         fetchPosts: [...prev.fetchPosts, ...fetchMoreResult.fetchPosts],
  //       };
  //     },
  //   });
  // };

  return <OurEventListUI data={data} />;
}
