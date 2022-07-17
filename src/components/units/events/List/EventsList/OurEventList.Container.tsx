import OurEventListUI from "./OurEventList.Presenter";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { FETCH_POST } from "./OurEventList.Queries";
import { useQuery } from "@apollo/client";

export default function OurEventList(props) {
  const { onClickMoveToPage } = useMoveToPage();
  const { data, refetch, fetchMore } = useQuery(FETCH_POST);

  const loadFunc = () => {
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
    <OurEventListUI
      ourEvents={props.ourEvents}
      onClickMoveToPage={onClickMoveToPage}
      data={data}
      loadFunc={loadFunc}
      refetch={refetch}
    />
  );
}
