import LoginPageUI from "./Login.Presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { LOGIN, FETCH_USER } from "./Login.Queries";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다")
    .required("이메일은 필수 입력사항입니다."),
  password: yup
    .string()
    .required("비밀번호는 필수 입력 사항입니다.")
    .matches(
      /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{8,16}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8~16자리로 입력바랍니다."
    ),
});
export default function LoginPage() {
  const router = useRouter();
  const client = useApolloClient();
  const [login] = useMutation(LOGIN);
  const { data } = useQuery(FETCH_USER);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  const { register, handleSubmit, formState, setValue, trigger, reset, watch } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  // 회원가입
  const onClickToSignUp = () => {
    router.push("./signup");
  };
  // 관계자회원 로그인
  const onClickToLoginNewStaff = () => {
    router.push("./login/newStaff");
  };
  // 비밀번호 찾기
  const onClickToFindPw = () => {
    router.push("./login/findpw");
  };
  // 로그인
  const onClickToLogin = async (data: any) => {
    console.log(data);
    try {
      const result = await login({
        variables: {
          email: data.email,
          password: data.password,
        },
      });

      console.log(result.data.login);
      const Token = result.data.login; //accessToken
      const resultUserInfo = await client.query({
        query: FETCH_USER,
        variables: {
          email: data.email,
        },
        context: {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        },
      });

      setAccessToken(result.data?.login);
      // localStorage.setItem("refreshToken", "true");
      const userInfo = resultUserInfo.data?.fetchUser;
      // if (userInfo.manager) {
      //   return alert("관계자 회원 로그인페이지에서 다시 로그인바랍니다.");
      // }
      setUserInfo(userInfo);
      console.log(userInfo);
      alert("로그인이 되었습니다.");
      router.push("/");
    } catch (error) {
      alert("로그인 정보가 일치하지 않습니다.");
      router.push("/login");
    }
  };
  return (
    <LoginPageUI
      // hookform
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      // router
      onClickToSignUp={onClickToSignUp}
      onClickToLoginNewStaff={onClickToLoginNewStaff}
      onClickToFindPw={onClickToFindPw}
      // login
      onClickToLogin={onClickToLogin}
    />
  );
}
