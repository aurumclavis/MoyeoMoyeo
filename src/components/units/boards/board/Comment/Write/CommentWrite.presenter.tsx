import * as S from "./CommentWrite.styles";

export default function CommentWritePresenter() {
  return (
    <S.Wrapper>
      <S.CommentInput />
      <S.SubmitButton>등록</S.SubmitButton>
    </S.Wrapper>
  );
}
