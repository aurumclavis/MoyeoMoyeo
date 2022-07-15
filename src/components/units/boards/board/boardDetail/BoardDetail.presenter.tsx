import BackTopAnt from "../../../../commons/backTop";
import ToolTip from "../../../../commons/tooltip";
import KaKaoMapFetch from "../../KaKaoMap/FetchMap";
import CommentListContainer from "../Comment/List/CommentList.container";
import CommentWriteContainer from "../Comment/Write/CommentWrite.container";
import Dompurify from "dompurify";
import * as S from "./BoardDetail.styles";

export default function BoardDetailPresenter(props: any) {
  return (
    <S.Wrapper>
      <S.NavWrapper ref={props.navRef}>
        <S.NavItemWrapper>
          <S.NavItem
            id="detail"
            isActive={props.activeTab === "detail"}
            onClick={props.onClickDetail}
          >
            동행정보
          </S.NavItem>
          <S.NavItem
            id="event"
            isActive={props.activeTab === "event"}
            onClick={props.onClickEvent}
          >
            행사정보
          </S.NavItem>
          <S.NavItem
            id="comment"
            isActive={props.activeTab === "comment"}
            onClick={props.onClickComment}
          >
            댓글
          </S.NavItem>
        </S.NavItemWrapper>
      </S.NavWrapper>
      <S.CoverImage src="/market.jpg" />
      <S.BodyWrapper>
        <S.Body>
          <S.Title isCompleted={props.isCompleted} ref={props.detailRef}>
            이번 주 토요일 동탄 고양이플리마켓 같이 구경할 동행 구합니다!!
          </S.Title>
          <S.CreatedAtAndViewWrapper>
            <S.CreatedAt>2022년 7월 11일 19:31 작성</S.CreatedAt> ・
            <S.View>조회수 {10}</S.View> ・ <S.Report>신고하기</S.Report>
          </S.CreatedAtAndViewWrapper>
          <S.Main>
            <S.InfoWrapper>
              <S.InfoUpper>
                <S.TransportationWrapper>
                  <S.ItemsText>이동수단</S.ItemsText>
                  <ToolTip promptText={"자동차"} placement={"top"}>
                    <S.TransPortImage src="/icon/car.png" />
                  </ToolTip>
                </S.TransportationWrapper>
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
            {typeof window !== "undefined" ? (
              <S.Contents
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize("aaa"),
                }}
              />
            ) : (
              <S.Contents />
            )}
            <S.LocationWrapper>
              <S.MapWrapper>
                <KaKaoMapFetch lat={props.lat} lng={props.lng} />
              </S.MapWrapper>
              <S.LocationExplainWrapper>
                <S.ItemsText>모임장소 설명</S.ItemsText>
                <S.LocationExplain>
                  선유도역 9호선 1번출구 스타벅스에서 만나요~! 플리마켓까지 제
                  차로 이동해드립니다!
                </S.LocationExplain>
              </S.LocationExplainWrapper>
            </S.LocationWrapper>
          </S.Main>
        </S.Body>
        <S.AccompanyWrapper>
          {props.isMyBoard && (
            <>
              <S.AccompanyUpperWrapper>
                <S.AccompanyUpperItemsWrapper>
                  <S.AccompanyItems isMyBoard={props.isMyBoard}>
                    <S.AccompanyAmountIcon src="/icon/groups.png" />
                    <S.AccompanyAmountText>인원 2/3</S.AccompanyAmountText>
                  </S.AccompanyItems>
                  <S.AccompanyItems isMyBoard={props.isMyBoard}>
                    <S.AccompanyChangeMaxIcon src="/icon/group_add.png" />
                    <S.AccompanyChangeMaxText>
                      인원 변경
                    </S.AccompanyChangeMaxText>
                  </S.AccompanyItems>
                </S.AccompanyUpperItemsWrapper>
              </S.AccompanyUpperWrapper>
              <S.AccompanyItems isMyBoard={props.isMyBoard}>
                {props.isCompleted ? (
                  <>
                    <S.AccompanyRequestButton isCompleted={props.isCompleted}>
                      <S.AccompanyCompleteCancelIcon src="/icon/cancel.png" />
                      <S.AccompanyCompleteCancelText>
                        모집완료 취소
                      </S.AccompanyCompleteCancelText>
                    </S.AccompanyRequestButton>
                    <S.AccompanyInfo>
                      <S.AccompanyInfoIcon />
                      완료 취소하면 동행에게 이메일이 보내집니다.
                    </S.AccompanyInfo>
                  </>
                ) : (
                  <>
                    <S.AccompanyRequestButton>
                      <S.AccompanyCompleteIcon src="/icon/done.png" />
                      <S.AccompanyCompleteText>
                        모집완료
                      </S.AccompanyCompleteText>
                    </S.AccompanyRequestButton>
                    <S.AccompanyInfo>
                      <S.AccompanyInfoIcon />
                      완료를 누르면 동행에게 이메일이 보내집니다.
                    </S.AccompanyInfo>
                  </>
                )}
              </S.AccompanyItems>
            </>
          )}
          {!props.isMyBoard &&
            (props.isSendRequestUser ? (
              <>
                <S.AccompanyUpperWrapper>
                  <S.WriterImg src="/배너이미지_동행1.png" />
                  <S.WriterInfoWrapper>
                    <S.WriterName>최인호</S.WriterName>
                    <S.WriterEtc>20대 ・ 남성 ・ 서울거주</S.WriterEtc>
                  </S.WriterInfoWrapper>
                </S.AccompanyUpperWrapper>
                <S.AccompanyRequestButton
                  isSendRequestUser={props.isSendRequestUser}
                >
                  <S.AccompanyCancelText>동행요청보냄</S.AccompanyCancelText>
                  <S.AccompanyCancelIcon src="/icon/symbollogo_removebg.png" />
                </S.AccompanyRequestButton>
                <S.AccompanyInfo>
                  <S.AccompanyInfoIcon />
                  동행을 요청하면 상대방의 수락을 거쳐 맺어집니다.
                </S.AccompanyInfo>
              </>
            ) : (
              <>
                <S.AccompanyUpperWrapper>
                  <S.WriterImg src="/배너이미지_동행1.png" />
                  <S.WriterInfoWrapper>
                    <S.WriterName>최인호</S.WriterName>
                    <S.WriterEtc>20대 ・ 남성 ・ 서울거주</S.WriterEtc>
                  </S.WriterInfoWrapper>
                </S.AccompanyUpperWrapper>
                <S.AccompanyRequestButton>
                  <S.AccompanyRequestText>동행 요청하기</S.AccompanyRequestText>
                  <S.AccompanyRequestIcon src="/icon/simbollogo.png" />
                </S.AccompanyRequestButton>
                <S.AccompanyInfo>
                  <S.AccompanyInfoIcon />
                  동행을 요청하면 상대방의 수락을 거쳐 맺어집니다.
                </S.AccompanyInfo>
              </>
            ))}
        </S.AccompanyWrapper>
        <S.EventInfoWrapper ref={props.eventRef}>
          <S.EventInfoText>행사 정보</S.EventInfoText>
          <S.EventInfo>
            <S.EventImage
              src="/catGoodsMarketExample.jpeg"
              onClick={props.onClickGoEventDetail}
            />
            <S.EventInfoDetailWrapper>
              <S.EventInfoDetail>
                <S.EventInfoItem>
                  <S.EventFestivalIcon />
                  행사이름
                </S.EventInfoItem>
                <S.EventInfoContents>동탄고양이플리마켓</S.EventInfoContents>
              </S.EventInfoDetail>
              <S.EventInfoDetail>
                <S.EventInfoItem>
                  <S.EventMapIcon />
                  지역
                </S.EventInfoItem>
                <S.EventInfoContents>경기도 동탄</S.EventInfoContents>
              </S.EventInfoDetail>
              <S.EventInfoDetail>
                <S.EventInfoItem>
                  <S.EventDateRangeIcon />
                  기간
                </S.EventInfoItem>
                <S.EventInfoContents>
                  2022년 7월 15일 ~ 2022년 7월 31일
                </S.EventInfoContents>
              </S.EventInfoDetail>
              <S.EventInfoDetail>
                <S.EventInfoItem>
                  <S.EventListIcon />
                  카테고리
                </S.EventInfoItem>
                <S.EventInfoContents>플리마켓</S.EventInfoContents>
              </S.EventInfoDetail>
            </S.EventInfoDetailWrapper>
          </S.EventInfo>
        </S.EventInfoWrapper>
        <S.CommentWrapper ref={props.commentRef}>
          <S.CommentText>댓글로 질문하기</S.CommentText>
          <CommentWriteContainer />
          <CommentListContainer />
        </S.CommentWrapper>
        <BackTopAnt />
      </S.BodyWrapper>
    </S.Wrapper>
  );
}
