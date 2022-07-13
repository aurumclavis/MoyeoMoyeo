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
        <S.Title>이벤트 등록</S.Title>
        <S.InputWrapper>
          <S.Label>제목</S.Label>
          <CommonInput type="text" placeholder="제목을 작성해주세요." />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <S.Quill />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>주소</S.Label>
          <S.ZipcodeWrapper>
            <S.Zipcode
              placeholder="07250"
              readOnly
              value={
                props.zipcode || props.data?.fetchBoard.boardAddress?.zipcode
              }
            />
            <S.SearchButton onClick={props.onClickAddressSearch}>
              우편번호 검색
            </S.SearchButton>
          </S.ZipcodeWrapper>
          {/* <S.Address
            readOnly
          /> */}
          <S.Address onChange={props.onChangeAddressDetail} />
        </S.InputWrapper>
        <S.ImageWrapper>
          <S.Label>사진첨부</S.Label>

          <div>dds</div>
        </S.ImageWrapper>
        <S.ButtonWrapper>
          <ButtonSubmit
            fontSize="1.25rem"
            isActive={props.formState.isValid}
            title="등록"
          />
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}
