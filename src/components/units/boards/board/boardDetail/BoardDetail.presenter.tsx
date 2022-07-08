import KaKaoMapFetch from "../../KaKaoMap/FetchMap";
import CommentListContainer from "../Comment/List/CommentList.container";
import CommentWriteContainer from "../Comment/Write/CommentWrite.container";
import * as S from "./BoardDetail.styles";

export default function BoardDetailPresenter(props: any) {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <S.EventImage src="/market.jpg" />
        <S.EventDate>행사기간 2022년 7월 15일 ~ 2022년 7월 31일</S.EventDate>
      </S.ImageWrapper>
      <S.BodyWrapper>
        <S.Body>
          <S.Title isCompleted={props.isCompleted}>
            이번 주 토요일 동탄 플리마켓 같이 구경하실 동행 구합니다!!
          </S.Title>
          <S.Main>
            <S.InfoWrapper>
              <S.InfoUpper>
                <S.WriterWrapper>
                  <S.ItemsText>작성자</S.ItemsText>
                  <S.Writer>최인호</S.Writer>
                </S.WriterWrapper>
                <S.HeadCountWrapper>
                  <S.ItemsText>모집인원</S.ItemsText>
                  <S.MaxHeadCount>3명</S.MaxHeadCount>
                </S.HeadCountWrapper>
              </S.InfoUpper>
              <S.InfoUnder>
                <S.MyCalendarIcon />
                <S.AccompanyDate>
                  2022년 7월 16일 ~ 2022년 7월 16일
                </S.AccompanyDate>
              </S.InfoUnder>
            </S.InfoWrapper>
            <S.Contents>
              게시글 내용입니다. 게시글 내용입니다. 게시글 내용입니다. 게시글
              내용입니다. 게시글 내용입니다. 게시글 내용입니다. 게시글
              내용입니다. 게시글 내용입니다. 게시글 내용입니다. 게시글
              내용입니다. 게시글 내용입니다. 게시글 내용입니다. 게시글
              내용입니다. 게시글 내용입니다. 게시글 내용입니다. 게시글
              내용입니다. 게시글 내용입니다. 게시글 내용입니다. 게시글
              내용입니다. 게시글 내용입니다. 게시글 내용입니다. 게시글
              내용입니다. 게시글 내용입니다. 게시글 내용입니다. 게시글
              내용입니다. 게시글 내용입니다. 게시글 내용입니다. 게시글
              내용입니다. 게시글 내용입니다. 게시글 내용입니다. 게시글
              내용입니다. 게시글 내용입니다. 게시글 내용입니다. 게시글
              내용입니다. 게시글 내용입니다. 게시글 내용입니다. 게시글
              내용입니다. 게시글 내용입니다. 게시글 내용입니다. 게시글
              내용입니다. 게시글 내용입니다. 게시글 내용입니다.
            </S.Contents>
            <S.TransportAndLocationWrapper>
              <S.TransportationWrapper>
                <S.ItemsText>이동수단</S.ItemsText>
                <S.TransPortImage src="/icon/car.png" />
              </S.TransportationWrapper>
              <S.LocationWrapper>
                <S.LocationExplainWrapper>
                  <S.ItemsText>장소 설명</S.ItemsText>
                  <S.LocationExplain>
                    한남오피스 빌딩 1층 커피숍에서 만나요~!
                  </S.LocationExplain>
                </S.LocationExplainWrapper>
                <S.MapWrapper>
                  <KaKaoMapFetch lat={props.lat} lng={props.lng} />
                </S.MapWrapper>
              </S.LocationWrapper>
            </S.TransportAndLocationWrapper>
          </S.Main>
          <S.CreatedAtAndViewWrapper>
            <S.CreatedAt>2022년 7월 11일 19:31</S.CreatedAt> ・
            <S.View>조회수 {10}</S.View> ・ <S.Report>신고하기</S.Report>
          </S.CreatedAtAndViewWrapper>
        </S.Body>
        <S.AccompanyWrapper>
          {props.isMyBoard ? (
            <>
              <S.AccompanyItemsWrapper isMyBoard={props.isMyBoard}>
                <S.AccompanyAmountIcon src="/icon/groups.png" />
                <S.AccompanyAmountText>2/3</S.AccompanyAmountText>
              </S.AccompanyItemsWrapper>
              <S.AccompanyItemsWrapper isMyBoard={props.isMyBoard}>
                <S.AccompanyChangeMaxIcon src="/icon/group_add.png" />
                <S.AccompanyChangeMaxText>인원 변경</S.AccompanyChangeMaxText>
              </S.AccompanyItemsWrapper>
              <S.AccompanyItemsWrapper isMyBoard={props.isMyBoard}>
                {props.isCompleted ? (
                  <>
                    <S.AccompanyCompleteCancelIcon src="/icon/cancel.png" />
                    <S.AccompanyCompleteCancelText>
                      완료취소
                    </S.AccompanyCompleteCancelText>
                  </>
                ) : (
                  <>
                    <S.AccompanyCompleteIcon src="/icon/done.png" />
                    <S.AccompanyCompleteText>모집완료</S.AccompanyCompleteText>
                  </>
                )}
              </S.AccompanyItemsWrapper>
            </>
          ) : props.isAccompanyUser ? (
            <S.AccompanyItemsWrapper>
              <S.AccompanyCancelIcon src="/icon/simbollogo2Big.png" />
              <S.AccompanyCancelText>동행중</S.AccompanyCancelText>
            </S.AccompanyItemsWrapper>
          ) : (
            <S.AccompanyItemsWrapper>
              <S.AccompanyRequestIcon src="/icon/simbollogo.png" />
              <S.AccompanyRequestText>동행요청</S.AccompanyRequestText>
            </S.AccompanyItemsWrapper>
          )}
        </S.AccompanyWrapper>
      </S.BodyWrapper>
      <S.CommentWrapper>
        <S.CommentText>질문 댓글란</S.CommentText>
        <CommentWriteContainer />
        <CommentListContainer />
      </S.CommentWrapper>
    </S.Wrapper>
  );
}
