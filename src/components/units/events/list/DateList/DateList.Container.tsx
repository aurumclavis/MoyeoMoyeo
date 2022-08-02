import { useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import CalenderPageUI from "./DateList.Presenter";
import { FETCH_EVENTS, FETCH_POSTS } from "./DateList.Queries";
// import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";

export default function CalenderPage() {
  const fetchEvents = useQuery(FETCH_EVENTS);
  const fetchPosts = useQuery(FETCH_POSTS, {
    variables: { pageSize: 10, page: 1 },
  });

  const [selected, setSelected] = useState("posts");
  // const [isOpen, setIsOpen] = useState(true);
  // const onClickCalederOpen = () => {
  //   setIsOpen(prev => !prev);
  // };
  // const { onClickMoveToPage } = useMoveToPage();

  // const onClickDetail = (e: any) => {
  //   onClickMoveToPage(e)();
  // };

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  return (
    <CalenderPageUI
      onChangeSelect={onChangeSelect}
      selected={selected}
      fetchEvents={fetchEvents}
      fetchPosts={fetchPosts}
    />
  );
}
