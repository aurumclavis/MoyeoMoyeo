import ProductsWriteUI from "./ProductWrite.Presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object({
  name: yup
    .string()
    .max(50, "50자 이내로 입력해주세요.")
    .required("필수 입력 사항입니다."),
  price: yup
    .number()
    .positive("0 이상의 숫자를 입력해주세요.")
    .required("필수 입력 사항입니다.")
    .typeError("숫자만 입력 가능합니다."),
  summary: yup
    .string()
    .max(100, "100자 이내로 입력해주세요.")
    .required("필수 입력 사항입니다."),
  contents: yup.string().required("필수 입력 사항입니다."),
});
export default function ProductsWrite() {
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  return (
    <ProductsWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeContents={onChangeContents}
    />
  );
}
