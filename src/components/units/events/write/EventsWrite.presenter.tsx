import DaumPostcode from "react-daum-postcode";
import * as S from "./EventsWrite.styles";
// import { v4 as uuidv4 } from "uuid";
import ButtonSubmit from "../../../commons/buttons/submit";
import CommonInput from "../../../commons/inputs/infoInputs";
import DateRangePicker from "./date/date";
import { Modal } from "antd";
// import { UploadOutlined } from "@ant-design/icons";
import { IEventsWrite } from "./EventsWrite.Type";
// import { getDate } from "../../../commons/getDate";
import CommonUpload from "../../../commons/upload";
import { getDate } from "../../../commons/getDate";

export default function EventsWriteUI(props: IEventsWrite) {
  return (
    <>
      {props.isOpen && (
        <Modal
          visible={true}
          onOk={props.onCompleteAddressSearch}
          onCancel={props.onClickAddressSearch}
        >
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}

      <S.Wrapper>
        <S.FormWrapper
          onSubmit={props.handleSubmit(
            props.isEdit ? props.onClickUpdate : props.onClickSubmit
          )}
        >
          <S.HeaderTitle>행사 {props.isEdit ? "수정" : "등록"}</S.HeaderTitle>
          <S.InputWrapper>
            <S.RowWrapper>
              <S.TitleWrapper>
                <S.SubTitle>행사 제목</S.SubTitle>
                <CommonInput
                  register={props.register("title")}
                  type="text"
                  placeholder="제목을 작성해주세요."
                  // defaultValue={props.postData?.fetchPost.title}
                />
                <S.Error>{props.formState.errors.title?.message}</S.Error>
              </S.TitleWrapper>
              <S.DateWrapper>
                <S.SubTitle>행사 일정</S.SubTitle>
                <DateRangePicker
                  placeholder={
                    props.postData
                      ? [
                          getDate(props.postData?.fetchPost.dateStart),
                          getDate(props.postData?.fetchPost.dateEnd),
                        ]
                      : ["축제 시작일", "축제 종료일"]
                  }
                  onChangeDate={props.onChangeDate}
                  defaultValue={[
                    props.postData?.fetchPost.dateStart,
                    props.postData?.fetchPost.dateEnd,
                  ]}
                />
              </S.DateWrapper>
              <S.Error>{props.dateStartErorr}</S.Error>
            </S.RowWrapper>
            <S.SubTitle>행사 주소</S.SubTitle>
            <S.RowWrapper>
              <S.Address
                readOnly
                {...props.register("address")}
                defaultValue={props.data?.postData?.address}
                value={props.address || props.postData?.fetchPost.address}
              />
              <S.SearchButton onClick={props.onClickAddressSearch}>
                주소 검색
              </S.SearchButton>
            </S.RowWrapper>
            <S.Error>{props.addressErorr}</S.Error>

            <S.SubTitle>상세 설명</S.SubTitle>
            <S.Error>{props.formState.errors.contents?.message}</S.Error>
            <S.ContentQuill
              onChange={props.onChangeContents}
              // defaultValue={props.postData?.fetchPost.description}
              placeholder="축제에 대한 설명을 입력해주세요."
            />
            <S.RowWrapper>
              <S.ImageWrapper>
                <S.SubTitle>대표 사진</S.SubTitle>

                <CommonUpload
                  imageList={props.imageList}
                  onChangeFiles={props.onChangeFiles}
                />
              </S.ImageWrapper>
              <S.TypeWrapper>
                <S.SubTitle>행사 분류</S.SubTitle>
                <S.TypeSelect {...props.register("category")}>
                  <option value="">선택</option>
                  <option value={"축제"}>축제</option>
                  <option value={"문화"}>문화</option>
                  <option value={"공연"}>공연</option>
                  <option value={"실외공연"}>실외공연</option>
                  <option value={"뮤지컬"}>뮤지컬</option>
                  <option value={"클래식"}>클래식</option>
                  <option value={"전시"}>전시</option>
                  <option value={"플리마켓"}>플리마켓</option>
                  <option value={"기타"}>기타</option>
                </S.TypeSelect>
                <S.Error>{props.formState.errors.category?.message}</S.Error>
              </S.TypeWrapper>
            </S.RowWrapper>
          </S.InputWrapper>
          <S.ButtonOutWrapper>
            <S.ButtonWrapper>
              <ButtonSubmit
                fontSize="1.25rem"
                isActive={true}
                title="등록하기"
              />
            </S.ButtonWrapper>
            <S.CancleBtn onClick={props.onClickCancle}>취소</S.CancleBtn>
          </S.ButtonOutWrapper>
        </S.FormWrapper>
      </S.Wrapper>
    </>
  );
}
