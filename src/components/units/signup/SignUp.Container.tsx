import { useRouter } from "next/router";
import SignUpPageUI from "./SignUp.Presenter";

export default function SignUpPage() {
  const router = useRouter();

  const onClickToSignNew = () => {
    router.push("/signUp/new");
  };
  const onClickToSignNewStaff = () => {
    router.push("/signUp/newStaff");
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
