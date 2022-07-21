import * as S from "./OurEventList.Styles";
// import InfiniteScroll from "react-infinite-scroller";
import OurEventListUIAdd from "./OurEventList.PresenterAdd";
import { IOurEventListUI } from "./OurEventList.Types";
// import Pagination01 from "../../../../commons/pagination/01/Pagination01.Container";

export default function OurEventListUI(props: IOurEventListUI) {
  return (
    <>
      <S.Wrapper>
        <S.Select>
          <option>등록 순</option>
          <option>인기 순</option>
          <option>날짜 순</option>
        </S.Select>
        <S.InsideWrapper>
          {props.data?.fetchPosts.map((el: any) => (
            <OurEventListUIAdd key={el.id} el={el} />
          ))}
          {/* <Pagination01 refetch={props.refetch} count={props.count} />
        <S.Button onClick={}></S.Button> */}
          {/* 페이지 나오면 페이지네이션을 해야할것같ㅎ 아니면 사이즈를 길게 해서 인피니티 스크롤  */}
        </S.InsideWrapper>
      </S.Wrapper>
    </>
  );
}
