import styled from "@emotion/styled";
import { useState } from "react";

const Item = styled.div`
  width: 90%;
  height: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #d2d2d2;
  background-color: white;
  ${(props: any) => props.isViewTotal && "background-color : #F1EEE9;"}
  ${(props: any) => props.clicked && "background-color : #F1EEE9;"}
  cursor: pointer;
`;

export default function EachItem(props: any) {
  const [isViewTotal] = useState(props.categoryName === "전체");
  const onClickItem = () => {
    props.setClickedIndex(props.index);
    props.setCategoryName(props.el);
    if (props.el === "전체") {
      props.setCategoryData(props.viewTypeData);
    } else {
      props.setCategoryData(
        props.viewTypeData.filter((el: any) => el.category === props.el)
      );
    }
  };

  return (
    <Item
      clicked={props.index === props.clickedIndex}
      isViewTotal={isViewTotal}
      onClick={onClickItem}
    >
      <div>{props.el}</div>
    </Item>
  );
}
