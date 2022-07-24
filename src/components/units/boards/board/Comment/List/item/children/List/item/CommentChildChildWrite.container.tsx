import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "../../../../../Write/CommentWrite.queries";
import * as S from "../../../../../Write/CommentWrite.styles";

export default function CommentChildrenChildrenWriteContainer(props: any) {
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
    props.onClickReplyBoardComment();
  };
  return (
    <S.Wrapper onSubmit={handleSubmit(onClickCreateBoardComment)}>
      <S.CommentInput {...register("content")} />
      <S.SubmitButton type="submit">댓글 등록하기</S.SubmitButton>
    </S.Wrapper>
  );
}
