import BoardWriteContainer from "../../../../src/components/units/boards/board/boardWrite/BoardWrite.container";
import { FETCH_BOARD } from "../../../../src/components/units/boards/board/boardDetail/BoardDetail.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });
  return <BoardWriteContainer isEdit={true} data={data} />;
}
