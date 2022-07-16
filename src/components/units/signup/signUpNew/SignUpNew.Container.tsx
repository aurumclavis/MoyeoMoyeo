import SignUpNewPageUI from "./SignUpNew.Presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { CREATE_USER, SEND_SMS, VALIDATE_PHONE } from "./SignUpNew.Queries";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
const schema = yup.object({
  name: yup
    .string()
    .required("이름은 필수 입력사항입니다.")
    .min(2, "이름은 최소 2자리 이상 입력해주세요")
    .max(5, "이름은 최대 5자리로 입력해주세요"),
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
  phoneNumber: yup
    .string()
    .required("핸드폰 번호는 필수 입력 사항입니다.")
    .typeError("숫자만 입력가능합니다."),
  phoneNumber2: yup
    .string()
    .required("핸드폰 번호는 필수 입력 사항입니다.")
    .typeError("숫자만 입력가능합니다."),
  validateToken: yup
    .number()
    .required("필수 사항입니다.")
    .typeError("숫자만 입력가능합니다."),
});

export default function SignUpNewPage() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const [sendSMS] = useMutation(SEND_SMS);
  const [validatePhone] = useMutation(VALIDATE_PHONE);
  const [isActive, setIsActive] = useState(true);
  const [phoneNum, setPhoneNum] = useState();

  const { onClickMoveToPage } = useMoveToPage();
  const [isReadyForNum, setIsReadyForNum] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const { register, handleSubmit, formState, watch } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  // moblie 비활성화용
  const onChangeMobile = (event) => {
    setIsActive(event.target.inpuvt);
  };

  // moblie 인증번호 요청
  const phone = "010" + watch("phoneNumber") + watch("phoneNumber2");
  const tokenInput = watch("validateToken");
  const onClickGetNumber = async () => {
    console.log(phone);
    setIsReadyForNum(true);
    try {
      await sendSMS({
        variables: { phone },
      });
      Modal.success({ content: "인증번호를 전송하였습니다." });
    } catch (error) {
      Modal.error({ content: "인증번호 전송에 실패하였습니다." });
    }
  };
  // moblie 인증번호 확인
  const onClickConfirm = async () => {
    try {
      await validatePhone({
        variables: { phone, tokenInput },
      });
      Modal.success({ content: "핸드폰 번호인증이 완료되었습니다." });
      setIsDone(true);
    } catch (error) {
      setIsDone(false);
      setIsReadyForNum(true);
      Modal.error({ content: "핸드폰 번호인증을 다시 해주세요." });
    }
  };

  // 회원가입
  const onClickCreateUser = async (data: any) => {
    // if(){
    //   return Modal.info({ content: "중복된 이메일(ID)입니다." });
    // }

    console.log(data);
    try {
      await createUser({
        variables: {
          userInput: {
            name: data.name,
            email: data.email,
            password: data.password,
            phone: phone,
          },
        },
      });
      Modal.success({ content: "회원가입에 성공했습니다!" });
      router.push(`/login`);
    } catch (error) {
      Modal.error({ content: "(회원가입실패) 다시 한 번 확인해주세요." });
    }
  };

  return (
    <SignUpNewPageUI
      // hook-form
      formState={formState}
      register={register}
      handleSubmit={handleSubmit}
      watch={watch}
      // mobile
      isActive={isActive}
      isReadyForNum={isReadyForNum}
      isDone={isDone}
      onClickGetNumber={onClickGetNumber}
      onClickConfirm={onClickConfirm}
      // signup
      onClickCreateUser={onClickCreateUser}
      //login
      onClickMoveToPage={onClickMoveToPage}
      onChangeMobile={onChangeMobile}
    />
  );
}
