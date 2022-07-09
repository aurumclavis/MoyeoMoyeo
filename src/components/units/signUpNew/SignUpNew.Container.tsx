import SignUpNewPageUI from "./SignUpNew.Presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";

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
  password2: yup
    .string()
    .required("비밀번호는 확인은 필수 입력 사항입니다.")
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
  phoneNumber: yup
    .string()
    .required("핸드폰 번호는 필수 입력 사항입니다.")
    .typeError("숫자만 입력가능합니다."),
  phoneNumber2: yup
    .number()
    .required("핸드폰 번호는 필수 입력 사항입니다.")
    .typeError("숫자만 입력가능합니다."),
});

export default function SignUpNewPage() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [phone2ndNum, setPhone2ndNum] = useState<number>();
  const [phone3rdNum, setPhone3rdNum] = useState<number>();
  const [isActive, setIsActive] = useState(false);
  const [isReadyForNum, setIsReadyForNum] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const { register, handleSubmit, formState, setValue, trigger, reset, watch } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });
  const onChange2ndNum = (event) => {
    setPhone2ndNum(event.target.value);
  };
  const onChange3ndNum = (event) => {
    setPhone3rdNum(event.target.value);
  };

  const onClickGetNumber = () => {
    setIsReadyForNum(true);
    // if (phone2ndNum.length >= 4) {
    //   phone3rdNum.current.focus();
    //   return;
    // }
  };

  const onClickConfirm = () => {
    setIsReadyForNum(false);
    setIsDone(true);
  };
  const onClickCreateUser = async (data: any) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            name: data.name,
            email: data.email,
            password: data.password,
          },
        },
      });
      alert("회원가입완료");
      router.push(`/login`);
    } catch (error) {
      alert("가입안됨 확인필요");
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
      phone2ndNum={phone2ndNum}
      phone3rdNum={phone3rdNum}
      onChange2ndNum={onChange2ndNum}
      onChange3ndNum={onChange3ndNum}
      onClickGetNumber={onClickGetNumber}
      onClickConfirm={onClickConfirm}
      // signup
      onClickCreateUser={onClickCreateUser}
      //login
      onClickMoveToPage={onClickMoveToPage}
    />
  );
}
