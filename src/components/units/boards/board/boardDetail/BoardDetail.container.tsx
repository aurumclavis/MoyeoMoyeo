import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import BoardDetailPresenter from "./BoardDetail.presenter";
import _, { throttle } from "lodash";

export default function BoardDetailContainer() {
  const router = useRouter();
  // 목업을 위한 하드코딩
  const lat = 37.5378;
  const lng = 126.8939;
  const [isMyBoard] = useState(true);
  const [isSendRequestUser] = useState(false);
  const [isCompleted] = useState(false);

  // 네비 부분
  const [activeTab, setActiveTab] = useState("detail");
  const navRef = useRef(null);
  const detailRef = useRef(null);
  const eventRef = useRef(null);
  const commentRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", myThrottle);
    return window.removeEventListener("scroll", () => {
      myThrottle;
    });
  });

  const myThrottle = _.throttle(() => {
    if (!navRef.current) return;
    document.documentElement.scrollTop > 130
      ? (navRef.current.style = "top:0")
      : (navRef.current.style = "top:-200px");

    if (
      commentRef.current?.getBoundingClientRect().top <
      navRef.current?.clientHeight + 100
    ) {
      setActiveTab("comment");
    } else if (
      eventRef.current?.getBoundingClientRect().top <
      navRef.current?.clientHeight + 100
    ) {
      setActiveTab("event");
    } else {
      setActiveTab("detail");
    }
  }, 50);

  const onClickDetail = (event: any) => {
    const detailAbsoluteTop =
      window.pageYOffset +
      detailRef.current?.getBoundingClientRect().top -
      navRef.current?.clientHeight;
    window.scrollTo({
      top: detailAbsoluteTop,
      behavior: "smooth",
    });
    throttle(() => {
      setActiveTab(event.currentTarget.id);
    }, 500);
  };
  const onClickEvent = (event: any) => {
    const eventAbsoluteTop =
      window.pageYOffset +
      eventRef.current?.getBoundingClientRect().top -
      navRef.current?.clientHeight;
    window.scrollTo({
      top: eventAbsoluteTop,
      behavior: "smooth",
    });
    throttle(() => {
      setActiveTab(event.currentTarget.id);
    }, 500);
  };
  const onClickComment = (event: any) => {
    const commentAbsoluteTop =
      window.pageYOffset +
      commentRef.current?.getBoundingClientRect().top -
      navRef.current?.clientHeight;
    window.scrollTo({
      top: commentAbsoluteTop,
      behavior: "smooth",
    });
    throttle(() => {
      setActiveTab(event.currentTarget.id);
    }, 500);
  };

  // 우측 날개부분
  // 작성자인 경우
  const [requestAccepted, setRequestAccepted] = useState("");
  const [requestRefused, setRequestRefused] = useState("");
  const onClickAcceptRequest = (el: string) => () => {
    setRequestAccepted(el);
  };
  const onClickRefuseRequest = (el: string) => () => {
    setRequestRefused(el);
  };
  // 인원 변경 모달
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onClickChangeMaxCount = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    // 아래 변경된 maxHeadCount로 동행인원 업데이트쿼리 날릴 예정
  };
  // 패치된 동행인원도 아래 스테이트에 담아 내려주기
  const [maxHeadCount, setMaxHeadCount] = useState(5);
  const onClickCount = (event: any) => {
    event.target.id === "+" && setMaxHeadCount((prev) => prev + 1);
    event.target.id === "-" &&
      maxHeadCount > 1 &&
      setMaxHeadCount((prev) => prev - 1);
  };

  // 로드뷰 부분
  const [roadView, setRoadView] = useState(false);
  const onClickRoadView = () => {
    setRoadView(true);
  };
  const onClickExitRoadView = () => {
    setRoadView(false);
  };

  // 동행하기 상세로 이동
  const onClickGoEventDetail = () => {
    router.push("");
  };
  return (
    <BoardDetailPresenter
      isMyBoard={isMyBoard}
      isCompleted={isCompleted}
      isSendRequestUser={isSendRequestUser}
      navRef={navRef}
      detailRef={detailRef}
      commentRef={commentRef}
      eventRef={eventRef}
      activeTab={activeTab}
      onClickDetail={onClickDetail}
      onClickEvent={onClickEvent}
      onClickComment={onClickComment}
      lat={lat}
      lng={lng}
      roadView={roadView}
      onClickRoadView={onClickRoadView}
      onClickExitRoadView={onClickExitRoadView}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      onClickChangeMaxCount={onClickChangeMaxCount}
      handleOk={handleOk}
      maxHeadCount={maxHeadCount}
      onClickCount={onClickCount}
      onClickGoEventDetail={onClickGoEventDetail}
      onClickAcceptRequest={onClickAcceptRequest}
      onClickRefuseRequest={onClickRefuseRequest}
      requestAccepted={requestAccepted}
      requestRefused={requestRefused}
    />
  );
}
