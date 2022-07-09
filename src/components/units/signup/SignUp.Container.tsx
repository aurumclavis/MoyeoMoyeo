import { useRouter } from "next/router";
import SignUpPageUI from "./SignUp.Presenter";

export default function SignUpPage() {
  const router = useRouter();

  const onClickToSignNew = () => {
    router.push("/signup/sns");
  };
  const onClickToSignNewStaff = () => {
    router.push("/signup/newStaff");
  };
  const onClickToLogin = () => {
    router.push("/login");
  };
  return (
    <SignUpPageUI
      onClickToSignNew={onClickToSignNew}
      onClickToSignNewStaff={onClickToSignNewStaff}
      onClickToLogin={onClickToLogin}
    />
  );
}
