import * as S from "./CommentWrite.styles";

export default function CommentWritePresenter() {
  return (
    <S.Wrapper>
      <S.CommentInput />
      <S.SubmitButton>댓글 등록하기</S.SubmitButton>
    </S.Wrapper>
  );
}
