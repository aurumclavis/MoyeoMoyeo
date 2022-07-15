import { useState } from "react";
import CalenderPageUI from "./DateList.Presenter";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";

export default function CalenderPage(props) {
  // const [isOpen, setIsOpen] = useState(true);

  // const onClickCalederOpen = () => {
  //   setIsOpen(prev => !prev);
  // };
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <CalenderPageUI
      isActive={props.isActive}
      onClickMoveToPage={onClickMoveToPage}
    />
  );
}