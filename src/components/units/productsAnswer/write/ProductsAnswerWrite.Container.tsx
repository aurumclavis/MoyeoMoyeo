import ProductsAnswerWriteUI from "./ProductsAnswerWrite.Presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object({
  contents: yup.string().required(),
});

export default function ProductsAnswerWrite() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  return (
    <ProductsAnswerWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
