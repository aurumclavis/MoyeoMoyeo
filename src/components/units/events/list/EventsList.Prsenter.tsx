import * as S from "./EventsList.Styles";
import { Calendar } from "antd";

export default function EventsListUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.ListTitle>
          <S.Logo src="/icon/simbollogo.png" />
          행사 일정
        </S.ListTitle>
        <S.LineDiv />
        <S.DateWrapper>
          <S.DatePickWrapper>
            <S.DateLeftIcon />
            <S.DatePick>2022-07-08</S.DatePick>
            <S.DateRigthIcon />
          </S.DatePickWrapper>
          <S.CalendarWrapper>
            <Calendar fullscreen={false} />
          </S.CalendarWrapper>
        </S.DateWrapper>
        <S.LineListDiv />
        <S.ListWrapper>
          <S.ListImg src="/배너이미지_동행1.png" />
          <S.ContentsWrapper>
            <S.ContentsTitleWrapper>
              <S.ContentsTitle>축제 이름 축제 이름</S.ContentsTitle>
              <S.ContentsPeriod>기간 yyyy-mm-dd - yyyy-mm-dd</S.ContentsPeriod>
            </S.ContentsTitleWrapper>
            <S.MarkerDetailWrapper>
              <S.Marker>
                요약글 요약글 요약글 요약글 요약글 요약글 요약글 요약글 요약글
                요약글 요약글 요약글 요약글 요약글 요약글 요약글 요약글 요약글
                요약글 요약글
              </S.Marker>
              <S.Btn>자세히 보러가기</S.Btn>
            </S.MarkerDetailWrapper>
          </S.ContentsWrapper>
        </S.ListWrapper>
        <S.LineListDiv />
        <S.ListWrapper>
          <S.ListImg src="/배너이미지_동행1.png" />
          <S.ContentsWrapper>
            <S.ContentsTitleWrapper>
              <S.ContentsTitle>축제 이름 축제 이름</S.ContentsTitle>
              <S.ContentsPeriod>기간 yyyy-mm-dd - yyyy-mm-dd</S.ContentsPeriod>
            </S.ContentsTitleWrapper>
            <S.MarkerDetailWrapper>
              <S.Marker>
                요약글 요약글 요약글 요약글 요약글 요약글 요약글 요약글 요약글
                요약글 요약글 요약글 요약글 요약글 요약글 요약글 요약글 요약글
                요약글 요약글
              </S.Marker>
              <S.Btn>자세히 보러가기</S.Btn>
            </S.MarkerDetailWrapper>
          </S.ContentsWrapper>
        </S.ListWrapper>
        <S.LineListDiv />
        <S.ListWrapper>
          <S.ListImg src="/배너이미지_동행1.png" />
          <S.ContentsWrapper>
            <S.ContentsTitleWrapper>
              <S.ContentsTitle>축제 이름 축제 이름</S.ContentsTitle>
              <S.ContentsPeriod>기간 yyyy-mm-dd - yyyy-mm-dd</S.ContentsPeriod>
            </S.ContentsTitleWrapper>
            <S.MarkerDetailWrapper>
              <S.Marker>
                요약글 요약글 요약글 요약글 요약글 요약글 요약글 요약글 요약글
                요약글 요약글 요약글 요약글 요약글 요약글 요약글 요약글 요약글
                요약글 요약글
              </S.Marker>
              <S.Btn>자세히 보러가기</S.Btn>
            </S.MarkerDetailWrapper>
          </S.ContentsWrapper>
        </S.ListWrapper>
      </S.Wrapper>
    </>
  );
}
