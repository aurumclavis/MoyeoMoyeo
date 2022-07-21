import {
  UseFormRegister,
  UseFormHandleSubmit,
  FormState,
  FieldValues,
} from "react-hook-form";

export interface ILoginNew {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickToLogin: (data: any) => void;
}
