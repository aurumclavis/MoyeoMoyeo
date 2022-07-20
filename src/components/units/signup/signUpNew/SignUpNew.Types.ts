import {
  UseFormRegister,
  UseFormHandleSubmit,
  FormState,
  FieldValues,
} from "react-hook-form";

export interface ISignUpNew {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickCreateUser: (data: any) => void;
  onClickGetNumberAgain: () => void;
  onClickConfirm: () => void;
  onClickGetNumber: () => void;
  isDone?: boolean;
  isReadyForNum?: boolean;
}
