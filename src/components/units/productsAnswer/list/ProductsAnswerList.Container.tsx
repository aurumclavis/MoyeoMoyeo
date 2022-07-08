import * as S from "./ProductsAnswerList.Styles";
export default function ProductsAnswerList() {
  return (
    <S.ItemWrapper>
      <S.SubDirectoryWrapper>
        <S.SubDirectoryIcon />
      </S.SubDirectoryWrapper>
      <S.ContentsWrapper>
        <S.WriterWrapper>
          <S.Text>작성자</S.Text>
          <S.Text>{String(new Date())}</S.Text>
        </S.WriterWrapper>
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
