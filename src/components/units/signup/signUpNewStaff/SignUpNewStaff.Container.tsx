import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import SignUpNewEventPageUI from "./SignUpNewStaff.Presenter";

export default function SignUpNewEventPage() {
  const { onClickMoveToPage } = useMoveToPage();
  return <SignUpNewEventPageUI onClickMoveToPage={onClickMoveToPage} />;
}
