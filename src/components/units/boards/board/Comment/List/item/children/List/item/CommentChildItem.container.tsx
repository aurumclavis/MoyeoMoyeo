import * as S from "../../../../CommentList.styles";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { getDate } from "../../../../../../../../../commons/getDate";
import {
  DELETE_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "../../../../../Write/CommentWrite.queries";

export default function CommentChildItem(props: any) {
  const router = useRouter();
  const [deleteComment] = useMutation(DELETE_COMMENT);
  const onClickDeleteComment = async () => {
    try {
      await deleteComment({
        variables: {
          commentId: props.el.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      Modal.success({ content: "댓글이 삭제되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <S.CommentsWrapper>
      <S.UpperWrapper>
        <S.UpperLeft>
          <S.CommentsWriter>{props.el.writer.name}</S.CommentsWriter>
          <S.CreatedAt>{getDate(props.el.createdAt)}</S.CreatedAt>
        </S.UpperLeft>
        <S.UpperRight>
          <S.MyReply onClick={props.onClickReplyBoardComment} />
          <S.MyDeleteIcon onClick={onClickDeleteComment} />
        </S.UpperRight>
      </S.UpperWrapper>
      <S.UnderWrapper>
        <S.Contents>{props.el.content}</S.Contents>
      </S.UnderWrapper>
    </S.CommentsWrapper>
  );
}
