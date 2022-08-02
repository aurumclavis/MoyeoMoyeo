import * as S from "./festivalList.Styles";
// import InfiniteScroll from "react-infinite-scroller";
import FestivalListUIAdd from "./FestivalList.PresenterAdd";
import { IFestivalListUI } from "./FestivalList.Types";

export default function FestivalListUI(props: IFestivalListUI) {
  return (
    <>
      {" "}
      <S.InsideWrapper>
        <S.Wrapper>
          <S.Select>
            <option>등록 순</option>
            <option>예정된 행사</option>
            <option>종료된 행사</option>
          </S.Select>

          {/* <InfiniteScroll
            pageStart={0}
            loadMore={props.ToloadFunc}
            hasMore={true}
          > */}
          {props.data?.fetchEvents.map((el: any) => (
            <FestivalListUIAdd key={el._id} el={el} />
          ))}
          {/* </InfiniteScroll> */}
        </S.Wrapper>{" "}
      </S.InsideWrapper>
    </>
  );
}
