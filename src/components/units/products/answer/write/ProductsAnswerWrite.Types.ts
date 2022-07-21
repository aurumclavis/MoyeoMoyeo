import { Dispatch, SetStateAction } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ProductsAnswerWriteProps {
  setIsActiveAnswer: Dispatch<SetStateAction<boolean>>;
  id: string;
}
export interface ProductsAnswerWriteUIProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickCreateComment: (data: any) => void;
}
