import { useQuery } from "@apollo/client";
import FestivalListUI from "./FestivalList.Presenter";
import { FETCH_POSTS } from "./FestivalList.Queries";
// import { IFestivalList } from "./FestivalList.Types";

export default function FestivalList() {
  const { data, refetch, fetchMore } = useQuery(FETCH_POSTS);

  const ToloadFunc = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data.fetchPosts.length / 10) + 1 },
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

  return (
    <>
      <FestivalListUI data={data} ToloadFunc={ToloadFunc} refetch={refetch} />
    </>
  );
}
