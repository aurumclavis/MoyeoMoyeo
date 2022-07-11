import * as S from "./BoardWrite.styles";
import KaKaoMap from "../../KaKaoMap";
import ToolTip from "../../../../commons/tooltip";

export default function BoardWritePresenter(props: any) {
  return (
    <S.Wrapper>
      <S.CoverImageWrapper>
        <S.CoverImage src="/market.jpg" />
        <S.MyImageUpload>커버 이미지 직접 등록</S.MyImageUpload>
      </S.CoverImageWrapper>
      <S.UpperWrapper>
        <S.EventWrapper>
          <S.EventInfoWrapper>
            <S.ImageWrapper>
              <S.MyImageUpload>이벤트 대표이미지 직접 등록</S.MyImageUpload>
              <S.EventImage src="/catGoodsMarketExample.jpeg" />
            </S.ImageWrapper>
            <S.EventInfo>
              <S.EventInfoDetail>
                <S.EventFestivalIcon />
                <S.EventInfoItem>행사이름</S.EventInfoItem>
                <S.EventInfoContents>동탄고양이플리마켓</S.EventInfoContents>
              </S.EventInfoDetail>
              <S.EventInfoDetail>
                <S.EventMapIcon />
                <S.EventInfoItem>지역</S.EventInfoItem>
                <S.EventInfoContents>경기도 동탄</S.EventInfoContents>
              </S.EventInfoDetail>
              <S.EventInfoDetail>
                <S.EventDateRangeIcon />
                <S.EventInfoItem>기간</S.EventInfoItem>
                <S.EventInfoContents>
                  2022년 7월 15일 <br />~ 2022년 7월 31일
                </S.EventInfoContents>
              </S.EventInfoDetail>
              <S.EventInfoDetail>
                <S.EventListIcon />
                <S.EventInfoItem>카테고리</S.EventInfoItem>
                <S.EventInfoContents>플리마켓</S.EventInfoContents>
              </S.EventInfoDetail>
            </S.EventInfo>
          </S.EventInfoWrapper>
          <S.EventSearchWrapper>
            <S.MySearchIcon />
            <S.EventSearchInput placeholder="행사를 검색해보세요!" />
          </S.EventSearchWrapper>
        </S.EventWrapper>
        <S.MainWrapper>
          <S.ItemsWrapper>
            <S.ItemText>모여글 제목</S.ItemText>
            <S.TitleInput placeholder="제목을 입력해주세요.(100자 이내)" />
          </S.ItemsWrapper>
          <S.DateAndMaxHeadCountWrapper>
            <S.DateWrapper>
              <S.ItemText>동행일자</S.ItemText>
              <S.AccompanyDateInputWrapper>
                <S.AccompanyDateInput placeholder="2022년 7월 16일" />
                ~
                <S.AccompanyDateInput placeholder="2022년 7월 16일" />
                <S.CalendarWrapper>
                  <S.MyDateRangeIcon />
                </S.CalendarWrapper>
              </S.AccompanyDateInputWrapper>
            </S.DateWrapper>
            <S.MaxHeadCountWrapper>
              <S.ItemText>모집 인원</S.ItemText>
              <S.MaxHeadCount>
                <S.MaxHeadCountInput placeholder="0" />명
              </S.MaxHeadCount>
            </S.MaxHeadCountWrapper>
          </S.DateAndMaxHeadCountWrapper>
          <S.ItemsWrapper>
            <S.ItemText>글 내용</S.ItemText>
            <S.MyReactQuill placeholder="내용을 입력해주세요.(1000자 이내)" />
          </S.ItemsWrapper>
        </S.MainWrapper>
      </S.UpperWrapper>
      <S.UnderWrapper>
        <S.ItemsWrapper>
          <S.ItemText>한 줄 설명</S.ItemText>
          <S.RemarkInput placeholder="동행 게시글 목록에 노출되는 한 줄 설명을 적어주세요!" />
        </S.ItemsWrapper>
        <S.EventLocationWrapper>
          <S.ItemText>행사 위치</S.ItemText>
          <S.MapWrapper>
            <S.TransportationWrapper>
              <S.TransportationSelect onClick={props.onClickTransportSelect}>
                <S.MyArrowRightIcon
                  isTransportSelect={props.isTransportSelect}
                />
                이동수단선택
              </S.TransportationSelect>
              <S.Transportation isTransportSelect={props.isTransportSelect}>
                <S.Bicycle>
                  <ToolTip promptText={"자전거"} placement={"right"}>
                    <S.TransportationImg src="/icon/bicycle.png" />
                  </ToolTip>
                </S.Bicycle>
                <S.Bus>
                  <ToolTip promptText={"버스"} placement={"right"}>
                    <S.TransportationImg src="/icon/bus.png" />
                  </ToolTip>
                </S.Bus>
                <S.Train>
                  <ToolTip promptText={"기차"} placement={"right"}>
                    <S.TransportationImg src="/icon/train.png" />
                  </ToolTip>
                </S.Train>
                <S.Car>
                  <ToolTip promptText={"자동차"} placement={"right"}>
                    <S.TransportationImg src="/icon/car.png" />
                  </ToolTip>
                </S.Car>
                <S.Airplane>
                  <ToolTip promptText={"비행기"} placement={"right"}>
                    <S.TransportationImg src="/icon/airplane.png" />
                  </ToolTip>
                </S.Airplane>
                <S.Ship>
                  <ToolTip promptText={"배"} placement={"right"}>
                    <S.TransportationImg src="/icon/ship.png" />
                  </ToolTip>
                </S.Ship>
              </S.Transportation>
            </S.TransportationWrapper>
            <KaKaoMap
              setValue={props.setValue}
              isEdit={props.isEdit}
              setAddress={props.setAddress}
            ></KaKaoMap>
            <S.AddressExplainWrapper>
              <S.ItemsWrapper>
                <S.ItemText>주소</S.ItemText>
                <S.AddressInput
                  readOnly
                  placeholder="지도에서 선택하면 자동으로 입력됩니다."
                  value={props.address}
                />
              </S.ItemsWrapper>
              <S.ItemsWrapper>
                <S.ItemText>모임장소 설명</S.ItemText>
                <S.LocationExplainInput placeholder="모임장소에 관해 설명해주세요!" />
              </S.ItemsWrapper>
            </S.AddressExplainWrapper>
          </S.MapWrapper>
        </S.EventLocationWrapper>
        <S.ButtonWrapper>
          <S.CancelButton>취소</S.CancelButton>
          <S.SubmitButton>등록</S.SubmitButton>
        </S.ButtonWrapper>
      </S.UnderWrapper>
    </S.Wrapper>
  );
}
