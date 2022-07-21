import * as S from "./BoardWrite.styles";
import KaKaoMap from "../../KaKaoMap";
import ToolTip from "../../../../commons/tooltip";
import { v4 as uuidv4 } from "uuid";
import DateRangePicker from "./dateRangePicker";
import { getDate } from "../../../../commons/getDate";

export default function BoardWritePresenter(props: any) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <S.CoverImageWrapper>
        {!props.isEdit ? (
          <S.CoverImage
            id="coverImage"
            src={
              props.previewUrls[0] ? props.previewUrls[0] : props.randomCoverUrl
            }
          />
        ) : (
          <S.CoverImage
          // src={`https://storage.googleapis.com/${}`}
          />
        )}
        <S.RandomCover onClick={props.onClickChangeRandomCover}>
          다른 랜덤이미지로 변경
        </S.RandomCover>
        <S.MyImageUpload onClick={props.onClickMyCoverImg}>
          커버 이미지 직접 등록
          <S.ImageInput
            type="file"
            ref={props.coverImgRef}
            onChange={props.onChangeImgInput(0)}
          />
        </S.MyImageUpload>
      </S.CoverImageWrapper>
      <S.UpperWrapper>
        <S.EventWrapper>
          <S.EventInfoWrapper>
            <S.ImageWrapper>
              {!props.isEdit ? (
                <S.EventImage src={"/catGoodsMarketExample.jpeg"} />
              ) : (
                <S.EventImage
                // src={`https://storage.googleapis.com/${}`}
                />
              )}
            </S.ImageWrapper>
            <S.EventInfo>
              <S.EventInfoDetail>
                <S.EventFestivalIcon />
                <S.EventInfoItem>이벤트이름</S.EventInfoItem>
                <S.EventInfoContents>
                  {props.postData?.fetchPost.title}
                </S.EventInfoContents>
              </S.EventInfoDetail>
              <S.EventInfoDetail>
                <S.EventMapIcon />
                <S.EventInfoItem>지역</S.EventInfoItem>
                <S.EventInfoContents>
                  {props.postData?.fetchPost.address}
                </S.EventInfoContents>
              </S.EventInfoDetail>
              <S.EventInfoDetail>
                <S.EventDateRangeIcon />
                <S.EventInfoItem>기간</S.EventInfoItem>
                <S.EventInfoContents>
                  {getDate(props.postData?.fetchPost.dateStart)} <br />~{" "}
                  {getDate(props.postData?.fetchPost.dateEnd)}
                </S.EventInfoContents>
              </S.EventInfoDetail>
              <S.EventInfoDetail>
                <S.EventListIcon />
                <S.EventInfoItem>카테고리</S.EventInfoItem>
                <S.EventInfoContents>
                  {props.postData?.fetchPost.category}
                </S.EventInfoContents>
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
            <S.TitleInput
              placeholder="제목을 입력해주세요.(100자 이내)"
              {...props.register("title")}
            />
          </S.ItemsWrapper>
          <S.DateAndMaxHeadCountWrapper>
            <S.DateWrapper>
              <S.ItemText>동행일자</S.ItemText>
              <S.AccompanyDateInputWrapper>
                <ToolTip
                  promptText={"행사일정이 노란색으로 표시됩니다."}
                  placement={"bottom"}
                >
                  <S.MyHelpOutlineIcon />
                </ToolTip>
                <DateRangePicker
                  eventDate={{
                    start: getDate(props.postData?.fetchPost.dateStart),
                    end: getDate(props.postData?.fetchPost.dateEnd),
                  }}
                  onChangeDatePicker={props.onChangeDatePicker}
                />
              </S.AccompanyDateInputWrapper>
            </S.DateWrapper>
            <S.MaxHeadCountWrapper>
              <S.ItemText>모집 인원</S.ItemText>
              <S.MaxHeadCount>
                <S.CountMinus id="-" onClick={props.onClickCount}>
                  -
                </S.CountMinus>
                <S.MaxHeadCountInput
                  defaultValue={1}
                  value={props.maxHeadCount}
                  readOnly
                />
                명
                <S.CountPlus id="+" onClick={props.onClickCount}>
                  +
                </S.CountPlus>
              </S.MaxHeadCount>
            </S.MaxHeadCountWrapper>
          </S.DateAndMaxHeadCountWrapper>
          <S.ItemsWrapper>
            <S.ItemText>글 내용</S.ItemText>
            <S.MyReactQuill
              placeholder="내용을 입력해주세요.(1000자 이내)"
              onChange={props.onChangeQuill}
            />
          </S.ItemsWrapper>
        </S.MainWrapper>
      </S.UpperWrapper>
      <S.UnderWrapper>
        <S.ItemsWrapper>
          <S.ItemText>나의 한 줄 설명</S.ItemText>
          <S.RemarkInput
            placeholder="행사나 나 자신에 대한 한 줄 설명을 적어주세요! 동행 게시글 목록에 노출됩니다."
            {...props.register("remark")}
          />
        </S.ItemsWrapper>
        <S.EventLocationWrapper>
          <S.ItemText>모임 위치</S.ItemText>
          <S.MapWrapper>
            <S.TransportationWrapper>
              <S.TransportationSelect
                onClick={props.onClickTransportSelect}
                isDropTransport={props.isDropTransport}
              >
                <S.MyArrowRightIcon isDropTransport={props.isDropTransport} />
                이동수단선택
              </S.TransportationSelect>
              <S.Transportation isDropTransport={props.isDropTransport}>
                {props.transportation.map((el: any) =>
                  props.selectedTransport.includes(el.transportName) ? (
                    <S.TransportationItemSelected
                      key={uuidv4()}
                      onClick={props.onClickSelectTransportation(
                        el.transportName
                      )}
                    >
                      <ToolTip
                        promptText={el.transportName}
                        placement={"right"}
                      >
                        <S.TransportationImg src={el.src} />
                      </ToolTip>
                    </S.TransportationItemSelected>
                  ) : (
                    <S.TransportationItem
                      key={uuidv4()}
                      onClick={props.onClickSelectTransportation(
                        el.transportName
                      )}
                    >
                      <ToolTip
                        promptText={el.transportName}
                        placement={"right"}
                      >
                        <S.TransportationImg src={el.src} />
                      </ToolTip>
                    </S.TransportationItem>
                  )
                )}
              </S.Transportation>
            </S.TransportationWrapper>
            <KaKaoMap
              setValue={props.setValue}
              isEdit={props.isEdit}
              postAddress={props.postData?.fetchPost.address}
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
                <S.ItemText>모임장소 설명</S.ItemText>
                <S.LocationExplainInput
                  placeholder="모임장소에 관해 설명해주세요!"
                  {...props.register("accompanyLocation")}
                />
              </S.ItemsWrapper>
            </S.AddressExplainWrapper>
          </S.MapWrapper>
        </S.EventLocationWrapper>
      </S.UnderWrapper>
      <S.ButtonWrapper>
        <S.CancelButton type="button">취소</S.CancelButton>
        <S.SubmitButton type="submit">등록</S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
