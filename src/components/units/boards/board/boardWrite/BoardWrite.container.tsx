import { useMutation, useQuery } from "@apollo/client";
import React, {
  ChangeEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { eventIdForBoardState } from "../../../../../commons/store";
import { getDate } from "../../../../commons/getDate";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import BoardWritePresenter from "./BoardWrite.presenter";
import {
  CREATE_BOARD,
  FETCH_POST,
  UPLOAD_IMAGES,
  UPDATE_BOARD,
} from "./BoardWrite.queries";
import { IBoardWriteContainerProps } from "./BoardWrite.types";
import { randomCoverImg } from "./randomCoverImg";

export default function BoardWriteContainer(props: IBoardWriteContainerProps) {
  const { onClickMoveToPage } = useMoveToPage();
  const [eventIdForBoard] = useRecoilState(eventIdForBoardState);
  const { data: postData } = useQuery(FETCH_POST, {
    variables: {
      postId: eventIdForBoard,
    },
  });
  const { register, handleSubmit, setValue, trigger, reset, getValues } =
    useForm({
      mode: "onChange",
    });
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadImages] = useMutation(UPLOAD_IMAGES);

  const onClickSubmit = async (data: any) => {
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
              // remark : data.remark,
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
              eventName: postData.fetchPost.title,
              eventStart: getDate(postData.fetchPost.dateStart),
              eventEnd: getDate(postData.fetchPost.dateEnd),
              eventCategory: postData.fetchPost.category,
            },
          },
        });
        onClickMoveToPage(`/boards/${result.data.createBoard.id}`)();
      } else {
        if (!editPageRandomCover && files[0] === undefined) {
          uploadResultsImage = props.data.fetchBoard.coverImage.src;
        } else if (files[0] === undefined) {
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
        const result = await updateBoard({
          variables: {
            boardId: props.data.fetchBoard.id,
            updateBoardInput: {
              title: data.title,
              contents: data.contents,
              // remark : data.remark,
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
              eventName: props.data.fetchBoard.eventName,
              eventStart: props.data.fetchBoard.eventStart,
              eventEnd: props.data.fetchBoard.eventEnd,
              eventCategory: props.data.fetchBoard.eventCategory,
            },
          },
        });
        onClickMoveToPage(`/boards/${result.data.updateBoard.id}`)();
      }
    } catch (error) {
      alert(error.message);
    }
  };
  // 지도 부분
  const postAddress = postData?.fetchPost.address;
  const [address, setAddress] = useState("");
  useEffect(() => {
    !props.isEdit && setAddress(postAddress);
  }, [postAddress]);

  // 랜덤커버이미지 부분
  const [randomCoverUrl, setRandomCoverUrl] = useState("");
  const [editPageRandomCover, setEditPageRandomCover] = useState(false);
  useEffect(() => {
    setRandomCoverUrl(randomCoverImg(postData?.fetchPost.category));
  }, [postData?.fetchPost.category]);
  const onClickChangeRandomCover = () => {
    if (!props.isEdit) {
      setRandomCoverUrl(randomCoverImg(postData?.fetchPost.category));
    } else {
      setEditPageRandomCover(true);
      setRandomCoverUrl(randomCoverImg(props.data?.fetchBoard.eventCategory));
    }
  };

  // 이미지 변경 부분
  const coverImgRef = useRef(null);
  const [previewUrls, setPreviewUrls] = useState(["", ""]);
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

  return (
    <BoardWritePresenter
      isEdit={props.isEdit}
      data={props.data}
      postData={postData}
      setValue={setValue}
      getValues={getValues}
      register={register}
      handleSubmit={handleSubmit}
      randomCoverUrl={randomCoverUrl}
      editPageRandomCover={editPageRandomCover}
      onClickChangeRandomCover={onClickChangeRandomCover}
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
    />
  );
}
