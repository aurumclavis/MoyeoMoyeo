import { useQuery } from "@apollo/client";
import FestivalListUI from "./festivalList.Presenter";
import { FETCH_EVENTS } from "./FestivalList.Queries";
// import { IFestivalList } from "./FestivalList.Types";

export default function FestivalList() {
  const { data } = useQuery(FETCH_EVENTS);
  console.log(data);
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
  // const loadEvents = useQuery(LOAD_EVENTS, {
  //   variables: { page: " 1", pageSize: "20" },
  // });
  // useEffect(() => {
  //   // loadEvents();
  // }, []);
  return (
    <>
      <FestivalListUI data={data} />
    </>
  );
}
