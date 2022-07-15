import { useState } from "react";
import CalenderPageUI from "./DateList.Presenter";

export default function CalenderPage(props) {
  const [isOpen, setIsOpen] = useState(true);

  const onClickCalederOpen = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <CalenderPageUI
      isActive={props.isActive}
      isOpen={isOpen}
      onClickCalederOpen={onClickCalederOpen}
    />
  );
}
