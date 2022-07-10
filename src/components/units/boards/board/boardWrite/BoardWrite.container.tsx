import { useState } from "react";
import { useForm } from "react-hook-form";
import BoardWritePresenter from "./BoardWrite.presenter";

export default function BoardWriteContainer(props: any) {
  const { register, handleSubmit, setValue } = useForm();
  const [address, setAddress] = useState("");
  const [isTransportSelect, setIsTransportSelect] = useState(false);
  const onClickTransportSelect = () => {
    setIsTransportSelect((prev) => !prev);
  };
  return (
    <BoardWritePresenter
      setValue={setValue}
      isEdit={props.isEdit}
      address={address}
      setAddress={setAddress}
      onClickTransportSelect={onClickTransportSelect}
      isTransportSelect={isTransportSelect}
    />
  );
}
