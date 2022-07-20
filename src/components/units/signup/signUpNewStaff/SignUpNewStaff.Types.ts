import {
  UseFormRegister,
  UseFormHandleSubmit,
  FormState,
  FieldValues,
  UseFormWatch,
} from "react-hook-form";

export interface ISignUpNewStaffUI {
  watch: UseFormWatch<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickCreateUser: (data: any) => void;
  onClickConfirm: () => void;
  onClickGetNumber: () => void;
  isDone?: boolean;
  isReadyForNum?: boolean;
  isActive?: boolean;
}
