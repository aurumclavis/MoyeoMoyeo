import { ICommentWritePresenterProps } from "../Comment.types";
import * as S from "./CommentWrite.styles";

export default function CommentWritePresenter(
  props: ICommentWritePresenterProps
) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickCreateBoardComment)}>
      <S.CommentInput
        {...props.register("content")}
        placeholder="댓글로 동행관련 질문을 시작해보세요!"
      />
      <S.SubmitButton type="submit">댓글 등록하기</S.SubmitButton>
    </S.Wrapper>
  );
}
