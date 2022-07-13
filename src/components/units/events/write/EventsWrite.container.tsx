import { ChangeEvent, useState } from "react";
import EventsWriteUI from "./EventsWrite.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { getDate } from "./date/getdate";

const schema = yup.object({
  title: yup
    .string()
    .max(50, "50자 이내로 입력해주세요.")
    .required("필수 입력 사항입니다."),
  period: yup
    .string()
    .max(100, "100자 이내로 입력해주세요.")
    .required("필수 입력 사항입니다."),
  contents: yup.string().required("필수 입력 사항입니다."),
});
export default function EventsWrite(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [date, setDate] = useState({ start: "", end: "" });
  // 날짜 선택
  let today = new Date();

  // const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const onChangeDate = (e: any) => {
    const startMonth = e?.[0].month() + 1;
    const endMonth = e?.[1].month() + 1;
    const accompanyStartDate =
      e?.[0].year().toString() +
      "-" +
      startMonth.toString().padStart(2, "0") +
      "-" +
      e?.[0].date().toString().padStart(2, "0");
    const accompanyEndDate =
      e?.[1].year().toString() +
      "-" +
      endMonth.toString().padStart(2, "0") +
      "-" +
      e?.[1].date().toString().padStart(2, "0");
    setDate({ start: accompanyStartDate, end: accompanyEndDate });
  };
  const defaultDate = { start: getDate(today), end: getDate(today) };

  const onClickAddressSearch = () => {
    setIsOpen(true);
  };

  const onCompleteAddressSearch = (data: any) => {
    setAddress(data.address);
    setIsOpen(false);
  };

  // const onChangeFileUrls = (fileUrl: string, index: number) => {
  //   const newFileUrls = [...fileUrls];
  //   newFileUrls[index] = fileUrl;
  //   setFileUrls(newFileUrls);
  // };

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
      onChangeDate={onChangeDate}
      date={date}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      isEdit={props.isEdit}
      defaultDate={defaultDate}
      data={props.data}
      isOpen={isOpen}
      address={address}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeContents={onChangeContents}
    />
  );
}
