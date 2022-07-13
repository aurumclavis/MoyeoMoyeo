import { ChangeEvent, useState } from "react";
import EventsWriteUI from "./EventsWrite.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object({
  title: yup
    .string()
    .max(50, "50자 이내로 입력해주세요.")
    .required("필수 입력 사항입니다."),
  period: yup
    .string()
    .max(100, "100자 이내로 입력해주세요.")
    .required("필수 입력 사항입니다."),
  marker: yup.string().max(400, "400자 이내로 입력해주세요."),
  contents: yup.string().required("필수 입력 사항입니다."),
});
export default function EventsWrite(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  const onClickAddressSearch = () => {
    setIsOpen(true);
  };

  const onCompleteAddressSearch = (data: any) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  return (
    <EventsWriteUI
      onChangeAddressDetail={onChangeAddressDetail}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onChangeFileUrls={onChangeFileUrls}
      isEdit={props.isEdit}
      data={props.data}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      fileUrls={fileUrls}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeContents={onChangeContents}
    />
  );
}
