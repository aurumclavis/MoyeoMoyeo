import OurEventListUI from "./OurEventList.Presenter";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";

export default function OurEventList(props) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <OurEventListUI
      ourEvents={props.ourEvents}
      onClickMoveToPage={onClickMoveToPage}
    />
  );
}
