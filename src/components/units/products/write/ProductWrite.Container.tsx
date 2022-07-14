import ProductWriteUI from "./ProductWrite.Presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IProductWriteProps } from "./ProductWrite.Types";
import { CREATE_PRODUCT } from "./ProductWrite.Queries";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";

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

export default function ProductWrite(props: IProductWriteProps) {
  const { onClickMoveToPage } = useMoveToPage();
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickCreateProduct = async (data) => {
    try {
      const result = await createProduct({
        variables: {
          productInput: {
            name: data.name,
            price: data.price,
            description: data.summary,
            contentSrc: data.contents,
            mainImgSrc: "",
            subImgSrcs: ["", ""],
            userId: "e7fde4be-5eb6-4463-a4b9-16e2510a7104",
          },
        },
      });
      // console.log(result);
      Modal.success({
        content: "상품이 성공적으로 등록되었습니다.",
      });
      onClickMoveToPage(`/products/${result.data.createProduct.id}`)();
    } catch (error) {
      Modal.error({
        content: error.message,
      });
    }
  };

  return (
    <ProductWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
      onClickCreateProduct={onClickCreateProduct}
    />
  );
}
