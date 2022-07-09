import { useRouter } from "next/router";
import SignUpSnsPageUI from "./signUpSns.Presenter";

export default function SignUpSnsPage() {
  const router = useRouter();

  const onClickEmailLogin = () => {
    router.push("/signup/new");
  };
  return <SignUpSnsPageUI onClickEmailLogin={onClickEmailLogin} />;
}
