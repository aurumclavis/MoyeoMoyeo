import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import SignUpSnsPageUI from "./signUpSns.Presenter";

export default function SignUpSnsPage() {
  const { onClickMoveToPage } = useMoveToPage();
  return <SignUpSnsPageUI onClickMoveToPage={onClickMoveToPage} />;
}
