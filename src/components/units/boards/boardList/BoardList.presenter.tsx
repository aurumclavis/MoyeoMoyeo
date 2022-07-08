import * as S from "./BoardList.styles";
import UnevenSetsFinite from "../boardList/carousel/BoardListCarousel";
import { v4 as uuidv4 } from "uuid";

export default function BoardListPresenter(props: any) {
  return (
    <S.Wrapper>
      {/* <S.CreateBoardButton onClick={props.onClickAddItem}>
        +
      </S.CreateBoardButton> */}
      <S.EventTypeWrapper>
        <S.CarouselWrapper>
          <UnevenSetsFinite eventCategory={props.eventCategory} />
        </S.CarouselWrapper>
      </S.EventTypeWrapper>
      <S.MainWrapper>
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
            <div>동행보기</div>
          </S.ViewAccompany>
          <S.ViewBySearch>
            <S.EventSearchWrapper>
              <S.MySearchIcon />
              <S.EventSearchInput placeholder="행사이름" />
            </S.EventSearchWrapper>
          </S.ViewBySearch>
        </S.ViewTypeWrapper>
        <S.Main>
          <S.DateWrapper>
            <S.DateChangerWrapper>
              <S.ArrowButton>
                <S.ArrowLeft src="/icon/double_arrow_left.png" />
                {/* <S.ArrowLeft src="/icon/arrow_left.png" /> */}
              </S.ArrowButton>
              <S.DateView>
                <S.DateStart>2022년 7월 1일</S.DateStart>~
                <S.DateEnd>2022년 7월 31일</S.DateEnd>
              </S.DateView>
              <S.ArrowButton>
                <S.ArrowRight src="/icon/double_arrow_right.png" />
                {/* <S.ArrowRight src="/icon/arrow_right.png" /> */}
              </S.ArrowButton>
            </S.DateChangerWrapper>
            <S.WeeklyViewButton>주 단위 이동</S.WeeklyViewButton>
            {/* <S.MonthlyViewButton>월 단위 이동</S.MonthlyViewButton> */}
          </S.DateWrapper>
          <S.ViewTypeMobileWrapper>
            <S.ViewTypeMobile>
              <S.ViewTotal
                onClick={props.onClickViewTotal}
                selectTotal={props.selectTotal}
              >
                전체보기
              </S.ViewTotal>
              <S.ViewRecruitment
                onClick={props.onClickViewRecruitment}
                selectRecruit={props.selectRecruit}
              >
                모집중보기
              </S.ViewRecruitment>
              <S.ViewAccompany
                onClick={props.onClickViewAccompany}
                selectAccompany={props.selectAccompany}
              >
                동행보기
              </S.ViewAccompany>
            </S.ViewTypeMobile>
            <S.MySearchIconWrapper>
              <S.MySearchIcon />
            </S.MySearchIconWrapper>
          </S.ViewTypeMobileWrapper>
          <S.ListWrapper>
            {props.data.map((el: any) => (
              <S.ItemWrapper key={uuidv4()}>
                <S.Item>
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
                </S.Item>
                <S.SendAccompany accompanied={el.accompanied}>
                  {el.accompanied ? (
                    <S.PaperPlaneImage src="/icon/simbollogo2Big.png" />
                  ) : (
                    <S.PaperPlaneImage src="/icon/simbollogo.png" />
                  )}
                </S.SendAccompany>
              </S.ItemWrapper>
            ))}
          </S.ListWrapper>
        </S.Main>
      </S.MainWrapper>
    </S.Wrapper>
  );
}
