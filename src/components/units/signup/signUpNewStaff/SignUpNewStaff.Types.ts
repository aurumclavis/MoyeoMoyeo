import {
  UseFormRegister,
  UseFormHandleSubmit,
  FormState,
  FieldValues,
} from "react-hook-form";

export interface ISignUpNewStaffUI {
  // watch:
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickCreateUser: (data: any) => void;
  onClickGetNumberAgain: () => void;
  onClickConfirm: () => void;
  onClickGetNumber: () => void;
  isDone?: boolean;
  isReadyForNum?: boolean;
  isActive?: boolean;
}
