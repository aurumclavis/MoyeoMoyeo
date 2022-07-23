import { useQuery } from "@apollo/client";
// import { useRouter } from "next/router";
import BoardListContainer from "../../src/components/units/boards/boardList/BoardList.container";
import {
  FETCH_BOARDS,
  FETCH_LOGIN_USER,
} from "../../src/components/units/boards/boardList/BoardList.queries";

export default function BoardListPage() {
  // const router = useRouter();
  const { data: userData, loading: userLoading } = useQuery(FETCH_LOGIN_USER);
  const { data: rawData, loading } = useQuery(FETCH_BOARDS, {
    variables: {
      page: 1,
      // pageSize: 10,
    },
  });
  console.log("aa", userData?.fetchLoginUser.id);
  console.log("bb", rawData?.fetchBoards[0].writer.id);
  return loading ? (
    ""
  ) : userLoading ? (
    ""
  ) : (
    <BoardListContainer rawData={rawData} userData={userData} />
  );
}
