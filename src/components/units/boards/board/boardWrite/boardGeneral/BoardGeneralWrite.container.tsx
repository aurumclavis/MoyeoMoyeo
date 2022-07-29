import { useMutation } from "@apollo/client";
import React, {
  ChangeEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { useMoveToPage } from "../../../../../commons/hooks/useMoveToPage";
import {
  CREATE_BOARD,
  UPLOAD_IMAGES,
  UPDATE_BOARD,
} from "./BoardGeneralWrite.queries";
import BoardGeneralWritePresenter from "./BoardGeneralWrite.presenter";
import { useRecoilState } from "recoil";
import { boardGeneralWriteState } from "../../../../../../commons/store";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { IBoardGeneralWriteContainerProps } from "./BoardGeneralWrite.types";

const TITLE_REGEXP = /^.{0,100}$/;
const CONTENTS_REGEXP = /^.{0,1000}$/;
const REMARKS_REGEXP = /^.{0,100}$/;

const schema = yup.object({
  title: yup
    .string()
    .matches(TITLE_REGEXP, "모여제목은 100자를 넘길 수 없습니다"),
  contents: yup
    .string()
    .matches(CONTENTS_REGEXP, "내용은 1000자를 넘길 수 없습니다"),
  remark: yup
    .string()
    .matches(REMARKS_REGEXP, "요약내용은 100자를 넘길 수 없습니다"),
});

export default function BoardGeneralWriteContainer(
  props: IBoardGeneralWriteContainerProps
) {
  const { onClickMoveToPage } = useMoveToPage();
  const [, setBoardGeneralWrite] = useRecoilState(boardGeneralWriteState);
  setBoardGeneralWrite(false);
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    reset,
    getValues,
    formState,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadImages] = useMutation(UPLOAD_IMAGES);

  // 입력검증 부분
  const inputValidation = (data: any) => {
    if (!data.title) return Modal.error({ content: "제목을 입력하세요." });
    if (!data.contents) return Modal.error({ content: "내용을 입력하세요." });
    if (!data.remark) return Modal.error({ content: "요약설명을 입력하세요." });
    if (!data.accompanyLocation)
      return Modal.error({ content: "모임장소를 입력하세요." });
    if (!accompanyDate.start)
      return Modal.error({ content: "동행시작일을 입력하세요." });
    if (!accompanyDate.end)
      return Modal.error({ content: "동행종료일을 입력하세요." });
    if (!selectedTransport)
      return Modal.error({ content: "이동수단을 입력하세요." });
  };
  useEffect(() => {
    if (formState.errors.title)
      Modal.error({ content: formState.errors.title?.message });
    if (formState.errors.contents)
      Modal.error({ content: formState.errors.contents?.message });
    if (formState.errors.remark)
      Modal.error({ content: formState.errors.remark?.message });
  }, [
    formState.errors.title,
    formState.errors.contents,
    formState.errors.remark,
  ]);

  // 등록부분
  const onClickSubmit = async (data: any) => {
    if (inputValidation(data)) return;
    let uploadResultsImage = "";
    let coverImageFile = {};
    const convertURLtoFile = async (url: any) => {
      const response = await fetch(url);
      const data = await response.blob();
      const ext = url?.split(".").pop();
      const filename = url?.split("/").pop();
      const metadata = { type: `image/${ext}` };
      coverImageFile = new File([data], filename!, metadata);
    };
    try {
      if (!props.isEdit) {
        if (files[0] === undefined) {
          await convertURLtoFile(randomCoverUrl);
          const uploadResults = await uploadImages({
            variables: {
              files: coverImageFile,
            },
          });
          uploadResultsImage = uploadResults.data.uploadImages[0];
        } else {
          const uploadResults = await uploadImages({
            variables: {
              files,
            },
          });
          uploadResultsImage = uploadResults.data.uploadImages[0];
        }
        const result = await createBoard({
          variables: {
            createBoardInput: {
              title: data.title,
              contents: data.contents,
              remark: data.remark,
              personCount: maxHeadCount,
              dateStart: accompanyDate.start,
              dateEnd: accompanyDate.end,
              transport: selectedTransport,
              boardAddress: {
                lat: data.LatLng.lat,
                lng: data.LatLng.lng,
                postal: address,
                address_description: data.accompanyLocation,
              },
              coverImgSrc: uploadResultsImage,
              eventImageSrc: "",
              eventName: "",
              eventStart: "",
              eventEnd: "",
              eventLocation: "",
              eventCategory: "일반",
            },
          },
        });
        onClickMoveToPage(`/boards/${result.data.createBoard.id}`)();
      } else {
        if (files[0] === undefined) {
          uploadResultsImage = props.data.fetchBoard.coverImage.src;
        } else {
          const uploadResults = await uploadImages({
            variables: {
              files,
            },
          });
          uploadResultsImage = uploadResults.data.uploadImages[0];
        }
        const result = await updateBoard({
          variables: {
            boardId: props.data.fetchBoard.id,
            updateBoardInput: {
              title: data.title,
              contents: data.contents,
              remark: data.remark,
              personCount: maxHeadCount,
              dateStart: accompanyDate.start,
              dateEnd: accompanyDate.end,
              transport: selectedTransport,
              boardAddress: {
                lat: data.LatLng.lat,
                lng: data.LatLng.lng,
                postal: address,
                address_description: data.accompanyLocation,
              },
              coverImgSrc: uploadResultsImage,
              eventImageSrc: "",
              eventName: "",
              eventStart: "",
              eventEnd: "",
              eventLocation: "",
              eventCategory: "일반",
            },
          },
        });
        onClickMoveToPage(`/boards/${result.data.updateBoard.id}`)();
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  // 지도 부분
  const [address, setAddress] = useState("");

  // 랜덤커버이미지 부분
  const [randomCoverUrl] = useState("/randomCoverImg/general/general.jpg");

  // 이미지 변경 부분
  const coverImgRef = useRef(null);
  const [previewUrls, setPreviewUrls] = useState([""]);
  const [files, setFiles] = useState([undefined]);
  const onChangeImgInput =
    (number: number) => async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) {
        alert("파일이 없습니다!!");
        return;
      }
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (data) => {
        if (typeof data.target?.result === "string") {
          const tempUrls = [...previewUrls];
          tempUrls[number] = data.target?.result;
          setPreviewUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[number] = file;
          setFiles(tempFiles);
        }
      };
    };
  const onClickMyCoverImg = () => {
    coverImgRef.current.click();
  };

  // 동행일자 데이트피커 부분
  const [accompanyDate, setAccompanyDate] = useState({ start: "", end: "" });
  const onChangeDatePicker = (event: any) => {
    const startMonth = event?.[0].month() + 1;
    const endMonth = event?.[1].month() + 1;
    const accompanyStartDate =
      event?.[0].year().toString() +
      "-" +
      startMonth.toString().padStart(2, "0") +
      "-" +
      event?.[0].date().toString().padStart(2, "0");
    const accompanyEndDate =
      event?.[1].year().toString() +
      "-" +
      endMonth.toString().padStart(2, "0") +
      "-" +
      event?.[1].date().toString().padStart(2, "0");
    setAccompanyDate({ start: accompanyStartDate, end: accompanyEndDate });
  };

  // 모집인원 부분
  const [maxHeadCount, setMaxHeadCount] = useState(1);
  const onClickCount = (event: MouseEvent<HTMLDivElement>) => {
    (event.target as HTMLDivElement).id === "+" &&
      setMaxHeadCount((prev) => prev + 1);
    (event.target as HTMLDivElement).id === "-" &&
      maxHeadCount > 1 &&
      setMaxHeadCount((prev) => prev - 1);
  };
  // 글 내용 부분
  const onChangeQuill = (value: string) => {
    setValue("contents", value === "<p><br></br>" ? "" : value);
    trigger("contents");
  };

  // 이동수단 부분
  const [isOpenTransport, setIsOpenTransport] = useState(false);
  const onClickTransportSelect = () => {
    setIsOpenTransport((prev) => !prev);
  };
  const transportation = [
    { transportName: "자전거", src: "/icon/bicycle.png" },
    { transportName: "버스", src: "/icon/bus.png" },
    { transportName: "기차", src: "/icon/train.png" },
    { transportName: "자동차", src: "/icon/car.png" },
    { transportName: "비행기", src: "/icon/airplane.png" },
    { transportName: "배", src: "/icon/ship.png" },
  ];
  const [selectedTransport, setSelectedTransport] = useState([]);
  const onClickSelectTransportation = (transportName: string) => () => {
    if (selectedTransport.includes(transportName)) {
      setSelectedTransport(
        selectedTransport.filter((el: string) => el !== transportName)
      );
      return;
    }
    setSelectedTransport([...selectedTransport, transportName]);
  };

  // 수정페이지일 때 디폴트값
  useEffect(() => {
    if (props.isEdit) {
      reset({
        contents: props.data?.fetchBoard.title,
      });
      setValue("title", props.data?.fetchBoard.title);
      setValue("remark", props.data?.fetchBoard.remark);
      setValue("LatLng", {
        lat: props.data?.fetchBoard.boardAddress.lat,
        lng: props.data?.fetchBoard.boardAddress.lng,
      });
      setValue(
        "accompanyLocation",
        props.data?.fetchBoard.boardAddress.address_description
      );
      setMaxHeadCount(Number(props.data?.fetchBoard.personCount));
      setAccompanyDate({
        start: props.data?.fetchBoard.dateStart,
        end: props.data?.fetchBoard.dateEnd,
      });
      setSelectedTransport(props.data?.fetchBoard.transport);
      setAddress(props.data?.fetchBoard.boardAddress.postal);
    }
  }, [props.data]);

  // 다음포스트 부분
  const [isOpen, setIsOpen] = useState(false);
  const onClickAddressSearch = () => {
    setIsOpen((prev) => !prev);
  };
  const onCompleteAddressSearch = (data: any) => {
    console.log("aaa", data.address);
    setAddress(data.address);
    setIsOpen(false);
  };

  return (
    <BoardGeneralWritePresenter
      isEdit={props.isEdit}
      data={props.data}
      setValue={setValue}
      getValues={getValues}
      register={register}
      handleSubmit={handleSubmit}
      randomCoverUrl={randomCoverUrl}
      coverImgRef={coverImgRef}
      onClickMyCoverImg={onClickMyCoverImg}
      onChangeImgInput={onChangeImgInput}
      previewUrls={previewUrls}
      onChangeDatePicker={onChangeDatePicker}
      onClickCount={onClickCount}
      maxHeadCount={maxHeadCount}
      onChangeQuill={onChangeQuill}
      onClickTransportSelect={onClickTransportSelect}
      isOpenTransport={isOpenTransport}
      transportation={transportation}
      onClickSelectTransportation={onClickSelectTransportation}
      selectedTransport={selectedTransport}
      address={address}
      setAddress={setAddress}
      onClickSubmit={onClickSubmit}
      onClickMoveToPage={onClickMoveToPage}
      isOpen={isOpen}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
    />
  );
}
