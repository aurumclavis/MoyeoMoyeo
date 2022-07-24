import * as S from "../CommentList.styles";
import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { getDate } from "../../../../../../commons/getDate";
import {
  DELETE_COMMENT,
  FETCH_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "../../Write/CommentWrite.queries";
import CommentChildrenWriteContainer from "./children/Write/CommentChildrenWrite.container";
import CommentChildrenListContainer from "./children/List/CommentChildrenList.container";

export default function CommentListItemsContainer(props: any) {
  const router = useRouter();
  const [isReply, setIsReply] = useState(false);
  const { data: childCommentData } = useQuery(FETCH_COMMENT, {
    variables: { commentId: props.el.id },
  });

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
  const onClickReplyBoardComment = () => {
    setIsReply((prev) => !prev);
  };
  // console.log("aaa", , props.el.createdAt);
  return (
    <>
      <S.CommentsWrapper>
        <S.UpperWrapper>
          <S.UpperLeft>
            <S.CommentsWriter>{props.el.writer.name}</S.CommentsWriter>
            <S.CreatedAt>{getDate(props.el.createdAt)}</S.CreatedAt>
          </S.UpperLeft>
          <S.UpperRight>
            <S.MyReply onClick={onClickReplyBoardComment} />
            <S.MyDeleteIcon onClick={onClickDeleteComment} />
          </S.UpperRight>
        </S.UpperWrapper>
        <S.UnderWrapper>
          <S.Contents>{props.el.content}</S.Contents>
        </S.UnderWrapper>
      </S.CommentsWrapper>
      <CommentChildrenListContainer childCommentData={childCommentData} />
      {isReply && (
        <CommentChildrenWriteContainer
          onClickReplyBoardComment={onClickReplyBoardComment}
          id={props.el.id}
        />
      )}
    </>
  );
}
