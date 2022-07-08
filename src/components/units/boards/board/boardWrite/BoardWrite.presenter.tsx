import * as S from "./BoardWrite.styles";
import KaKaoMap from "../../KaKaoMap";
import KaKaoMapFetch from "../../KaKaoMap/FetchMap";

export default function BoardWritePresenter(props: any) {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.ImageWrapper>
          <S.DateAndUploadWrapper>
            <S.EventDate>
              행사기간 2022년 7월 15일 ~ 2022년 7월 31일
            </S.EventDate>
            <S.MyImageUpload>대표이미지 직접 등록</S.MyImageUpload>
          </S.DateAndUploadWrapper>
          <S.EventImage src="/market.jpg" />
        </S.ImageWrapper>
        <S.InfoWrapper>
          <S.ButtonWrapper>
            <S.CancelButton>취소</S.CancelButton>
            <S.SubmitButton>등록</S.SubmitButton>
          </S.ButtonWrapper>
          <S.ItemsWrapper>
            <S.ItemText>동행일자</S.ItemText>
            <S.EventSearchWrapper>
              <S.MySearchIcon />
              <S.EventSearchInput placeholder="행사를 검색해보세요!" />
            </S.EventSearchWrapper>
            <S.AccompanyDateInputWrapper>
              <S.AccompanyDateInput placeholder="2022년 7월 16일" />
              ~
              <S.AccompanyDateInput placeholder="2022년 7월 16일" />
              <S.CalendarWrapper>
                <S.MyDateRangeIcon />
              </S.CalendarWrapper>
            </S.AccompanyDateInputWrapper>
          </S.ItemsWrapper>
          <S.ItemsWrapper>
            <S.ItemText>한 줄 설명</S.ItemText>
            <S.RemarkInput placeholder="동행 게시글 목록에 표시될 한 줄 설명을 적어주세요!" />
          </S.ItemsWrapper>
          <S.ItemsWrapper>
            <S.ItemText>모집 인원</S.ItemText>
            <S.MaxHeadCountWrapper>
              <S.MaxHeadCountInput placeholder="0" />명
            </S.MaxHeadCountWrapper>
          </S.ItemsWrapper>
          <S.ItemsWrapper>
            <S.ItemText>이동수단 선택</S.ItemText>
            <S.TransportationWrapper>
              <S.Bicycle>
                <S.TransportationImg src="/icon/bicycle.png" />
              </S.Bicycle>
              <S.Bus>
                <S.TransportationImg src="/icon/bus.png" />
              </S.Bus>
              <S.Train>
                <S.TransportationImg src="/icon/train.png" />
              </S.Train>
              <S.Car>
                <S.TransportationImg src="/icon/car.png" />
              </S.Car>
              <S.Airplane>
                <S.TransportationImg src="/icon/airplane.png" />
              </S.Airplane>
              <S.Ship>
                <S.TransportationImg src="/icon/ship.png" />
              </S.Ship>
            </S.TransportationWrapper>
          </S.ItemsWrapper>
        </S.InfoWrapper>
      </S.TopWrapper>
      <S.BottomWrapper>
        <S.ItemsWrapper>
          <S.ItemText>글 제목</S.ItemText>
          <S.TitleInput placeholder="제목을 입력해주세요.(100자 이내)"></S.TitleInput>
        </S.ItemsWrapper>
        <S.ItemsWrapper>
          <S.ItemText>글 내용</S.ItemText>
          <S.MyReactQuill placeholder="내용을 입력해주세요.(1000자 이내)" />
        </S.ItemsWrapper>
        <S.LocationWrapper>
          <S.ItemText>모임 장소</S.ItemText>
          <S.MapWrapper>
            <KaKaoMap
              setValue={props.setValue}
              isEdit={props.isEdit}
              setAddress={props.setAddress}
            />
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
                <S.ItemText>장소설명</S.ItemText>
                <S.LocationExplainInput placeholder="모임장소에 관해 설명해주세요!" />
              </S.ItemsWrapper>
            </S.AddressExplainWrapper>
          </S.MapWrapper>
        </S.LocationWrapper>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
