import * as S from "./CommentList.styles";
import { v4 as uuidv4 } from "uuid";
import CommentListItemsContainer from "./item/CommentListItem.container";
import { FETCH_BOARD_COMMENTS } from "../Write/CommentWrite.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function CommentListContainer(props: any) {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  return (
    <S.Wrapper>
      {data?.fetchBoardComments.map((el: any) => (
        <CommentListItemsContainer key={uuidv4} el={el} />
      ))}
    </S.Wrapper>
  );
}
