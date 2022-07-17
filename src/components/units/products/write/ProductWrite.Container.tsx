import ProductWriteUI from "./ProductWrite.Presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IProductWriteProps } from "./ProductWrite.Types";
import {
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  UPLOAD_IMAGES,
} from "./ProductWrite.Queries";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { useEffect, useRef, useState } from "react";
import { checkValidationImage } from "../../../../commons/libraries/checkValidationImage";

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
  const [updateProduct] = useMutation(UPDATE_PRODUCT);

  // 이미지 파일 업로드 api,ref,state
  const [uploadImages] = useMutation(UPLOAD_IMAGES);
  const [mainImageSrc, setMainImageSrc] = useState("");
  const [files, setFiles] = useState(undefined);
  const imageRef = useRef(null);

  const { register, handleSubmit, formState, setValue, trigger, reset } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  useEffect(() => {
    reset({
      name: props.data?.fetchProduct.name,
      price: props.data?.fetchProduct.price,
      summary: props.data?.fetchProduct.description,
      contents: props.data?.fetchProduct.contentSrc,
    });
  }, [props.data]);

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickCreateProduct = async (data) => {
    const resultUploadFile = await uploadImages({
      variables: { files: [files] },
    });

    console.log(resultUploadFile);
    try {
      const result = await createProduct({
        variables: {
          productInput: {
            name: data.name,
            price: data.price,
            description: data.summary,
            contentSrc: data.contents,
            mainImgSrc: "",
            subImgSrcs: [],
          },
        },
      });
      console.log(result);
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

  const onClickUpdateProduct = async (data) => {
    try {
      const updateProductInput = {};

      if (data.name) updateProductInput.name = data.name;
      if (data.price) updateProductInput.price = data.price;
      if (data.summary) updateProductInput.description = data.summary;
      if (data.contents) updateProductInput.contentSrc = data.contents;

      const result = await updateProduct({
        variables: {
          productId: props.data?.fetchProduct.id,
          updateProductInput,
        },
      });
      Modal.success({
        content: "상품이 수정되었습니다.",
      });
      onClickMoveToPage(`/products/${result.data.updateProduct.id}`)();
    } catch (error) {
      Modal.error({
        content: error.message,
      });
    }
  };

  // 업로드 미해결
  const onClickUpload = () => {
    imageRef.current?.click();
  };
  const onChangeMainImg = async (event) => {
    const file = event.target.files?.[0];
    const isValid = checkValidationImage(file);
    if (!isValid) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        setMainImageSrc(data.target?.result);
        setFiles(file);
      }
    };
  };

  return (
    <ProductWriteUI
      data={props.data}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeContents={onChangeContents}
      onChangeMainImg={onChangeMainImg}
      onClickUpload={onClickUpload}
      mainImageSrc={mainImageSrc}
      imageRef={imageRef}
      isEdit={props.isEdit}
      onClickCreateProduct={onClickCreateProduct}
      onClickUpdateProduct={onClickUpdateProduct}
    />
  );
}
