import {
  UseFormRegister,
  UseFormHandleSubmit,
  FormState,
  FieldValues,
} from "react-hook-form";
// import { ChangeEvent } from "react";

export interface IEventsWrite {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  isOpen: boolean;
  onOk?: () => void;
  isEdit: boolean;
  postData?: any;
  data?: any;
  address: string;
  dateStartErorr: string;
  addressErorr: string;
  onClickMoveToPage: (path: any) => void;

  onChangeDate: (e: any) => void;
  onChangeContents: (value: string) => void;
  onChangeCategory: (value: string) => void;
  onClickSubmit: (data: any) => void;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: any) => void;
  onClickUpdate: (data: any) => void;
  onClickCancle: () => void;
  onChangeFilesMain: (fileUrl: string) => void;
  onChangeFilesSub: (fileUrl: string, index: number) => void;
  mainFileUrls: string[];
  subFileUrls: string[];
}

export interface ICompleteAddress {
  data: any;
}

export interface IUpdatePostInput {
  data?: any;
  title?: string;
  description?: string;
  address?: string;
  category?: string;
  dateStart?: string;
  dateEnd?: string;
  imgsrc?: Array<string>;
}

export interface IEventsWriteProps {
  isEdit: boolean;
  data?: any;
}
