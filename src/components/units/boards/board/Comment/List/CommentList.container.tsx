import * as S from "./CommentList.styles";
import CommentListItemsContainer from "./item/CommentListItem.container";
import { FETCH_BOARD_COMMENTS } from "../Write/CommentWrite.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ICommentListContainerProps } from "../Comment.types";

export default function CommentListContainer(
  props: ICommentListContainerProps
) {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });
  return (
    <S.WrapperForReverse>
      {data?.fetchBoardComments.map((el: any) => (
        <CommentListItemsContainer
          key={el.id}
          el={el}
          userData={props.userData}
          refetch={refetch}
        />
      ))}
    </S.WrapperForReverse>
  );
}
