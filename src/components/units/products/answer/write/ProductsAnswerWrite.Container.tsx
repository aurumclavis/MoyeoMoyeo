import ProductsAnswerWriteUI from "./ProductsAnswerWrite.Presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CREATE_PRODUCT_COMMENT } from "../../question/write/ProductsQuestionWrite.Queries";
import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { FETCH_COMMENT } from "../../question/list/ProductsQuestionList.Queries";
import { ProductsAnswerWriteProps } from "./ProductsAnswerWrite.Types";
const schema = yup.object({
  content: yup.string().required(),
});

export default function ProductsAnswerWrite(props: ProductsAnswerWriteProps) {
  const router = useRouter();
  const [createProductComment] = useMutation(CREATE_PRODUCT_COMMENT);
  const [created, setCreated] = useState(false);

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    reset({ content: "" });
  }, [created]);

  const onClickCreateComment = async (data: any) => {
    try {
      await createProductComment({
        variables: {
          commentInput: {
            content: data.content,
            parentId: props.id,
          },
          productId: router.query.productId,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT,
            variables: { commentId: props.id },
          },
        ],
      });
      Modal.success({
        content: "답변이 등록되었습니다.",
      });
      props.setIsActiveAnswer(false);
      setCreated(true);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <ProductsAnswerWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickCreateComment={onClickCreateComment}
    />
  );
}
