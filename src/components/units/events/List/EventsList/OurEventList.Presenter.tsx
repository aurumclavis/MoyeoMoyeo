import * as S from "./OurEventList.Styles";
import InfiniteScroll from "react-infinite-scroller";
import OurEventListUIAdd from "./OurEventList.PresenterAdd";

export default function OurEventListUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.Select>
          <option>등록 순</option>
          <option>인기 순</option>
          <option>날짜 순</option>
        </S.Select>
        <S.InsideWrapper>
          {/* <InfiniteScroll
            pageStart={0}
            loadMore={props.loadFunc}
            hasMore={true}
          > */}
          {props.data?.fetchPosts.map(el => (
            <OurEventListUIAdd
              key={el.id}
              el={el}
              onClickMoveToPage={props.onClickMoveToPage}
            />
          ))}
          {/* </InfiniteScroll> */}
          {/* 페이지 나오면 페이지네이션을 해야할것같ㅎ 아니면 사이즈를 길게 해서 인피니티 스크롤  */}
        </S.InsideWrapper>
      </S.Wrapper>
    </>
  );
}
