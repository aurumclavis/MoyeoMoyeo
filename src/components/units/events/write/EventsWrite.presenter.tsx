// import { Modal } from "antd";
// import DaumPostcode from "react-daum-postcode";
import * as S from "./EventsWrite.styles";
// import { v4 as uuidv4 } from "uuid";
import ButtonSubmit from "../../../commons/buttons/submit";
import CommonInput from "../../../commons/inputs/infoInputs";

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
          <S.SubTitle>행사 제목</S.SubTitle>
          <CommonInput type="text" placeholder="제목을 작성해주세요." />
          <S.SubTitle>행사 주소</S.SubTitle>
          {/* <S.ZipcodeWrapper></S.ZipcodeWrapper> */}
          {/* <S.Address
            readOnly
          /> */}
          <S.SearchButton onClick={props.onClickAddressSearch}>
            주소 검색
          </S.SearchButton>
          <S.Address onChange={props.onChangeAddressDetail} />
          <S.SubTitle>요약글 입력</S.SubTitle>
          <S.Quill />
          <S.SubTitle>상세 설명</S.SubTitle>
          <S.ContentQuill />
          <S.ImageWrapper>
            <S.SubTitle>상세 사진</S.SubTitle>

            <div>dds</div>
          </S.ImageWrapper>
        </S.InputWrapper>
        <S.ButtonWrapper>
          <ButtonSubmit
            fontSize="1.25rem"
            isActive={props.formState.isValid}
            title="등록하기"
          />
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}
