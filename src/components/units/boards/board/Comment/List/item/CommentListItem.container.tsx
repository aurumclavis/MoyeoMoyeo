import * as S from "../CommentList.styles";
import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import { getDate } from "../../../../../../commons/getDate";
import {
  DELETE_COMMENT,
  FETCH_COMMENT,
} from "../../Write/CommentWrite.queries";
import CommentChildrenWriteContainer from "./children/Write/CommentChildrenWrite.container";
import CommentChildrenListContainer from "./children/List/CommentChildrenList.container";
import { ICommentListItemsContainerProps } from "../../Comment.types";

export default function CommentListItemsContainer(
  props: ICommentListItemsContainerProps
) {
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
            query: FETCH_COMMENT,
            variables: { boardId: props.el.id },
          },
        ],
      });
      Modal.success({ content: "댓글이 삭제되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onClickReplyBoardComment = () => {
    if (!props.userData?.fetchLoginUser.id) {
      Modal.error({ content: "댓글을 달려면 로그인이 필요합니다." });
      return;
    }
    setIsReply((prev) => !prev);
  };

  return (
    <S.Wrapper>
      <S.CommentsWrapper isChild={false}>
        <S.UpperWrapper>
          <S.UpperLeft>
            <S.CommentsWriter>{props.el.writer.name}</S.CommentsWriter>
            <S.CreatedAt>{getDate(props.el.createdAt)}</S.CreatedAt>
          </S.UpperLeft>
          <S.UpperRight>
            <S.MyReply onClick={onClickReplyBoardComment} />
            {props.userData?.fetchLoginUser.id === props.el.writer.id && (
              <S.MyDeleteIcon onClick={onClickDeleteComment} />
            )}
          </S.UpperRight>
        </S.UpperWrapper>
        <S.UnderWrapper>
          <S.Contents>{props.el.content}</S.Contents>
        </S.UnderWrapper>
      </S.CommentsWrapper>
      <CommentChildrenListContainer childCommentData={childCommentData} />
      {isReply && (
        <CommentChildrenWriteContainer
          setIsReply={setIsReply}
          parentId={props.el.id}
          refetch={props.refetch}
        />
      )}
    </S.Wrapper>
  );
}
