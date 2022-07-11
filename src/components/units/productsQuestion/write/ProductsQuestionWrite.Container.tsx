import ProductsQuestionWriteUI from "./ProductsQuestionWrite.Presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object({
  contents: yup.string().required(),
});

export default function ProductsQuestionWrite() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  return (
    <ProductsQuestionWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
