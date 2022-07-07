import * as S from "./CommentList.styles";

export default function CommentListItemsContainer(props: any) {
  return (
    <S.CommentsWrapper>
      <S.UpperWrapper>
        <S.UpperLeft>
          <S.CommentsWriter>{props.el.writer}</S.CommentsWriter>
          <S.CreatedAt>{props.el.createdAt}</S.CreatedAt>
        </S.UpperLeft>
        <S.UpperRight>
          <S.MyEditIcon />
          <S.MyDeleteIcon />
        </S.UpperRight>
      </S.UpperWrapper>
      <S.UnderWrapper>
        <S.Contents>{props.el.contents}</S.Contents>
      </S.UnderWrapper>
    </S.CommentsWrapper>
  );
}
