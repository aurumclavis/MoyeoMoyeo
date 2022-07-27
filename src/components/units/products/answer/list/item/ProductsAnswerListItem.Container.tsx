import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { getDate } from "../../../../../commons/getDate";
import {
  DELETE_COMMENT,
  FETCH_COMMENT,
  FETCH_PRODUCT_COMMENTS,
} from "../../../question/list/ProductsQuestionList.Queries";
import * as S from "../ProductsAnswerList.Styles";
import { IProductsAnswerListItemProps } from "../ProductsAnswerList.Types";

export default function ProductsAnswerListItem(
  props: IProductsAnswerListItemProps
) {
  const { data } = useQuery(FETCH_COMMENT, {
    variables: {
      commentId: props.el.id,
    },
  });
  const [deleteComment] = useMutation(DELETE_COMMENT);
  const router = useRouter();

  const onClickDeleteComment = async () => {
    try {
      await deleteComment({
        variables: {
          commentId: props.el.id,
        },
        refetchQueries: [
          {
            query: FETCH_PRODUCT_COMMENTS,
            variables: { productId: router.query.productId, pageSize: 10 },
          },
        ],
      });
      Modal.success({
        content: "답변이 삭제되었습니다.",
      });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Unauthorized") {
          Modal.error({ content: "로그인이 필요합니다." });
        } else {
          Modal.error({ content: error.message });
        }
      }
    }
  };
  return (
    <>
      <S.ItemWrapper key={props.el.id}>
        <S.SubDirectoryWrapper>
          <S.SubDirectoryIcon />
        </S.SubDirectoryWrapper>
        <S.ContentsWrapper>
          <S.Text>
            {data?.fetchComment.writer.name ||
              `담당자(${data?.fetchComment.writer.manager})`}
          </S.Text>

          <S.Date>{getDate(props.el.createdAt)}</S.Date>
          <S.Contents>{props.el.content}</S.Contents>
        </S.ContentsWrapper>
        <S.IconWrapper>
          <S.ReplyIcon onClick={props.onClickActiveAnswer} />
          <S.DeleteIcon onClick={onClickDeleteComment} />
        </S.IconWrapper>
      </S.ItemWrapper>
    </>
  );
}
