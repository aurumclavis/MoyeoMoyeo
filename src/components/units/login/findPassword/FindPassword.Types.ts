import {
  UseFormRegister,
  UseFormHandleSubmit,
  FormState,
  FieldValues,
  UseFormWatch,
} from "react-hook-form";

export interface IFindPw {
  watch: UseFormWatch<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickGetNumber: () => void;
  isDone?: boolean;
  isActive?: boolean;
  isReadyForNum?: boolean;
  onClickToUpdatePW: (data: any) => void;
  onClickConfirm: () => void;
}
