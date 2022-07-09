import * as S from "./ProductsAnswerList.Styles";
export default function ProductsAnswerList() {
  return (
    <S.ItemWrapper>
      <S.SubDirectoryWrapper>
        <S.SubDirectoryIcon />
      </S.SubDirectoryWrapper>
      <S.ContentsWrapper>
        <S.Text>판매자</S.Text>
        <S.Date>2022-07-02</S.Date>
        <S.Contents>
          답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 답변 내용입니다.
          답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 답변 내용입니다.
          답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 답변 내용입니다.
          답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 답변 내용입니다.
          답변 내용입니다. 답변 내용입니다.답변 내용입니다. 답변 내용입니다. 답
        </S.Contents>
      </S.ContentsWrapper>
      <S.IconWrapper>
        <S.ReplyIcon />
        <S.DeleteIcon />
      </S.IconWrapper>
    </S.ItemWrapper>
  );
}
