import { ChangeEvent, useState } from "react";
import EventsWriteUI from "./EventsWrite.Presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { CREATE_POST, UPLOAD_IMAGES } from "./EventsWrite.Queries";
import { useMutation } from "@apollo/client";

import { Modal } from "antd";

const schema = yup.object({
  title: yup
    .string()
    .max(50, "50자 이내로 입력해주세요.")
    .required("필수 입력 사항입니다."),
  contents: yup.string().required("필수 입력 사항입니다."),
});
export default function EventsWrite(props) {
  const { onClickMoveToPage } = useMoveToPage();
  const [uploadImages] = useMutation(UPLOAD_IMAGES);
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState({ start: "", end: "" });
  const [address, setAddress] = useState("");
  const [category, setCategoy] = useState("");
  // 날짜 선택
  const [createPost] = useMutation(CREATE_POST);

  // const [fileMain, setMainFileUrls] = useState([""]);
  const [fileUrls, setFileUrls] = useState("");
  const [file, setFile] = useState<File>();

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  // const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (!file) {
  //     alert("파일이 없습니다 ");
  //     return;
  //   }
  //   const fileReader = new FileReader();
  //   fileReader.readAsDataURL(file);
  //   fileReader.onload = data => {
  //     if (typeof data.target?.result === "string") {
  //       console.log(data.target?.result);
  //       setFileUrls(data.target?.result);
  //       setFile(file);
  //     }
  //   };
  //   // const result = URL.createObjectURL(file);
  // };

  const onChangeCategory = e => {
    setCategoy(e.target.value);
  };

  const onClickSubmit = async data => {
    // const resultfile = await uploadImages({ variables: { files: file } });
    // const url = resultfile.data.uploadFile.url; // 리턴값..?
    try {
      await createPost({
        variables: {
          postInput: {
            title: data.title,
            address: address,
            dateStart: date.start,
            dateEnd: date.end,
            description: data.contents,
            mainImgSrc: "",
            subImgSrcs: ["", ""],
            category,
          },
        },
      });
      Modal.success({ content: "등록 완료" });
      onClickMoveToPage("/")();
    } catch (error) {
      alert(error);
    }
  };

  const onChangeDate = (e: any) => {
    const startMonth = e?.[0].month() + 1;
    const endMonth = e?.[1].month() + 1;
    const StartDate =
      e?.[0].year().toString() +
      "-" +
      startMonth.toString().padStart(2, "0") +
      "-" +
      e?.[0].date().toString().padStart(2, "0");
    const EndDate =
      e?.[1].year().toString() +
      "-" +
      endMonth.toString().padStart(2, "0") +
      "-" +
      e?.[1].date().toString().padStart(2, "0");
    setDate({ start: StartDate, end: EndDate });
    console.log(e);
  };

  const onClickAddressSearch = () => {
    setIsOpen(prev => !prev);
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

  return (
    <EventsWriteUI
      date={date}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      isEdit={props.isEdit}
      // data={props.data}
      isOpen={isOpen}
      address={address}
      onClickMoveToPage={onClickMoveToPage}
      onChangeDate={onChangeDate}
      onChangeContents={onChangeContents}
      // onChangeFileUrls={onChangeFile}
      onChangeCategory={onChangeCategory}
      onClickSubmit={onClickSubmit}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
    />
  );
}
