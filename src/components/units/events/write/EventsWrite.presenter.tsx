// import { Modal } from "antd";
// import DaumPostcode from "react-daum-postcode";
import * as S from "./EventsWrite.styles";
// import { v4 as uuidv4 } from "uuid";
import ButtonSubmit from "../../../commons/buttons/submit";
import CommonInput from "../../../commons/inputs/infoInputs";
import DateRangePicker from "./date/date";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export default function EventsWriteUI(props) {
  return (
    <>
      {/* {props.isOpen && (
        <Modal visible={true}>
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )} */}
      <S.Wrapper>
        <S.HeaderTitle>행사 등록</S.HeaderTitle>
        <S.InputWrapper>
          <S.RowWrapper>
            <S.TitleWrapper>
              <S.SubTitle>행사 제목</S.SubTitle>
              <CommonInput type="text" placeholder="제목을 작성해주세요." />
            </S.TitleWrapper>
            <S.DateWrapper>
              <S.SubTitle>행사 일정</S.SubTitle>
              {/* <S.DateWrapper>
            {props.date ? (
              <>
                {props.date.start} ~ {props.date.end}
              </>
            ) : (
              <>
                {props.defaultDate.start} ~ {props.defaultDate.end}
              </>)}
          </S.DateWrapper> */}
              <DateRangePicker
                date={props.defaultDate}
                onChangeDate={props.onChangeDate}
              />
            </S.DateWrapper>
          </S.RowWrapper>
          <S.SubTitle>행사 주소</S.SubTitle>
          <S.RowWrapper>
            <S.Address />
            <S.SearchButton onClick={props.onClickAddressSearch}>
              주소 검색
            </S.SearchButton>
          </S.RowWrapper>
          <S.SubTitle>상세 설명</S.SubTitle>
          <S.ContentQuill />
          <S.RowWrapper>
            <S.ImageWrapper>
              <S.SubTitle>대표 사진</S.SubTitle>
              <Upload listType="picture" maxCount={3} multiple>
                <Button icon={<UploadOutlined />}>사진등록</Button>
              </Upload>
            </S.ImageWrapper>
            <S.ImageWrapper>
              <S.SubTitle>전체 사진</S.SubTitle>
              <Upload listType="picture" maxCount={3} multiple>
                <Button icon={<UploadOutlined />}>사진등록</Button>
              </Upload>
            </S.ImageWrapper>
          </S.RowWrapper>
        </S.InputWrapper>
        <S.ButtonOutWrapper>
          <S.ButtonWrapper>
            <ButtonSubmit
              fontSize="1.25rem"
              isActive={props.formState.isValid}
              title="등록하기"
            />
          </S.ButtonWrapper>
          <S.CancleBtn onClick={props.onClickMoveToPage("/events")}>
            취소
          </S.CancleBtn>
        </S.ButtonOutWrapper>
      </S.Wrapper>
    </>
  );
}
