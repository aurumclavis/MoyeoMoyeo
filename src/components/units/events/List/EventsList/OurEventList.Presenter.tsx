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
          <InfiniteScroll
            pageStart={0}
            loadMore={props.loadFunc}
            hasMore={true}
          >
            {props.data?.fetchPosts.map(el => (
              <OurEventListUIAdd
                // data={props.data?.fetchPosts}
                key={el._id}
                el={el}
                onClickMoveToPage={props.onClickMoveToPage}
              />
            ))}
          </InfiniteScroll>
        </S.InsideWrapper>
      </S.Wrapper>
    </>
  );
}
