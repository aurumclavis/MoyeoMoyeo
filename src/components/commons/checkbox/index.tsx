import styled from "@emotion/styled";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 20px;
`;
const SeletAll = styled.span`
  margin-left: 5px;
  font-size: 0.825rem;
`;
const Data = styled.td`
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

export default function Checkbox() {
  const [checkList, setCheckList] = useState([]);
  console.log(checkList);

  const onClickCheckAll = () => {
    if (checkList.length !== dataList.length) {
      setCheckList(dataList);
    } else {
      setCheckList([]);
    }
  };

  const onCheckedItem = (list) => {
    if (checkList.every((cur) => cur.id !== list.id)) {
      setCheckList([...checkList, list]);
    } else {
      const result = checkList.filter((cur) => cur.id !== list.id);
      setCheckList(result);
    }
  };

  const isChecked = (list) => {
    return checkList.some((cur) => cur.id === list.id);
  };

  return (
    <Wrapper>
      <input
        type="checkbox"
        onChange={onClickCheckAll}
        checked={checkList.length === dataList.length}
      />
      <SeletAll>모두 선택</SeletAll>

      {dataList.map((list, index) => (
        <InputBox key={index}>
          <Input
            type="checkbox"
            onChange={() => onCheckedItem(list)}
            checked={isChecked(list)}
            id="checkbox_id"
          />
          <Data>{list.data}</Data>
        </InputBox>
      ))}
    </Wrapper>
  );
}

// react hook form
// {...register("checkbox",{
//   required:{
//     value:true,
//     message:'[필수]를 확인해주세요.'
//   }
// }}

// 토글
// el.id<3 &&( 아이디 값이 1,2면 옆에 [약관보기]

//
const dataList = [
  // { id: 1, data: "[필수] 만 14세 이상입니다." },
  { id: 1, data: "[필수] 개인정보 취급방침에 동의합니다." },
  { id: 2, data: "[필수] 이용약관에 동의합니다" },
  { id: 3, data: "[선택] 마켓팅 정보이용에 동의합니다." },
];
