import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { eventIdForBoardState } from "../../../../../commons/store";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import BoardWritePresenter from "./BoardWrite.presenter";
import { CREATE_BOARD, FETCH_POST, UPLOAD_IMAGES } from "./BoardWrite.queries";
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

  const onClickSubmit = async (data: any) => {
    const uploadResults = await uploadImages({
      variables: {
        files,
      },
    });
    console.log(uploadResults);
    // const uploadResultsUrls = uploadResults.map((el) =>
    //   el ? el.data.uploadFile.url : ""
    // );
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            title: data.title,
            contents: data.contents,
            viewCount: 0,
            isFull: false,
            dateStart: accompanyDate.start,
            dateEnd: accompanyDate.end,
            transport: selectedTransport,
            boardAddress: {
              lat: data.LatLng.lat,
              lng: data.LatLng.lng,
              postal: "",
              address_description: data.accompanyLocation,
            },
            // coverImgSrc :
          },
        },
      });
      onClickMoveToPage(`/boards/${result.data.createBoard.id}`)();
    } catch (error) {
      alert(error.message);
    }
  };
  // 지도 부분
  const [address, setAddress] = useState("");

  // 랜덤커버이미지 부분
  const [randomCoverUrl, setRandomCoverUrl] = useState("");
  const category = postData?.fetchPost.category;
  useEffect(() => {
    setRandomCoverUrl(randomCoverImg(category));
  }, [category]);

  // 이미지 변경 부분
  const coverImgRef = useRef(null);
  const eventImgRef = useRef(null);
  const [previewUrls, setPreviewUrls] = useState(["", ""]);
  const [files, setFiles] = useState([undefined, undefined]);
  let aaa = {};

  useEffect(() => {
    // setFiles([convertURLtoFile(randomCoverUrl), ""]);
    const convertURLtoFile = async (url: string) => {
      const response = await fetch(url);
      const data = await response.blob();
      const ext = url?.split(".").pop();
      const filename = url?.split("/").pop();
      const metadata = { type: `image/${ext}` };
      aaa = new File([data], filename!, metadata);
      return aaa;
    };
    convertURLtoFile(randomCoverUrl);
    console.log("aaab", aaa);
    // const img = document.querySelector("#coverImage");
    // // console.log("bbb", img.src);
    // // const bstr = window.atob(img.src.split(",")[1])
    // let n = randomCoverUrl?.length;
    // const u8arr = new Uint8Array(n);
    // while (n--) {
    //   u8arr[n] = randomCoverUrl.charCodeAt(n);
    // }
    // const file = new File([u8arr], "aaa", { type: "mime" });
    // console.log("aaa", file);
  }, [randomCoverUrl]);
  // console.log(files);

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
  const onClickMyEventImg = () => {
    eventImgRef.current.click();
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
  const [maxHeadCount, setMaxHeadCount] = useState(0);
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
      coverImgRef={coverImgRef}
      eventImgRef={eventImgRef}
      onClickMyCoverImg={onClickMyCoverImg}
      onClickMyEventImg={onClickMyEventImg}
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
