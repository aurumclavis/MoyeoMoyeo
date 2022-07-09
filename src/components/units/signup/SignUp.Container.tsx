import { useMoveToPage } from "../../commons/hooks/useMoveToPage";
import SignUpPageUI from "./SignUp.Presenter";

export default function SignUpPage() {
  const { onClickMoveToPage } = useMoveToPage();

  return <SignUpPageUI onClickMoveToPage={onClickMoveToPage} />;
}
