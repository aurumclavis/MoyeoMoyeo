import { FETCH_BOARD } from "../../../../../src/components/units/boards/board/boardDetail/BoardDetail.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardGeneralWriteContainer from "../../../../../src/components/units/boards/board/boardWrite/boardGeneral/BoardGeneralWrite.container";

export default function BoardEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  return <BoardGeneralWriteContainer isEdit={true} data={data} />;
}
