import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IProductWriteUIProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onChangeContents: (value: string) => void;
  isEdit?: boolean;
  imageList: Array<any>;
  onChangeFiles: (imageList: any, addUpdateIndex: number) => void;
  onClickCreateProduct: (data: any) => void;
  onClickUpdateProduct: (data: any) => void;
  data?: any;
}
export interface IProductWriteProps {
  isEdit?: boolean;
  data?: any;
}
export interface IUpdateProductInput {
  name?: string;
  price?: number;
  description?: string;
  contentSrc?: string;
}
