import styled from "@emotion/styled";
import { useState } from "react";
import { breakPoints } from "../../../../../commons/styles/media";
import { IEachItemProps, IItemProps } from "../BoardList.types";

const Item = styled.div`
  width: 90%;
  height: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #d2d2d2;
  background-color: white;
  transition: 0.3s;
  ${(props: IItemProps) => props.isViewTotal && "background-color : #F1EEE9;"}
  ${(props: IItemProps) => props.clicked && "background-color : #F1EEE9;"}
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 90%;
    height: 3rem;
  }
`;

export default function EachItem(props: IEachItemProps) {
  const [isViewTotal] = useState(props.selectedCategoryName === "전체");
  const onClickItem = () => {
    props.setClickedIndex(props.index);
    props.setSelectedCategoryName(props.el);
    if (props.el === "전체") {
      props.setCategoryData(props.viewTypeData);
    } else {
      props.setCategoryData(
        props.viewTypeData.filter((el: any) => el.eventCategory === props.el)
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
