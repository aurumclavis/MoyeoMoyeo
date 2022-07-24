import * as S from "../../../../Write/CommentWrite.styles";

export default function CommentWritePresenter(props: any) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickCreateBoardComment)}>
      <S.CommentInput {...props.register("content")} />
      <S.SubmitButton type="submit">댓글 등록하기</S.SubmitButton>
    </S.Wrapper>
  );
}
