import SignUpNewStaffPageUI from "./SignUpNewStaff.Presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  CREATE_USER,
  SEND_SMS,
  VALIDATE_PHONE,
} from "./SignUpNewStaff.Queries";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";

const schema = yup.object({
  manager: yup
    .string()
    .required("담당자님의 이름은 필수 입력사항입니다.")
    .min(2, "이름은 최소 2자리 이상 입력해주세요")
    .max(5, "이름은 최대 5자리로 입력해주세요"),
  institution: yup.string().required("소속회사는 필수 입력사항입니다."),
  email: yup
    .string()
    .email("이메일 형식에 적합하지 않습니다")
    .required("이메일은 필수 입력사항입니다."),
  password: yup
    .string()
    .required("비밀번호는 필수 입력사항입니다.")
    .matches(
      /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{8,16}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8~16자리로 입력바랍니다."
    ),
  passwordCheck: yup
    .string()
    .required("비밀번호 재입력은 필수 입력사항입니다.")
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
  phoneNumber: yup
    .string()
    .required("핸드폰 번호는 필수 입력사항입니다.")
    .typeError("숫자만 입력가능합니다."),
  phoneNumber2: yup
    .string()
    .required("핸드폰 번호는 필수 입력사항입니다.")
    .typeError("숫자만 입력가능합니다."),
  validateToken: yup
    .number()
    .required("필수 사항입니다.")
    .typeError("숫자만 입력가능합니다."),
});
export default function SignUpNewEventPage() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const [sendSMS] = useMutation(SEND_SMS);
  const [validatePhone] = useMutation(VALIDATE_PHONE);
  // moblie
  const [isActive] = useState(true);
  const [isReadyForNum, setIsReadyForNum] = useState(false);
  const [isDone, setIsDone] = useState(false);
  // checkbox
  const [checked, setChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(false);

  const { register, handleSubmit, formState, watch } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

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
      Modal.error({ content: "인증번호를 다시 확인 바랍니다." });
    }
  };

  // 회원가입
  const onClickCreateUser = async (data: any) => {
    if (!checked) {
      return Modal.info({ content: "개인정보 취급방침을 확인바랍니다." });
    }
    if (!secondChecked) {
      return Modal.info({ content: "이용약관을 확인바랍니다." });
    }
    try {
      await createUser({
        variables: {
          userInput: {
            manager: data.manager,
            email: data.email,
            password: data.password,
            phone,
            institution: data.institution,
          },
        },
      });

      Modal.success({ content: "회원가입에 성공했습니다!" });
      router.push(`/login/newStaff`);
    } catch (error) {
      Modal.error({ content: "(회원가입실패) 다시 한 번 확인해주세요." });
    }
  };
  return (
    <SignUpNewStaffPageUI
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
      setChecked={setChecked}
      setSecondChecked={setSecondChecked}
    />
  );
}
