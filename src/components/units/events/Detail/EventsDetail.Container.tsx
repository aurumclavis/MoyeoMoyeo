import EventsDetailUI from "./EventsDetail.Prsenter";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import _, { throttle } from "lodash";

// import { useLocation } from 'react-router-dom';

export default function EventsDetail() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();

  const currentUrl = `localhost:3000/events/list/${router.query._id}`;

  const [activedTab, setActivedTab] = useState("maker");
  const makerRef = useRef(null);
  const contentsRef = useRef<HTMLDivElement>(null);
  const mapsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", onScrollNav);
  }, []);

  const onScrollNav = () => {
    if (makerRef.current !== null) {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 50
      ) {
        makerRef.current.style = "top:0";
      } else {
        makerRef.current.style = "top: -100px";
      }
    }
    if (
      document.documentElement.scrollTop >
      mapsRef.current?.offsetTop - contentsRef.current?.clientHeight
    ) {
      setActivedTab("maps");
    } else if (
      document.documentElement.scrollTop >
      contentsRef.current?.offsetTop - makerRef.current?.clientHeight
    ) {
      setActivedTab("contents");
    } else {
      setActivedTab("maker");
    }
  };

  const onClickMarker = e => {
    window.scrollTo({
      top: makerRef.current?.offsetTop - 50,
      behavior: "smooth",
    });
    setActivedTab(e.currentTarget.id);
    throttle(() => {
      setActivedTab(e.currentTarget.id);
    }, 500);
  };
  const onClickContents = e => {
    window.scrollTo({
      top: contentsRef.current?.offsetTop - 50,
      behavior: "smooth",
    });
    setActivedTab(e.currentTarget.id);
    throttle(() => {
      setActivedTab(e.currentTarget.id);
    }, 500);
  };
  const onClickMaps = e => {
    window.scrollTo({
      top: mapsRef.current?.offsetTop - 50,
      behavior: "smooth",
    });
    setActivedTab(e.currentTarget.id);
    throttle(() => {
      setActivedTab(e.currentTarget.id);
    }, 500);
  };
  const onClickLink = () => {
    alert("링크가 복사되었습니다");
  };

  return (
    <>
      <EventsDetailUI
        currentUrl={currentUrl}
        activedTab={activedTab}
        makerRef={makerRef}
        contentsRef={contentsRef}
        mapsRef={mapsRef}
        onClickMoveToPage={onClickMoveToPage}
        onClickMarker={onClickMarker}
        onClickContents={onClickContents}
        onClickMaps={onClickMaps}
        onScrollNav={onScrollNav}
        onClickLink={onClickLink}
      />
    </>
  );
}
