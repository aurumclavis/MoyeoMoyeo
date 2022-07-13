import * as S from "./BoardList.styles";
import UnevenSetsFinite from "../boardList/carousel/BoardListCarousel";
import { v4 as uuidv4 } from "uuid";
import BackTopAnt from "../../../commons/backTop";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardListPresenter(props: any) {
  return (
    <S.Wrapper>
      <S.SubHeader
        ref={props.subHeader}
        isSubHeaderOnTop={props.isSubHeaderOnTop}
      >
        <S.ViewTypeWrapper>
          <S.ViewTotal
            onClick={props.onClickViewTotal}
            selectTotal={props.selectTotal}
          >
            <div>전체보기</div>
          </S.ViewTotal>
          <S.ViewRecruitment
            onClick={props.onClickViewRecruitment}
            selectRecruit={props.selectRecruit}
          >
            <div>모집중보기</div>
          </S.ViewRecruitment>
          <S.ViewAccompany
            onClick={props.onClickViewAccompany}
            selectAccompany={props.selectAccompany}
          >
            <div>신청보기</div>
          </S.ViewAccompany>
        </S.ViewTypeWrapper>
        <S.SearchAndCreateWrapper>
          <S.ViewAsSearch>
            <S.EventSearchWrapper>
              <S.MySearchIcon />
              <S.EventSearchInput placeholder="행사이름으로 검색해보세요!" />
            </S.EventSearchWrapper>
          </S.ViewAsSearch>
          <S.CreateBoard onClick={props.onClickCreateBoard}>
            글쓰기
          </S.CreateBoard>
        </S.SearchAndCreateWrapper>
      </S.SubHeader>
      <S.EventTypeWrapper>
        <S.CarouselWrapper>
          <UnevenSetsFinite
            eventCategory={props.eventCategory}
            viewTypeData={props.viewTypeData}
            setCategoryData={props.setCategoryData}
          />
        </S.CarouselWrapper>
      </S.EventTypeWrapper>
      <S.Main>
        <S.DateWrapper>
          <S.DateChangerWrapper>
            <S.ArrowButton>
              {!props.isWeekly ? (
                <S.ArrowLeft src="/icon/double_arrow_left.png" />
              ) : (
                <S.ArrowLeft src="/icon/arrow_left.png" />
              )}
            </S.ArrowButton>
            <S.DateView>
              <S.DateStart>2022년 7월 1일</S.DateStart>~
              <S.DateEnd>2022년 7월 31일</S.DateEnd>
            </S.DateView>
            <S.ArrowButton>
              {!props.isWeekly ? (
                <S.ArrowRight src="/icon/double_arrow_right.png" />
              ) : (
                <S.ArrowRight src="/icon/arrow_right.png" />
              )}
            </S.ArrowButton>
          </S.DateChangerWrapper>
          {!props.isWeekly ? (
            <S.WeeklyViewButton onClick={props.onClickWeeklyMonthly}>
              주 단위 이동
            </S.WeeklyViewButton>
          ) : (
            <S.MonthlyViewButton onClick={props.onClickWeeklyMonthly}>
              월 단위 이동
            </S.MonthlyViewButton>
          )}
        </S.DateWrapper>
        <InfiniteScroll pageStart={0} loadMore={props.loadFunc} hasMore={true}>
          <S.ListWrapper>
            {props.data.map((el: any) => (
              <S.Item
                key={uuidv4()}
                onClick={props.onClickGoDetail(el.eventName)}
              >
                <S.ItemLeft>
                  <S.EventImage src="/market.jpg" />
                  <S.ItemMain>
                    <S.Header>
                      <S.Recruitment recruited={el.recruited}>
                        {el.recruited ? "[모집완료]" : "[모집중]"}
                      </S.Recruitment>
                      <S.Title>{el.title}</S.Title>
                    </S.Header>
                    <S.Remark>{el.remark}</S.Remark>
                    <S.Footer>
                      <S.Event>
                        <S.EventIcon />
                        {el.eventName}
                      </S.Event>
                      <S.Category>
                        <S.CategoryIcon />
                        {el.category}
                      </S.Category>
                      <S.MaxHeadCount>
                        <S.MaxHeadCountIcon />
                        {el.maxHeadCount}명
                      </S.MaxHeadCount>
                      <S.AccompanyDate>
                        <S.CalendarIcon />
                        {el.accompanyDate.start} ~ {el.accompanyDate.end}
                      </S.AccompanyDate>
                    </S.Footer>
                  </S.ItemMain>
                </S.ItemLeft>
                <S.ItemRight requested={el.requested}>
                  {el.requested ? (
                    <S.PaperPlaneImage src="/icon/symbollogo_removebg.png" />
                  ) : (
                    <S.PaperPlaneImage src="/icon/simbollogo.png" />
                  )}
                </S.ItemRight>
              </S.Item>
            ))}
          </S.ListWrapper>
        </InfiniteScroll>
        <BackTopAnt />
      </S.Main>
    </S.Wrapper>
  );
}
