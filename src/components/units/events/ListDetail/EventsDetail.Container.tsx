import EventsDetailUI from "./EventsDetail.Prsenter";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";

// import { useLocation } from 'react-router-dom';

export default function EventsDetail() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();

  const currentUrl = `localhost:3000/events/list/${router.query._id}`;

  const [activedTab, setActivedTab] = useState("marker");
  const navRef = useRef(null);
  const makerRef = useRef(null);
  const contentsRef = useRef<HTMLDivElement>(null);
  const mapsRef = useRef<HTMLDivElement>(null);

  const onScrollNav = () => {
    if (navRef.current !== null) {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        navRef.current.style = "top:0";
      } else {
        navRef.current.style = "top:-200px";
      }
    }
  };
  const onClickMarker = e => {
    window.scrollTo({
      top: makerRef.current?.offsetTop - 50,
      behavior: "smooth",
    });
    setActivedTab(e.currentTarget.id);
  };
  const onClickContents = e => {
    window.scrollTo({
      top: contentsRef.current?.offsetTop - 50,
      behavior: "smooth",
    });
    setActivedTab(e.currentTarget.id);
  };
  const onClickMaps = e => {
    window.scrollTo({
      top: mapsRef.current?.offsetTop - 50,
      behavior: "smooth",
    });
    setActivedTab(e.currentTarget.id);
  };

  return (
    <>
      <EventsDetailUI
        currentUrl={currentUrl}
        activedTab={activedTab}
        makerRef={makerRef}
        contentsRef={contentsRef}
        mapsRef={mapsRef}
        navRef={navRef}
        onClickMoveToPage={onClickMoveToPage}
        onClickMarker={onClickMarker}
        onClickContents={onClickContents}
        onClickMaps={onClickMaps}
        onScrollNav={onScrollNav}
      />
    </>
  );
}
