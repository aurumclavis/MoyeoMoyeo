import * as S from "../../../../CommentList.styles";
import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { getDate } from "../../../../../../../../../commons/getDate";
import {
  FETCH_COMMENT,
  DELETE_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "../../../../../Write/CommentWrite.queries";
import { FETCH_LOGIN_USER } from "../../../../../../boardDetail/BoardDetail.queries";
import { useState } from "react";
import CommentChildrenChildrenWriteContainer from "./CommentChildChildWrite.container";
import { ICommentChildItemProps } from "../../../../../Comment.types";

export default function CommentChildItem(props: ICommentChildItemProps) {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_COMMENT, {
    variables: {
      commentId: props.el.id,
    },
  });
  const { data: userData } = useQuery(FETCH_LOGIN_USER);
  const [deleteComment] = useMutation(DELETE_COMMENT);
  const [isReplyChild, setIsReplyChild] = useState(false);

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
    if (!userData?.fetchLoginUser.id) {
      Modal.error({ content: "댓글을 달려면 로그인이 필요합니다." });
      return;
    }
    setIsReplyChild((prev) => !prev);
  };

  return (
    <S.Wrapper>
      <S.CommentsWrapper isChild={true}>
        <S.UpperWrapper>
          <S.UpperLeft>
            <S.CommentsWriter>
              {data?.fetchComment.writer?.name}
            </S.CommentsWriter>
            <S.CreatedAt>{getDate(props.el.createdAt)}</S.CreatedAt>
          </S.UpperLeft>
          <S.UpperRight>
            <S.MyReply onClick={onClickReplyBoardComment} />
            {userData?.fetchLoginUser.id === data?.fetchComment.writer.id && (
              <S.MyDeleteIcon onClick={onClickDeleteComment} />
            )}
          </S.UpperRight>
        </S.UpperWrapper>
        <S.UnderWrapper>
          <S.Contents>{props.el.content}</S.Contents>
        </S.UnderWrapper>
      </S.CommentsWrapper>
      {isReplyChild && (
        <CommentChildrenChildrenWriteContainer
          parentId={data?.fetchComment.parent.id}
          refetch={refetch}
          setIsReplyChild={setIsReplyChild}
        />
      )}
    </S.Wrapper>
  );
}
