import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import BoardDetailPresenter from "./BoardDetail.presenter";
import _, { throttle } from "lodash";

export default function BoardDetailContainer() {
  const router = useRouter();

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
  const [requestAccepted, setRequestAccepted] = useState(false);
  const [requestRefused, setRequestRefused] = useState(false);
  const onClickAcceptRequest = () => {
    setRequestAccepted(true);
  };
  const onClickRefuseRequest = () => {
    setRequestRefused(true);
  };
  // 열람자인 경우

  // 목업을 위한 하드코딩
  const lat = 37.5378;
  const lng = 126.8939;
  const [isMyBoard] = useState(true);
  const [isCompleted] = useState(false);
  const [isSendRequestUser] = useState(false);
  const onClickGoEventDetail = () => {
    router.push("");
  };
  return (
    <BoardDetailPresenter
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
      isMyBoard={isMyBoard}
      isCompleted={isCompleted}
      isSendRequestUser={isSendRequestUser}
      onClickGoEventDetail={onClickGoEventDetail}
      onClickAcceptRequest={onClickAcceptRequest}
      onClickRefuseRequest={onClickRefuseRequest}
      requestAccepted={requestAccepted}
      requestRefused={requestRefused}
    />
  );
}
