import { useState } from "react";
import EventsWriteUI from "./EventsWrite.Presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { CREATE_POST, UPDATE_POST, UPLOAD_IMAGES } from "./EventsWrite.Queries";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { IEventsWriteProps, IUpdatePostInput } from "./EventsWrite.Type";

const schema = yup.object({
  title: yup
    .string()
    .max(50, "50자 이내로 입력해주세요.")
    .required("필수 입력 사항입니다."),
  contents: yup.string().required("필수 입력 사항입니다."),
  // address: yup.string().required("필수 입력 사항입니다."),
  category: yup.string().required("필수 입력 사항입니다."),
});

export default function EventsWrite(props: IEventsWriteProps) {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [isOpen, setIsOpen] = useState(false);

  // 날짜 선택
  const [createPost] = useMutation(CREATE_POST);
  const [updatePost] = useMutation(UPDATE_POST);
  // 이미지
  const [uploadImages] = useMutation(UPLOAD_IMAGES);
  const [mainFileUrls, setMainFileUrls] = useState([""]);
  const [subFileUrls, setSubFileUrls] = useState([]);
  const [fileUrls] = useState([...mainFileUrls, ...subFileUrls]);
  // 스테이트 입력 값
  const [address, setAddress] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [addressErorr, setAddressErorr] = useState("");
  const [dateStartErorr, setDateStartErorr] = useState("");

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };
  const onChangeCategory = (value: string) => {
    setValue("category", value);
    trigger("category");
  };

  const onClickSubmit = async (data: any) => {
    if (!address) {
      setAddressErorr("주소를 입력해주세요.");
      return;
    }
    if (!dateStart || !dateEnd) {
      setDateStartErorr("정확한 일정을 선택해주세요");
      return;
    }
    const imageUpload = await uploadImages({
      variables: {
        files: fileUrls,
      },
    });
    try {
      const result = await createPost({
        variables: {
          postInput: {
            title: data.title,
            address,
            dateStart,
            dateEnd,
            description: data.contents,
            category: data.category,
            imgSrcs: imageUpload.data?.uploadImages,
          },
        },
      });
      Modal.success({ content: "행사 등록이 완료되었습니다." });
      router.push(`/events${result.data.createPost.id}`);
    } catch (error: any) {
      Modal.error({ content: "행사 등록에 실패했습니다" });
    }
  };

  const onClickUpdate = async (data: any) => {
    try {
      const updatePostInput: IUpdatePostInput = {};
      if (data.title) updatePostInput.title = data.title;
      if (data.contents) updatePostInput.description = data.contents;
      if (data.address) updatePostInput.address = data.address;
      if (data.category) updatePostInput.category = data.category;
      if (dateStart) updatePostInput.title = dateStart;
      if (dateEnd) updatePostInput.dateEnd = dateEnd;
      await updatePost({
        variables: {
          postId: router.query.id,
          updatePostInput,
        },
      });
      Modal.success({ content: "게시글이 수정되었습니다." });
      router.push(`/events/${router.query._id}`);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  // const onChangeFilesMain = (fileUrl: string) => () => {
  //   setMainFileUrls([fileUrl]);
  // };

  const onChangeFilesMain = (fileUrl: string) => {
    setMainFileUrls([fileUrl]);
  };

  const onChangeFilesSub = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setSubFileUrls(newFileUrls);
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
    setDateStart(StartDate);
    setDateEnd(EndDate);
  };

  const onClickAddressSearch = () => {
    setIsOpen(prev => !prev);
  };

  const onCompleteAddressSearch = (data: any) => {
    setAddress(data.address);
    setIsOpen(false);
  };
  const onClickCancle = () => {
    router.push("/event");
  };

  return (
    <EventsWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      isEdit={props.isEdit}
      postData={props.data}
      isOpen={isOpen}
      address={address}
      onClickMoveToPage={onClickMoveToPage}
      onChangeDate={onChangeDate}
      onChangeContents={onChangeContents}
      onChangeFilesMain={onChangeFilesMain}
      onChangeFilesSub={onChangeFilesSub}
      onChangeCategory={onChangeCategory}
      onClickSubmit={onClickSubmit}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickUpdate={onClickUpdate}
      onClickCancle={onClickCancle}
      addressErorr={addressErorr}
      dateStartErorr={dateStartErorr}
      mainFileUrls={mainFileUrls}
      subFileUrls={subFileUrls}
    />
  );
}
