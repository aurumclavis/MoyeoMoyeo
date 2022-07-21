import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

export interface IProductsPaymentUIProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  product_info: any;
  isVisible: boolean;
  onClickSearchAddress: () => void;
  onCompleteSearchAddress: (data: any) => void;
  onClickPayment: (data: any) => void;
}
export interface IActiveProps {
  isActive?: boolean;
}
