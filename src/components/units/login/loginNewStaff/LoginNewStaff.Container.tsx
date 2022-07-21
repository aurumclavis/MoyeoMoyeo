import LoginNewStaffPageUI from "./LoginNewStaff.Presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useApolloClient, useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import { FETCH_LOGIN_USER, LOGIN } from "./LoginNewStaff.Queries";
import { Modal } from "antd";
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
export default function LoginNewStaffPage() {
  const router = useRouter();
  const client = useApolloClient();
  const [login] = useMutation(LOGIN);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

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
      const Token = result.data.login; // accessToken
      const resultUserInfo = await client.query({
        query: FETCH_LOGIN_USER,
        context: {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        },
      });
      setAccessToken(result.data?.login);
      const userInfo = resultUserInfo.data?.fetchLoginUser;
      if (!userInfo.manager) {
        Modal.info({
          content: "일반회원 로그인페이지에서 다시 로그인바랍니다.",
        });
        return router.push("/login");
      }
      console.log(userInfo);
      setUserInfo(userInfo);
      Modal.success({ content: `${userInfo.name}님 어서오세요!` });
      router.push("/");
    } catch (error) {
      Modal.error({ content: "로그인 정보가 일치하지 않습니다." });
      router.push("/login/newStaff");
    }
  };

  return (
    <LoginNewStaffPageUI
      // hookform
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      // login
      onClickToLogin={onClickToLogin}
    />
  );
}
