import {
  FieldValues,
  FormState,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { ImageListType } from "react-images-uploading";

export interface IProductWriteUIProps {
  data?: any;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  isEdit?: boolean;
  imageList: Array<any>;
  onChangeContents: (value: string) => void;
  onChangeFiles: (
    value: ImageListType,
    addUpdateIndex?: number | undefined
  ) => void;
  onClickCreateProduct: (data: any) => void;
  onClickUpdateProduct: (data: any) => void;
}
export interface IProductWriteProps {
  isEdit?: boolean;
  data?: any;
}
export type IUpdateProductInput = {
  name?: string;
  price?: number;
  description?: string;
  contentSrc?: string;
  images?: Array<string>;
};
