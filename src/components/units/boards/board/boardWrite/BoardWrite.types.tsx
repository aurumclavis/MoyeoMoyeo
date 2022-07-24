import {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  MutableRefObject,
  SetStateAction,
} from "react";

export interface IBoardWriteContainerProps {
  isEdit: boolean;
  data?: any;
}
export interface Transportation {
  transportName: string;
  src: string;
}
export interface IBoardWritePresenterProps {
  isEdit: boolean;
  data: any;
  postData: any;
  setValue: any;
  getValues: any;
  register: any;
  handleSubmit: any;
  randomCoverUrl: string;
  editPageRandomCover: boolean;
  onClickChangeRandomCover: (event: MouseEvent<HTMLDivElement>) => void;
  coverImgRef: MutableRefObject<HTMLInputElement>;
  onClickMyCoverImg: (event: MouseEvent<HTMLDivElement>) => void;
  onChangeImgInput: (
    el: any
  ) => (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  previewUrls: string[];
  onChangeDatePicker: any;
  onClickCount: (event: MouseEvent<HTMLDivElement>) => void;
  maxHeadCount: number;
  onChangeQuill: any;
  onClickTransportSelect: (event: MouseEvent<HTMLDivElement>) => void;
  isOpenTransport: boolean;
  transportation: Transportation[];
  onClickSelectTransportation: (
    el: string
  ) => (event: MouseEvent<HTMLDivElement>) => void;
  selectedTransport: string[];
  address: string;
  setAddress: Dispatch<SetStateAction<string>>;
  onClickSubmit: any;
  onClickMoveToPage: (
    el: string
  ) => (event: MouseEvent<HTMLButtonElement>) => void;
}
export interface ITransportationSelectProps {
  isOpenTransport: boolean;
}
export interface IMyArrowRightIconProps {
  isOpenTransport: boolean;
}
export interface ITransportationProps {
  isOpenTransport: boolean;
}
export interface EventData {
  start: string;
  end: string;
}
export interface IDateRangePickerProps {
  onChangeDatePicker: any;
  eventDate: EventData;
}
export interface IKaKaoMapProps {
  isEdit: boolean;
  postAddress: string;
  setValue: any;
  setAddress: Dispatch<SetStateAction<string>>;
  isEditAddress: any;
}
