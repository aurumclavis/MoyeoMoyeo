import { useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import CalenderPageUI from "./DateList.Presenter";
import { FETCH_EVENTS, FETCH_POSTS } from "./DateList.Queries";
// import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";

export default function CalenderPage() {
  const { eventsData } = useQuery(FETCH_EVENTS);
  const { postsData } = useQuery(FETCH_POSTS);
  const [selected, setSelected] = useState("");
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
    console.log(selected);
  };

  return <CalenderPageUI onChangeSelect={onChangeSelect} />;
}
