import * as S from "./OurEventList.Styles";
// import InfiniteScroll from "react-infinite-scroller";
// import OurEventListUIAdd from "./OurEventList.PresenterAdd";
import { IOurEventListUI } from "./OurEventList.Types";
import DOMPurify from "dompurify";
// import Pagination01 from "../../../../commons/pagination/01/Pagination01.Container";
import { getDate } from "../../../../commons/getDate";
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
          {props.data?.fetchPosts?.map((el: any) => (
            <S.ListWrapper key={el._id}>
              <S.ListImg src="/배너이미지_동행1.png" />
              <S.FlexWrapper>
                <S.Title>{el.title}</S.Title>
                <S.Period>
                  {getDate(el.dateStart)} ~ {getDate(el.dateEnd)}
                </S.Period>
                {typeof window !== "undefined" && (
                  <S.ContentsWrapper
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(el.description),
                    }}
                  />
                )}
                <S.FooterWrapper>
                  <S.CounterWrapper>
                    <S.Counter>조회수 {el.viewCount}</S.Counter>
                    <S.Counter>좋아요 {el.likedUsers?.length || 0}</S.Counter>
                  </S.CounterWrapper>
                  <S.Btn onClick={props.onClickMoveToPage(`events/${el.id}`)}>
                    자세히보기
                  </S.Btn>
                </S.FooterWrapper>
              </S.FlexWrapper>
            </S.ListWrapper>
          ))}
        </S.InsideWrapper>
      </S.Wrapper>
    </>
  );
}
