import { FieldValues, UseFormRegister } from "react-hook-form";

export interface IProductsWriteUIProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: any;
  formState: any;
  onChangeContents: (value: string) => void;
  isEdit?: boolean;
}
export interface IProductsWriteProps {
  isEdit?: boolean;
}
