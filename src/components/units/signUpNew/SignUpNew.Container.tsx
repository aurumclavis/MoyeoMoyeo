import SignUpNewPageUI from "./SignUpNew.Presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";

const schema = yup.object({
  name: yup
    .string()
    .required("필수 입력사항입니다.")
    .min(2, "이름는 최소 2자리 이상 입력해주세요")
    .max(5, "이름은 최대 5자리로 입력해주세요"),
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다")
    .required("필수 입력사항입니다."),
  password: yup
    .string()
    .required("필수 입력 사항입니다.")
    .matches(
      /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{8,16}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8~16자리로 입력바랍니다."
    ),
  password2: yup
    .string()
    .required("필수 입력 사항입니다.")
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
});

export default function SignUpNewPage() {
  const { register, handleSubmit, formState, setValue, trigger, reset } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  const router = useRouter();
  return <SignUpNewPageUI formState={formState} register={register} />;
}
