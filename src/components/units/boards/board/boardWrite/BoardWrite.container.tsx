import { useState } from "react";
import { useForm } from "react-hook-form";
import BoardWritePresenter from "./BoardWrite.presenter";

export default function BoardWriteContainer(props: any) {
  const { register, handleSubmit, setValue } = useForm();
  const [address, setAddress] = useState("");
  return (
    <BoardWritePresenter
      setValue={setValue}
      isEdit={props.isEdit}
      address={address}
      setAddress={setAddress}
    />
  );
}
