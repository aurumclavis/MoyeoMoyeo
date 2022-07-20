import { useState } from "react";
import ProductsAnswerList from "../../../answer/list/ProductsAnswerList.Container";
import ProductsAnswerWrite from "../../../answer/write/ProductsAnswerWrite.Container";
import * as S from "./ProductsQuestionListItem.Style";

export default function ProductsQuestionListItem(props) {
  const [isActiveAnswer, setIsActiveAnswer] = useState(false);
  const onClickActiveAnswer = () => {
    setIsActiveAnswer((prev) => !prev);
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
          <S.DeleteIcon />
        </S.IconWrapper>
      </S.ItemWrapper>
      {isActiveAnswer && <ProductsAnswerWrite />}
      <ProductsAnswerList
        child={props.el.children}
        onClickActiveAnswer={onClickActiveAnswer}
      />
    </>
  );
}
