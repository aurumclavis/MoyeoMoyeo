import styled from "@emotion/styled";
import { useState } from "react";

const Item = styled.div`
  width: 6.5rem;
  height: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #d2d2d2;
  ${(props: any) => props.clicked && "background-color : #F1EEE9;"}
  cursor: pointer;
`;

export default function EachItem(props: any) {
  const [clicked, setClicked] = useState(false);
  const onClickItem = () => {
    setClicked((prev) => !prev);
  };
  return (
    <Item clicked={clicked} onClick={onClickItem}>
      <div>{props.el}</div>
    </Item>
  );
}
