import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import BoardWritePresenter from "./BoardWrite.presenter";

export default function BoardWriteContainer(props: any) {
  const { onClickMoveToPage } = useMoveToPage();
  const { register, handleSubmit, setValue, getValues, trigger } = useForm();
  const [address, setAddress] = useState("");

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
      maxHeadCount > 0 &&
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
  const eventData = { date: { start: "2022-07-15", end: "2022-07-26" } };

  // 등록 부분
  const onClickSubmit = (data: any) => {
    console.log(data);
    //왜 페이지이동이 안되지
    onClickMoveToPage(`/boards/${111}`);
  };
  return (
    <BoardWritePresenter
      setValue={setValue}
      register={register}
      handleSubmit={handleSubmit}
      isEdit={props.isEdit}
      eventData={eventData}
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
