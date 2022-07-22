import BackTopAnt from "../../../../commons/backTop";
import ToolTip from "../../../../commons/tooltip";
import KaKaoMapFetch from "../../KaKaoMap/FetchMap";
import CommentListContainer from "../Comment/List/CommentList.container";
import CommentWriteContainer from "../Comment/Write/CommentWrite.container";
import Dompurify from "dompurify";
import * as S from "./BoardDetail.styles";
import RequestUserList from "../../../../commons/requestUserList";
import KaKaoRoadView from "../../KaKaoMap/FetchMap/roadView";
import MaxHeadCountChangeModal from "./maxHeadcountChangeModal";
import { v4 as uuidv4 } from "uuid";

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
      <S.CoverImage
        src={`https://storage.googleapis.com/${props.data?.fetchBoard.coverImage?.src}`}
      />
      <S.BodyWrapper>
        <S.Body>
          <S.Title isCompleted={props.isCompleted} ref={props.detailRef}>
            {props.data?.fetchBoard.title}
          </S.Title>
          <S.CreatedAtAndViewCountWrapper>
            <S.CreatedAt>2022년 7월 11일 19:31 작성</S.CreatedAt> ・
            <S.View>조회수 {props.data?.fetchBoard.viewCount}</S.View> ・{" "}
            <S.Report>신고하기</S.Report>
          </S.CreatedAtAndViewCountWrapper>
          <S.Main>
            <S.InfoWrapper>
              <S.InfoUpper>
                <S.TransportationWrapper>
                  <S.ItemsText>이동수단</S.ItemsText>
                  {props.data?.fetchBoard.transport.map((el: string) => (
                    <ToolTip promptText={el} placement={"top"} key={uuidv4()}>
                      {el === "자전거" && (
                        <S.TransPortImage src="/icon/bicycle.png" />
                      )}
                      {el === "버스" && (
                        <S.TransPortImage src="/icon/bus.png" />
                      )}
                      {el === "기차" && (
                        <S.TransPortImage src="/icon/train.png" />
                      )}
                      {el === "자동차" && (
                        <S.TransPortImage src="/icon/car.png" />
                      )}
                      {el === "비행기" && (
                        <S.TransPortImage src="/icon/airplane.png" />
                      )}
                      {el === "배" && <S.TransPortImage src="/icon/ship.png" />}
                    </ToolTip>
                  ))}
                </S.TransportationWrapper>
                <S.HeadCountWrapper>
                  <S.ItemsText>모집인원</S.ItemsText>
                  <S.MaxHeadCount>
                    {props.data?.fetchBoard.personCount}명
                  </S.MaxHeadCount>
                </S.HeadCountWrapper>
              </S.InfoUpper>
              <S.InfoUnder>
                <S.MyCalendarIcon />
                <S.AccompanyDate>
                  <div>
                    {props.data?.fetchBoard.dateStart
                      .replace("-", "년 ")
                      .replace("-", "월 ") + "일"}
                  </div>
                  ~
                  <div>
                    {props.data?.fetchBoard.dateEnd
                      .replace("-", "년 ")
                      .replace("-", "월 ") + "일"}
                  </div>
                </S.AccompanyDate>
              </S.InfoUnder>
            </S.InfoWrapper>
            {typeof window !== "undefined" ? (
              <S.Contents
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(props.data?.fetchBoard.contents),
                }}
              />
            ) : (
              <S.Contents />
            )}
            <S.LocationWrapper>
              <S.MapWrapper>
                <S.RoadViewButton onClick={props.onClickRoadView}>
                  행사장소 로드뷰
                </S.RoadViewButton>
                <KaKaoMapFetch
                  lat={props.data?.fetchBoard.boardAddress.lat}
                  lng={props.data?.fetchBoard.boardAddress.lng}
                  eventName={props.data?.fetchBoard.eventName}
                  address={props.data?.fetchBoard.address}
                />
                {props.roadView && (
                  <KaKaoRoadView
                    lat={props.data?.fetchBoard.boardAddress.lat}
                    lng={props.data?.fetchBoard.boardAddress.lng}
                    onClickExitRoadView={props.onClickExitRoadView}
                  />
                )}
              </S.MapWrapper>
              <S.LocationExplainWrapper>
                <S.ItemsText>모임장소 설명</S.ItemsText>
                <S.LocationExplain>
                  {props.data?.fetchBoard.boardAddress.address_description}
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
                  <S.AccompanyItems>
                    <S.AccompanyAmountIcon src="/icon/groups.png" />
                    <S.AccompanyAmountText>
                      {/* 모집된인원-스케쥴드유저스가 작동안해서 일단 하드코딩 */}
                      인원 {1}/{props.maxHeadCount}
                    </S.AccompanyAmountText>
                  </S.AccompanyItems>
                  <S.AccompanyItems>
                    <S.AccompanyChangeMaxIcon
                      src="/icon/group_add.png"
                      onClick={props.onClickChangeMaxCount}
                    />
                    <S.AccompanyChangeMaxText>
                      인원 변경
                    </S.AccompanyChangeMaxText>
                    {props.isModalVisible && (
                      <MaxHeadCountChangeModal
                        setIsModalVisible={props.setIsModalVisible}
                        handleOk={props.handleOk}
                        maxHeadCount={props.maxHeadCount}
                        onClickCount={props.onClickCount}
                      />
                    )}
                  </S.AccompanyItems>
                </S.AccompanyUpperItemsWrapper>
              </S.AccompanyUpperWrapper>
              <S.AccompanyUnderWrapper>
                {props.isCompleted ? (
                  <>
                    <S.AccompanyUserListWrapper>
                      {/* 모집된인원-스케쥴드유저스가 작동안해서 일단 하드코딩 */}
                      {["김성훈", "성혜린", "김은재", "한주연"].map((el) => (
                        <S.AccompanyUser key={el}>{el}</S.AccompanyUser>
                      ))}
                    </S.AccompanyUserListWrapper>
                    <S.AccompanyRequestButton
                      isCompleted={props.isCompleted}
                      onClick={props.onClickChangeRecruitState("cancel")}
                    >
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
                    <S.AccompanyUserListWrapper>
                      {["김성훈", "성혜린", "김은재", "한주연"].map((el) => (
                        <S.AccompanyUser key={el}>{el}</S.AccompanyUser>
                      ))}
                    </S.AccompanyUserListWrapper>
                    <RequestUserList
                      requestUsers={props.requestUserData?.fetchBoardRequest.map(
                        (el: any) => el.reqUser.name
                      )}
                      onClickAcceptRequest={props.onClickAcceptRequest}
                      onClickRefuseRequest={props.onClickRefuseRequest}
                      requestAccepted={props.requestAccepted}
                      requestRefused={props.requestRefused}
                      isDetailPage={true}
                    />
                    <S.AccompanyRequestButton
                      onClick={props.onClickChangeRecruitState("complete")}
                    >
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
              </S.AccompanyUnderWrapper>
            </>
          )}
          {!props.isMyBoard &&
            (props.isSendRequestUser ? (
              <>
                <S.AccompanyUpperWrapper>
                  <S.WriterImg src="/배너이미지_동행1.png" />
                  <S.WriterInfoWrapper>
                    <S.WriterName>
                      {props.data?.fetchBoard.writer.name}
                    </S.WriterName>
                    <S.WriterEtc>20대 ・ 남성 ・ 서울거주</S.WriterEtc>
                  </S.WriterInfoWrapper>
                </S.AccompanyUpperWrapper>
                {!!props.userData && (
                  <>
                    <S.AccompanyRequestButton
                      isSendRequestUser={props.isSendRequestUser}
                      onClick={props.onClickRequestAccompany("cancel")}
                    >
                      <S.AccompanyCancelText>
                        동행요청보냄
                      </S.AccompanyCancelText>
                      <S.AccompanyCancelIcon src="/icon/symbollogo_removebg.png" />
                    </S.AccompanyRequestButton>

                    <S.AccompanyInfo>
                      <S.AccompanyInfoIcon />
                      동행을 요청하면 상대방의 수락을 거쳐 맺어집니다.
                    </S.AccompanyInfo>
                  </>
                )}
              </>
            ) : (
              <>
                <S.AccompanyUpperWrapper>
                  <S.WriterImg src="/배너이미지_동행1.png" />
                  <S.WriterInfoWrapper>
                    <S.WriterName>
                      {props.data?.fetchBoard.writer.name}
                    </S.WriterName>
                    <S.WriterEtc>20대 ・ 남성 ・ 서울거주</S.WriterEtc>
                  </S.WriterInfoWrapper>
                </S.AccompanyUpperWrapper>
                {!!props.userData && (
                  <>
                    <S.AccompanyRequestButton
                      onClick={props.onClickRequestAccompany("request")}
                    >
                      <S.AccompanyRequestText>
                        동행 요청하기
                      </S.AccompanyRequestText>
                      <S.AccompanyRequestIcon src="/icon/simbollogo.png" />
                    </S.AccompanyRequestButton>

                    <S.AccompanyInfo>
                      <S.AccompanyInfoIcon />
                      동행을 요청하면 상대방의 수락을 거쳐 맺어집니다.
                    </S.AccompanyInfo>
                  </>
                )}
              </>
            ))}
        </S.AccompanyWrapper>
        <S.EventInfoWrapper ref={props.eventRef}>
          <S.EventInfoText>행사 정보</S.EventInfoText>
          <S.EventInfo>
            <S.EventImage src="/catGoodsMarketExample.jpeg" />
            <S.EventInfoDetailWrapper>
              <S.EventInfoDetail>
                <S.EventInfoItem>
                  <S.EventFestivalIcon />
                  행사이름
                </S.EventInfoItem>
                <S.EventInfoContents>
                  {props.data?.fetchBoard.eventName}
                </S.EventInfoContents>
              </S.EventInfoDetail>
              <S.EventInfoDetail>
                <S.EventInfoItem>
                  <S.EventMapIcon />
                  지역
                </S.EventInfoItem>
                {/* 이벤트어드레스가 없어서 일단 하드코딩으로 작성 */}
                <S.EventInfoContents>{"서울시 어디어디"}</S.EventInfoContents>
              </S.EventInfoDetail>
              <S.EventInfoDetail>
                <S.EventInfoItem>
                  <S.EventDateRangeIcon />
                  기간
                </S.EventInfoItem>
                <S.EventInfoContents>
                  {props.data?.fetchBoard.eventStart
                    .replace("-", "년 ")
                    .replace("-", "월 ") + "일"}{" "}
                  ~{" "}
                  {props.data?.fetchBoard.eventEnd
                    .replace("-", "년 ")
                    .replace("-", "월 ") + "일"}
                </S.EventInfoContents>
              </S.EventInfoDetail>
              <S.EventInfoDetail>
                <S.EventInfoItem>
                  <S.EventListIcon />
                  카테고리
                </S.EventInfoItem>
                <S.EventInfoContents>
                  {props.data?.fetchBoard.eventCategory}
                </S.EventInfoContents>
              </S.EventInfoDetail>
            </S.EventInfoDetailWrapper>
          </S.EventInfo>
        </S.EventInfoWrapper>
        <S.ButtonWrapper>
          <S.GoListButton onClick={props.onClickMoveToPage("/boards")}>
            동행게시판으로
          </S.GoListButton>
          {props.isMyBoard && (
            <S.EditButton
              onClick={props.onClickMoveToPage(
                `/boards/${props.data?.fetchBoard.id}/edit`
              )}
            >
              수정하기
            </S.EditButton>
          )}
        </S.ButtonWrapper>
        <S.CommentWrapper ref={props.commentRef}>
          <S.CommentText>댓글로 질문하기</S.CommentText>
          <CommentWriteContainer />
          <CommentListContainer />
        </S.CommentWrapper>
      </S.BodyWrapper>
      <BackTopAnt />
    </S.Wrapper>
  );
}
