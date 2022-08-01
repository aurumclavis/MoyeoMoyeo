import { useQuery } from "@apollo/client";
import FestivalListUI from "./FestivalList.Presenter";
import { FETCH_EVENTS } from "./FestivalList.Queries";
// import { IFestivalList } from "./FestivalList.Types";

export default function FestivalList() {
  const { data } = useQuery(FETCH_EVENTS);

  // const ToloadFunc = () => {
  //   if (!data) return;

  //   fetchMore({
  //     variables: { page: Math.ceil(data.fetchEvents.length / 10) + 1 },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       if (!fetchMoreResult?.fetchEvents)
  //         return {
  //           fetchEvents: [...prev.fetchEvents],
  //         };
  //       return {
  //         fetchEvents: [...prev.fetchEvents, ...fetchMoreResult.fetchEvents],
  //       };
  //     },
  //   });
  // };
  // const onCickUrl = (e: string) => {
  //   window.open(`${e}`, _blank);
  // };

  return (
    <>
      <FestivalListUI data={data} />
    </>
  );
}
