import { useRouter } from "next/router";
import SignUpPageUI from "./SignUp.Presenter";

export default function SignUpPage() {
  const router = useRouter();

  const onClickToSignNew = () => {
    router.push("/signup/new");
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
