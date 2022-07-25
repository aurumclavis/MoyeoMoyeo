import CommentChildrenWritePresenter from "./CommentChildrenWrite.presenter";
import { useForm } from "react-hook-form";
import { CREATE_BOARD_COMMENT } from "../../../../Write/CommentWrite.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { ICommentChildrenWriteContainerProps } from "../../../../Comment.types";

export default function CommentChildrenWriteContainer(
  props: ICommentChildrenWriteContainerProps
) {
  const router = useRouter();
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const { register, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });
  const onClickCreateBoardComment = async (data: any) => {
    try {
      await createBoardComment({
        variables: {
          commentInput: {
            content: data.content,
            parentId: props.parentId,
          },
          boardId: router.query.boardId,
        },
      });
      Modal.success({ content: "댓글이 등록되었습니다." });
      props.refetch();
      setValue("content", "");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
    props.setIsReply((prev: boolean) => !prev);
  };

  return (
    <CommentChildrenWritePresenter
      register={register}
      handleSubmit={handleSubmit}
      onClickCreateBoardComment={onClickCreateBoardComment}
    />
  );
}
