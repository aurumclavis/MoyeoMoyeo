import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductsAnswerList from "../../../answer/list/ProductsAnswerList.Container";
import ProductsAnswerWrite from "../../../answer/write/ProductsAnswerWrite.Container";
import {
  DELETE_COMMENT,
  FETCH_COMMENT,
  FETCH_PRODUCT_COMMENTS,
} from "../ProductsQuestionList.Queries";
import * as S from "./ProductsQuestionListItem.Style";
interface ProductsQuestionListItemProps {
  el: any;
}

export default function ProductsQuestionListItem(
  props: ProductsQuestionListItemProps
) {
  const router = useRouter();
  const [isActiveAnswer, setIsActiveAnswer] = useState(false);
  const onClickActiveAnswer = () => {
    setIsActiveAnswer((prev) => !prev);
  };
  const { data } = useQuery(FETCH_COMMENT, {
    variables: {
      commentId: props.el.id,
    },
  });
  const [deleteComment] = useMutation(DELETE_COMMENT);
  const onClickDeleteComment = async () => {
    try {
      await deleteComment({
        variables: {
          commentId: props.el.id,
        },
        refetchQueries: [
          {
            query: FETCH_PRODUCT_COMMENTS,
            variables: { productId: router.query.productId },
          },
        ],
      });
      Modal.success({
        content: "문의가 삭제되었습니다.",
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <>
      <S.ItemWrapper>
        <S.ContentsWrapper>
          <S.Text>작성자{props.el.id}</S.Text>
          <S.Date>{props.el.createdAt}</S.Date>
          <S.Contents>{props.el.content}</S.Contents>
        </S.ContentsWrapper>
        <S.IconWrapper>
          <S.ReplyIcon onClick={onClickActiveAnswer} />
          <S.DeleteIcon onClick={onClickDeleteComment} />
        </S.IconWrapper>
      </S.ItemWrapper>
      <ProductsAnswerList
        data={data}
        onClickActiveAnswer={onClickActiveAnswer}
      />
      {isActiveAnswer && (
        <ProductsAnswerWrite
          setIsActiveAnswer={setIsActiveAnswer}
          id={props.el.id}
        />
      )}
    </>
  );
}
