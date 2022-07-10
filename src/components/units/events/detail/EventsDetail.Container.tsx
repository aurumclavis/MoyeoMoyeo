import EventsDetailUI from "./EventsDetail.Prsenter";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
// import { useLocation } from 'react-router-dom';

export default function EventsDetail() {
  const router = useRouter();

  const onClickMoveToList = () => {
    router.push("/events");
  };
  const currentUrl = `localhost:3000/events/${router.query._id}`;

  useEffect(() => {
    const location = document.querySelector(".contents");
    const locationHeight = document.querySelector("#contents");

    // window.scrollTo({ top: location - locationHeight, behavior: "smooth" });
    window.addEventListener("scroll", onScrollNavbar);
  }, []);
  const navRef = useRef(null);
  const markerRef = useRef(null);
  const contentsRef = useRef(null);

  const onScrollNavbar = () => {
    if (navRef.current !== null) {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        navRef.current.style = "top:0";
      } else {
        navRef.current.style = location;
      }
    }
  };

  return (
    <>
      <EventsDetailUI
        onClickMoveToList={onClickMoveToList}
        navRef={navRef}
        currentUrl={currentUrl}
        markerRef={markerRef}
        contentsRef={contentsRef}
      />
    </>
  );
}
