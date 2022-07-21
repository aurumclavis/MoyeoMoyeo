import FindPwPageUI from "./FindPassword.Presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useState } from "react";
import { Modal } from "antd";
import { useMutation } from "@apollo/client";
import {
  AUTHORIZE_RESET,
  SEND_EMAIL,
  RESET_PASSWORD,
} from "./FindPassword.Queries";
const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다")
    .required("이메일은 필수 입력사항입니다."),
  password: yup
    .string()
    .required("비밀번호는필수 입력 사항입니다.")
    .matches(
      /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{8,16}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8~16자리로 입력바랍니다."
    ),
  passwordCheck: yup
    .string()
    .required("비밀번호는 확인은 필수 입력 사항입니다.")
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
  validateToken: yup
    .number()
    .required("필수 사항입니다.")
    .typeError("숫자만 입력가능합니다."),
});
export default function FindPwPage() {
  const router = useRouter();
  const [sendEmail] = useMutation(SEND_EMAIL);
  const [authorizeReset] = useMutation(AUTHORIZE_RESET);
  const [resetPassword] = useMutation(RESET_PASSWORD);
  const [isActive] = useState(true);
  const [isReadyForNum, setIsReadyForNum] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const { register, handleSubmit, formState, watch, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const email = watch("email");
  const tokenInput = watch("validateToken");
  const newPassword = watch("password");

  // email 인증번호 요청
  const onClickGetNumber = async () => {
    try {
      await sendEmail({
        variables: { email },
      });
      setIsReadyForNum(true);
      Modal.success({ content: "인증번호를 전송하였습니다." });
    } catch (error) {
      setIsReadyForNum(false);
      Modal.error({ content: "등록된 이메일이 아닙니다." });
    }
  };

  // email 인증번호 확인
  const onClickConfirm = async () => {
    try {
      const result = await authorizeReset({
        variables: { email, tokenInput },
      });
      const TokenCheckValid = result.data?.authorizeReset;
      if (TokenCheckValid === true) {
        Modal.success({ content: "이메일 인증이 완료되었습니다." });
        setIsDone(true);
      }
    } catch (error) {
      setIsDone(false);
      setIsReadyForNum(true);
      Modal.error({ content: "이메일 인증을 다시 해주세요." });
    }
  };

  // 비밀번호 업데이트
  const onClickToUpdatePW = async (data: any) => {
    try {
      await resetPassword({
        variables: {
          email: data.email,
          newPassword,
        },
      });
      Modal.success({ content: "비밀번호가 업데이트 되었습니다. " });
      router.push("/login");
    } catch (error) {
      Modal.error({ content: "비밀번호 업데이트 실패" });
    }
  };
  return (
    <FindPwPageUI
      // hook-form
      formState={formState}
      register={register}
      watch={watch}
      handleSubmit={handleSubmit}
      setValue={setValue}
      // email 인증
      isReadyForNum={isReadyForNum}
      isDone={isDone}
      isActive={isActive}
      onClickGetNumber={onClickGetNumber}
      onClickToUpdatePW={onClickToUpdatePW}
      onClickConfirm={onClickConfirm}
    />
  );
}
