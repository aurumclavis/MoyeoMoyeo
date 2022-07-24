import CommentWritePresenter from "./CommentWrite.presenter";
import { useForm } from "react-hook-form";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./CommentWrite.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { ICommentWriteContainerProps } from "../Comment.types";

export default function CommentWriteContainer(
  props: ICommentWriteContainerProps
) {
  const router = useRouter();
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const { register, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });

  const onClickCreateBoardComment = async (data: any) => {
    if (!props.userData) {
      Modal.error({ content: "댓글을 등록하려면 로그인이 필요합니다!" });
    } else {
      try {
        await createBoardComment({
          variables: {
            commentInput: {
              content: data.content,
            },
            boardId: router.query.boardId,
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.boardId },
            },
          ],
        });
        Modal.success({ content: "댓글이 등록되었습니다." });
        setValue("content", "");
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    }
  };

  return (
    <CommentWritePresenter
      register={register}
      handleSubmit={handleSubmit}
      onClickCreateBoardComment={onClickCreateBoardComment}
    />
  );
}
