import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useRef, useState } from "react";
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
  FETCH_LOGIN_USER,
} from "./BoardWrite.queries";
import { randomCoverImg } from "./randomCoverImg";

export default function BoardWriteContainer(props: any) {
  const { onClickMoveToPage } = useMoveToPage();
  const [eventIdForBoard] = useRecoilState(eventIdForBoardState);
  const { data: postData } = useQuery(FETCH_POST, {
    variables: {
      postId: eventIdForBoard,
    },
  });
  const { register, handleSubmit, setValue, trigger } = useForm();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadImages] = useMutation(UPLOAD_IMAGES);
  const { data: userData } = useQuery(FETCH_LOGIN_USER);
  console.log(userData?.fetchLoginUser.id);
  const onClickSubmit = async (data: any) => {
    try {
      console.log(
        "data",
        data,
        accompanyDate.start,
        accompanyDate.start,
        selectedTransport,
        maxHeadCount
      );
      const uploadResults = await uploadImages({
        variables: {
          files,
        },
      });
      console.log("upload", uploadResults, typeof uploadResults);

      const result = await createBoard({
        variables: {
          createBoardInput: {
            title: data.title,
            contents: data.contents,
            personCount: maxHeadCount,
            dateStart: accompanyDate.start,
            dateEnd: accompanyDate.start,
            transport: selectedTransport,
            boardAddress: {
              lat: data.LatLng.lat,
              lng: data.LatLng.lng,
              postal: address,
              address_description: data.accompanyLocation,
            },
            coverImgSrc: uploadResults.data.uploadImages[0],
            eventImageSrc: "",
            eventName: postData.fetchPost.title,
            eventStart: getDate(postData.fetchPost.dateStart),
            eventEnd: getDate(postData.fetchPost.dateEnd),
            eventCategory: postData.fetchPost.category,
          },
        },
      });
      onClickMoveToPage(`/boards/${result.data.createBoard.id}`)();
    } catch (error) {
      alert(error.message);
    }
  };
  // 지도 부분
  const postAddress = postData?.fetchPost.address;
  const [address, setAddress] = useState("");
  useEffect(() => {
    setAddress(postAddress);
  }, [postAddress]);

  // 랜덤커버이미지 부분
  const [randomCoverUrl, setRandomCoverUrl] = useState("");
  const category = postData?.fetchPost.category;
  useEffect(() => {
    setRandomCoverUrl(randomCoverImg(category));
  }, [category]);
  const onClickChangeRandomCover = () => {
    setRandomCoverUrl(randomCoverImg(category));
  };

  // 이미지 변경 부분
  const coverImgRef = useRef(null);
  const [previewUrls, setPreviewUrls] = useState(["", ""]);
  const [files, setFiles] = useState([undefined]);

  // 랜덤커버이미지 경로를 파일객체로 변환한 뒤 files 스테이트 변경
  useEffect(() => {
    let coverImageFile = {};
    const convertURLtoFile = async (url: string) => {
      const response = await fetch(url);
      const data = await response.blob();
      const ext = url?.split(".").pop();
      const filename = url?.split("/").pop();
      const metadata = { type: `image/${ext}` };
      coverImageFile = new File([data], filename!, metadata);
      setFiles([coverImageFile]);
    };
    convertURLtoFile(randomCoverUrl);
  }, [randomCoverUrl]);

  const onChangeImgInput = (number: string) => async (event: any) => {
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
  const onClickCount = (event: any) => {
    event.target.id === "+" && setMaxHeadCount((prev) => prev + 1);
    event.target.id === "-" &&
      maxHeadCount > 1 &&
      setMaxHeadCount((prev) => prev - 1);
  };

  // 글 내용 부분
  const onChangeQuill = (value: string) => {
    setValue("contents", value === "<p><br></br>" ? "" : value);
    trigger("contents");
  };

  // 이동수단 부분
  const [isDropTransport, setIsDropTransport] = useState(false);
  const onClickTransportSelect = () => {
    setIsDropTransport((prev) => !prev);
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
        selectedTransport.filter((el: any) => el !== transportName)
      );
      return;
    }
    setSelectedTransport([...selectedTransport, transportName]);
  };

  return (
    <BoardWritePresenter
      isEdit={props.isEdit}
      postData={postData}
      setValue={setValue}
      register={register}
      handleSubmit={handleSubmit}
      // eventData={eventData}
      randomCoverUrl={randomCoverUrl}
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
      isDropTransport={isDropTransport}
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
