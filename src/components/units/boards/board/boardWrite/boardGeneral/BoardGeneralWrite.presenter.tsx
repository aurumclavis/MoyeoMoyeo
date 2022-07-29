import * as S from "./BoardGeneralWrite.styles";
import ToolTip from "../../../../../commons/tooltip";
import { v4 as uuidv4 } from "uuid";
import DateRangePicker from "../dateRangePicker";
import { getDate } from "../../../../../commons/getDate";
import {
  IBoardGeneralWritePresenterProps,
  Transportation,
} from "./BoardGeneralWrite.types";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import KaKaoMap from "../../../KaKaoMap/KaKaoMapForGeneral";

export default function BoardGeneralWritePresenter(
  props: IBoardGeneralWritePresenterProps
) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <S.CoverImageWrapper>
        {!props.isEdit ? (
          <S.CoverImage
            src={
              props.previewUrls[0] ? props.previewUrls[0] : props.randomCoverUrl
            }
          />
        ) : (
          <S.CoverImage
            src={
              props.previewUrls[0]
                ? props.previewUrls[0]
                : `https://storage.googleapis.com/${props.data?.fetchBoard.coverImage.src}`
            }
          />
        )}
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
        <S.MainWrapper>
          <S.ItemsWrapper>
            <S.ItemText>모여글 제목</S.ItemText>
            <S.TitleInput
              defaultValue={props.data?.fetchBoard.title}
              placeholder="제목을 입력해주세요.(50자 이내)"
              {...props.register("title")}
            />
          </S.ItemsWrapper>
          <S.DateAndMaxHeadCountWrapper>
            <S.DateWrapper>
              <S.ItemText>동행일자</S.ItemText>
              <S.AccompanyDateInputWrapper>
                <DateRangePicker
                  eventDate={
                    !props.isEdit
                      ? {
                          start: getDate(props.postData?.fetchPost.dateStart),
                          end: getDate(props.postData?.fetchPost.dateEnd),
                        }
                      : {
                          start: getDate(props.data?.fetchBoard.eventStart),
                          end: getDate(props.data?.fetchBoard.eventEnd),
                        }
                  }
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
                  defaultValue={
                    !props.isEdit ? 1 : props.data?.fetchBoard.personCount
                  }
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
              value={props.getValues("contents") || ""}
            />
          </S.ItemsWrapper>
        </S.MainWrapper>
      </S.UpperWrapper>
      <S.UnderWrapper>
        <S.ItemsWrapper>
          <S.ItemText>나의 한 줄 설명</S.ItemText>
          <S.RemarkInput
            placeholder="나 자신에 대한 한 줄 설명을 적어주세요! 동행 게시글 목록에 노출됩니다."
            {...props.register("remark")}
            defaultValue={props.data?.fetchBoard.remark}
          />
        </S.ItemsWrapper>
        <S.EventLocationWrapper>
          <S.ItemText>모임 위치</S.ItemText>
          <S.MapWrapper>
            {props.isOpen && (
              <Modal
                visible={true}
                onOk={props.onCompleteAddressSearch}
                onCancel={props.onClickAddressSearch}
              >
                <DaumPostcode onComplete={props.onCompleteAddressSearch} />
              </Modal>
            )}
            <S.TransportationWrapper>
              <S.TransportationSelect
                onClick={props.onClickTransportSelect}
                isOpenTransport={props.isOpenTransport}
              >
                <S.MyArrowRightIcon isOpenTransport={props.isOpenTransport} />
                이동수단선택
              </S.TransportationSelect>
              <S.Transportation isOpenTransport={props.isOpenTransport}>
                {props.transportation.map((el: Transportation) =>
                  props.selectedTransport?.includes(el.transportName) ? (
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
              address={props.address}
              setAddress={props.setAddress}
              isEdit={props.isEdit}
              isEditAddress={props.data?.fetchBoard.boardAddress}
            />
            <S.AddressExplainWrapper>
              <S.ItemsWrapper>
                <S.ItemText>주소</S.ItemText>
                <S.AddressInput
                  readOnly
                  placeholder="검색이나 지도클릭시 자동 입력됩니다."
                  defaultValue={props.data?.fetchBoard.boardAddress.postal}
                  value={props.address}
                />
              </S.ItemsWrapper>
              <S.ItemsWrapper>
                <S.ItemText>모임장소 설명</S.ItemText>
                <S.LocationExplainInput
                  placeholder="모임장소에 관해 설명해주세요!"
                  {...props.register("accompanyLocation")}
                  defaultValue={
                    props.data?.fetchBoard.boardAddress.address_description
                  }
                />
              </S.ItemsWrapper>
              <S.SearchAddressButton
                type="button"
                onClick={props.onClickAddressSearch}
              >
                주소로 검색
              </S.SearchAddressButton>
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
