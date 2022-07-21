import { useQuery } from "@apollo/client";
import { useState } from "react";
import ProductsAnswerList from "../../../answer/list/ProductsAnswerList.Container";
import ProductsAnswerWrite from "../../../answer/write/ProductsAnswerWrite.Container";
import { FETCH_COMMENT } from "../ProductsQuestionList.Queries";
import * as S from "./ProductsQuestionListItem.Style";
interface ProductsQuestionListItemProps {
  el: any;
}

export default function ProductsQuestionListItem(
  props: ProductsQuestionListItemProps
) {
  const [isActiveAnswer, setIsActiveAnswer] = useState(false);
  const onClickActiveAnswer = () => {
    setIsActiveAnswer((prev) => !prev);
  };
  const { data } = useQuery(FETCH_COMMENT, {
    variables: {
      commentId: props.el.id,
    },
  });

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
          <S.DeleteIcon />
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
