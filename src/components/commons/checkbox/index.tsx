import styled from "@emotion/styled";
import { Dispatch, memo, SetStateAction, useState } from "react";
import PrivacyPolicy from "../../units/signup/signUpNew/PrivacyPolicy/PrivacyPolicy.Container";
import Policy from "../../units/signup/signUpNew/policy/policy.Container";

interface ICheckBoxProps {
  setIsVisible?: any;
  register?: any;
  setValue?: any;
  trigger?: any;
  id?: any;
  setChecked?: Dispatch<SetStateAction<boolean>>;
  setSecondChecked?: Dispatch<SetStateAction<boolean>>;
}
const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 20px;
  position: relative;
`;
const SelectAll = styled.span`
  margin-left: 5px;
  font-size: 0.825rem;
`;
const Data = styled.div`
  padding: 5px;
  font-size: 0.825rem;
`;
const InputBox = styled.div`
  display: flex;
  padding-left: 20px;
`;
const Input = styled.input`
  display: flex;
`;
const ShowModal = styled.span`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 0.825rem;
  color: #42c2ff;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
const Checkbox = memo((props: ICheckBoxProps) => {
  const [checkList, setCheckList] = useState([]);

  // 이용약관 모달
  const [visible, setVisible] = useState(false);
  const onClickShowPolicyModal = () => {
    setVisible(true);
  };
  // 개인정보 모달
  const [Isvisible, setIsVisible] = useState(false);
  const onClickShowModal = () => {
    setIsVisible(true);
  };

  // 체크박스 전체
  const onClickCheckAll = () => {
    if (checkList.length !== dataList.length) {
      setCheckList(dataList);
    } else {
      setCheckList([]);
    }
  };

  // 체크박스 개별
  const onCheckedItem = (list: any) => {
    if (checkList.every((cur) => cur.id !== list.id)) {
      setCheckList([...checkList, list]);
      if (list.id === 1) {
        props.setChecked(true);
      }
      if (list.id === 2) {
        props.setSecondChecked(true);
      }
    } else {
      const result = checkList.filter((cur) => cur.id !== list.id);
      if (list.id === 1) {
        props.setChecked(false);
      }
      if (list.id === 2) {
        props.setSecondChecked(false);
      }
      setCheckList(result);
    }
  };

  const isChecked = (list: any) => {
    return checkList.some((cur: any) => cur.id === list.id);
  };
  return (
    <Wrapper>
      <input
        type="checkbox"
        onChange={onClickCheckAll}
        checked={checkList.length === dataList.length}
      />
      <SelectAll>모두 선택</SelectAll>
      {dataList.map((list, index) => (
        <InputBox key={index}>
          <Input
            type="checkbox"
            onChange={() => onCheckedItem(list)}
            checked={isChecked(list)}
          />
          <Data>{list.data}</Data>

          {list.id === 1 && (
            <ShowModal onClick={onClickShowModal}>
              [개인정보 취급방침확인]
            </ShowModal>
          )}
          {list.id === 2 && (
            <ShowModal onClick={onClickShowPolicyModal}>
              [이용약관확인]
            </ShowModal>
          )}
        </InputBox>
      ))}

      {visible && <Policy setVisible={setVisible} />}
      {Isvisible && <PrivacyPolicy setIsVisible={setIsVisible} />}
    </Wrapper>
  );
});
export default Checkbox;
// 체크박스 data

const dataList = [
  { id: 1, data: "[필수] 개인정보 취급방침에 동의합니다." },
  { id: 2, data: "[필수] 이용약관에 동의합니다" },
  { id: 3, data: "[선택] 마켓팅 정보이용에 동의합니다." },
];
