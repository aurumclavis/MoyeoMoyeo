import { Modal } from "antd";
import styled from "@emotion/styled";
import { IMaxHeadCountChangeModalProps } from "../BoardDetail.types";

const MaxHeadCountWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
`;
const MaxHeadCount = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  padding-top: 0.7rem;
  margin-left: 0.5rem;
`;
const CountPlus = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2.5px;
  border: 1px solid #d2d2d2;
  border-radius: 50%;
  color: #73777b;
  cursor: pointer;
  transition: 0.2s;
  :active {
    background-color: #ffe69a;
  }
`;
const CountMinus = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2.5px;
  border: 1px solid #d2d2d2;
  border-radius: 50%;
  color: #73777b;
  cursor: pointer;
  transition: 0.2s;
  :active {
    background-color: #ffe69a;
  }
`;
const MaxHeadCountInput = styled.input`
  width: 2rem;
  height: 1.5rem;
  border: none;
  border-bottom: 1px solid #d2d2d2;
  outline: none;
  color: #323232;
  font-size: 1rem;
  text-align: center;
  ::placeholder {
    color: #d2d2d2;
    font-size: 1rem;
    text-align: center;
  }
`;

export default function MaxHeadCountChangeModal(
  props: IMaxHeadCountChangeModalProps
) {
  const handleCancel = () => {
    props.setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title="최대 인원을 설정하세요"
        visible={true}
        onOk={props.handleOk}
        onCancel={handleCancel}
      >
        <MaxHeadCountWrapper>
          <MaxHeadCount>
            <CountMinus id="-" onClick={props.onClickCount}>
              -
            </CountMinus>
            <MaxHeadCountInput
              defaultValue={props.maxHeadCount}
              value={props.maxHeadCount}
              readOnly
            />
            명
            <CountPlus id="+" onClick={props.onClickCount}>
              +
            </CountPlus>
          </MaxHeadCount>
        </MaxHeadCountWrapper>
      </Modal>
    </>
  );
}
