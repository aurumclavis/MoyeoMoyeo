import styled from "@emotion/styled";
import { useMemo } from "react";
import {
  IAcceptButtonProps,
  IRefuseButtonProps,
  IRequestUserItemsProps,
  IRequestUserWrapperProps,
} from "../../../units/boards/board/boardDetail/BoardDetail.types";

export const RequestUserWrapper = styled.div`
  width: 90%;
  width: ${(props: IRequestUserWrapperProps) => !props.isDetailPage && "100%"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation-name: ${(props: IRequestUserWrapperProps) => props.el};
  animation-duration: 1.5s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  ${(props: IRequestUserWrapperProps) =>
    (props.requestAccepted === props.el || props.requestRefused === props.el) &&
    `@keyframes ${props.el} {30%{opacity:1;}50%{opacity:0.5;}60%{opacity:1;}70%{opacity:0;visibility:hidden;width:90%;height:auto;}70.01%{opacity:0;visibility:hidden;width:0;height:0;}100%{opacity:0;visibility:hidden;width:0;height:0;}}`}
`;
export const RequestUserName = styled.div`
  width: 36%;
  font-size: 1.1rem;
`;
export const AcceptButton = styled.button`
  width: 40%;
  ${(props: IAcceptButtonProps) => props.requestAcceptedBoolean && "width:60%;"}
  ${(props: IAcceptButtonProps) => props.requestRefusedBoolean && "width:0;"}
  border: none;
  border-radius: 5px;
  background-color: #00ad07;
  color: white;
  transition: 0.5s;
  cursor: pointer;
`;
export const RefuseButton = styled.button`
  width: 20%;
  ${(props: IRefuseButtonProps) => props.requestRefusedBoolean && "width:60%;"}
  ${(props: IRefuseButtonProps) => props.requestAcceptedBoolean && "width:0;"}
  border: none;
  border-radius: 5px;
  background-color: #d2d2d2;
  color: #323232;
  transition: 0.5s;
  cursor: pointer;
`;

export default function RequestUserItems(props: IRequestUserItemsProps) {
  return (
    <RequestUserWrapper
      isDetailPage={props.isDetailPage}
      el={props.el}
      requestAccepted={props.requestAccepted}
      requestRefused={props.requestRefused}
    >
      <RequestUserName>{props.el}</RequestUserName>
      <AcceptButton
        onClick={props.onClickAcceptRequest(props.el)}
        requestAcceptedBoolean={props.requestAccepted === props.el}
        requestRefusedBoolean={props.requestRefused === props.el}
      >
        {props.requestRefused === props.el ? "" : "수락하기"}
      </AcceptButton>
      <RefuseButton
        onClick={props.onClickRefuseRequest(props.el)}
        requestAcceptedBoolean={props.requestAccepted === props.el}
        requestRefusedBoolean={props.requestRefused === props.el}
      >
        {props.requestAccepted === props.el ? "" : "거절"}
      </RefuseButton>
    </RequestUserWrapper>
  );
}
