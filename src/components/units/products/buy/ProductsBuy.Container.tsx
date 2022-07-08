import styled from "@emotion/styled";
import { Modal, Button } from "antd";
import * as S from "./ProductsBuy.Styles";
import { v4 as uuid } from "uuid";
declare const window: typeof globalThis & {
  IMP: any;
};
interface IPointProps {
  setVisible?: any;
}
const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PointSelect = styled.select`
  width: 360px;
  height: 40px;
  border: none;
  border-bottom: 1px solid black;
  font-size: 18px;
`;
export default function ProductsBuy(props: IPointProps) {
  return (
    <S.Wrapper>
      <S.IconWrapper>
        <S.CancelIcon
          onClick={() => {
            props.setVisible(false);
          }}
        />
      </S.IconWrapper>
      <S.Title>구매하기</S.Title>
      <S.SubmitButton>구매완료</S.SubmitButton>
    </S.Wrapper>

    // <Modal
    //   visible={true}
    //   onCancel={() => {
    //     props.setVisible(false);
    //   }}
    //   footer={[<S.SubmitButton key={uuid()}>충전하기</S.SubmitButton>]}
    // >
    //   <ModalWrapper>
    //     <S.Title>구매하기</S.Title>
    //     {/* <PointSelect id="price-select" onChange={onChangeSelect}>
    //       <option defaultValue="500">500원</option>
    //       <option value="1000">1000원</option>
    //       <option value="2000">2000원</option>
    //       <option value="5000">5000원</option>
    //     </PointSelect> */}
    //   </ModalWrapper>
    // </Modal>
  );
}
