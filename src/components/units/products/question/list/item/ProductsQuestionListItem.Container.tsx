import { useState } from "react";
import ProductsAnswerList from "../../../answer/list/ProductsAnswerList.Container";
import ProductsAnswerWrite from "../../../answer/write/ProductsAnswerWrite.Container";
import * as S from "./ProductsQuestionListItem.Style";

export default function ProductsQuestionListItem() {
  const [isActiveAnswer, setIsActiveAnswer] = useState(false);
  const onClickActiveAnswer = () => {
    setIsActiveAnswer((prev) => !prev);
  };
  return (
    <>
      <S.ItemWrapper>
        <S.ContentsWrapper>
          <S.Text>작성자</S.Text>
          <S.Date>2022-07-01</S.Date>
          <S.Contents>
            문의 내용입니다. 문의 내용입니다. 문의 내용입니다. 문의 내용입니다.
            문의 내용입니다. 문의 내용입니다. 문의 내용입니다. 문의 내용입니다.
            문의 내용입니다. 문의 내용입니다. 문의 내용입니다. 문의 내용입니다.
            문의 내용입니다. 문의 내용입니다. 문의 내용입니다. 문의 내용입니다.
            문의 내용입니다.문의 내용입니다. 문의 내용입니다. 문의 내용입니다.
            문
          </S.Contents>
        </S.ContentsWrapper>
        <S.IconWrapper>
          <S.ReplyIcon onClick={onClickActiveAnswer} />
          <S.DeleteIcon />
        </S.IconWrapper>
      </S.ItemWrapper>
      {isActiveAnswer && <ProductsAnswerWrite />}
      <ProductsAnswerList onClickActiveAnswer={onClickActiveAnswer} />
    </>
  );
}
