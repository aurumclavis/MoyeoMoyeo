import React, {
  Dispatch,
  MouseEvent,
  MutableRefObject,
  SetStateAction,
} from "react";

export interface IBoardDetailPresenterProps {
  data: any;
  userData: any;
  requestUserData: any;
  isMyBoard: boolean;
  isCompleted: boolean;
  isSendRequestUser: boolean;
  navRef: MutableRefObject<HTMLDivElement>;
  detailRef: MutableRefObject<HTMLDivElement>;
  commentRef: MutableRefObject<HTMLDivElement>;
  eventRef: MutableRefObject<HTMLDivElement>;
  activeTab: string;
  onClickDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickEvent: (event: MouseEvent<HTMLDivElement>) => void;
  onClickComment: (event: MouseEvent<HTMLDivElement>) => void;
  lat: number;
  lng: number;
  roadView: boolean;
  onClickRoadView: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickExitRoadView: (event: MouseEvent<HTMLDivElement>) => void;
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  onClickChangeMaxCount: (event: MouseEvent<HTMLImageElement>) => void;
  handleOk: (event: MouseEvent<HTMLButtonElement>) => void;
  maxHeadCount: number;
  onClickCount: (event: MouseEvent<HTMLDivElement>) => void;
  onClickChangeRecruitState: (
    el: string
  ) => (event: MouseEvent<HTMLButtonElement>) => void;
  onClickRequestAccompany: (
    el: string
  ) => (event: MouseEvent<HTMLButtonElement>) => void;
  onClickAcceptRequest: (
    el: string
  ) => (event: MouseEvent<HTMLButtonElement>) => void;
  onClickRefuseRequest: (
    el: string
  ) => (event: MouseEvent<HTMLButtonElement>) => void;
  requestAccepted: string;
  requestRefused: string;
  onClickMoveToPage: (
    el: string
  ) => (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface ITitleProps {
  isCompleted: boolean;
}
export interface IAccompanyRequestButtonProps {
  isSendRequestUser: boolean;
  isCompleted: boolean;
}

export interface IMaxHeadCountChangeModalProps {
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  handleOk: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickCount: (event: MouseEvent<HTMLDivElement>) => void;
  maxHeadCount: number;
}
export interface IToolTipProps {
  promptText: string;
  placement: any;
  children: React.ReactNode;
}

export interface IKaKaoMapFetchProps {
  lat: number;
  lng: number;
  eventName: string;
  address: string;
}
export interface IKaKaoRoadViewProps {
  lat: number;
  lng: number;
  onClickExitRoadView: (event: MouseEvent<HTMLDivElement>) => void;
}
export interface IRequestUserListProps {
  requestUsers: string[];
  isDetailPage: boolean;
  requestAccepted: string;
  requestRefused: string;
  onClickAcceptRequest: (
    el: string
  ) => (event: MouseEvent<HTMLButtonElement>) => void;
  onClickRefuseRequest: (
    el: string
  ) => (event: MouseEvent<HTMLButtonElement>) => void;
}
export interface IRequestUserItemsProps {
  el: string;
  isDetailPage: boolean;
  requestAccepted: string;
  requestRefused: string;
  onClickAcceptRequest: (
    el: string
  ) => (event: MouseEvent<HTMLButtonElement>) => void;
  onClickRefuseRequest: (
    el: string
  ) => (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface IRequestUserWrapperProps {
  isDetailPage: boolean;
  requestAccepted: string;
  requestRefused: string;
  el: string;
}
export interface IAcceptButtonProps {
  requestAcceptedBoolean: boolean;
  requestRefusedBoolean: boolean;
}
export interface IRefuseButtonProps {
  requestAcceptedBoolean: boolean;
  requestRefusedBoolean: boolean;
}
