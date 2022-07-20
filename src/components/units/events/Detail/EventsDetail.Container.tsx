import EventsDetailUI from "./EventsDetail.Presenter";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import _, { throttle } from "lodash";
import { useRecoilState } from "recoil";
import { eventIdForBoardState } from "../../../../commons/store";
import { useMutation, useQuery } from "@apollo/client";
import { DIBS_POST, FETCH_POST } from "./EventsDetail.Queries";

// import { useLocation } from 'react-router-dom';

export default function EventsDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_POST, {
    variables: { postId: router.query._id },
  });
  console.log(data);
  const { onClickMoveToPage } = useMoveToPage();
  const [, setEventIdForBoard] = useRecoilState(eventIdForBoardState);

  const [dibsPost] = useMutation(DIBS_POST);

  const [activedTab, setActivedTab] = useState("marker");
  const currentUrl = `localhost:3000/events/${router.query._id}`;
  const navRef = useRef(null);
  const markerRef = useRef(null);
  const contentsRef = useRef<HTMLDivElement>(null);
  const mapsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", onScrollNav);
  }, []);

  const onClickMoveToBoardNew = () => {
    setEventIdForBoard(String(router.query._id));
    onClickMoveToPage("/boards/new")();
  };
  const onClickDibs = async () => {
    try {
      await dibsPost({
        variables: { postId: router.query._id },
        // refetchQueries: [
        //   {
        //     query: FETCH_POST,
        //     variables: { postId: router.query._id },
        //   },
        // ],
      });
      alert("찜했어요");
    } catch (error) {
      alert(error);
    }
  };

  const onScrollNav = _.throttle(() => {
    if (!markerRef.current) return;

    if (
      document.documentElement.scrollTop <=
      mapsRef.current?.offsetTop - navRef.current?.offsetHeight
    ) {
      setActivedTab("marker");
    }
    if (
      document.documentElement.scrollTop >=
        mapsRef.current?.offsetTop - navRef.current?.offsetHeight &&
      document.documentElement.scrollTop <=
        contentsRef.current?.offsetTop - navRef.current?.offsetHeight
    ) {
      setActivedTab("maps");
    }
    if (
      document.documentElement.scrollTop >=
      contentsRef.current?.offsetTop - navRef.current?.offsetHeight
    ) {
      setActivedTab("contents");
    }
  }, 500);

  const onClickMarker = e => {
    window.scrollTo({
      top: markerRef.current?.offsetTop - navRef.current?.offsetHeight,
      behavior: "smooth",
    });

    throttle(() => {
      setActivedTab(e.currentTarget.id);
    });
  };

  const onClickContents = e => {
    window.scrollTo({
      top: contentsRef.current?.offsetTop - navRef.current?.offsetHeight,
      behavior: "smooth",
    });

    throttle(() => {
      setActivedTab(e.currentTarget.id);
    });
  };

  const onClickMaps = e => {
    window.scrollTo({
      top: mapsRef.current?.offsetTop - navRef.current?.offsetHeight,
      behavior: "smooth",
    });
    throttle(() => {
      setActivedTab(e.currentTarget.id);
    });
  };
  const onClickLink = () => {
    alert("링크가 복사되었습니다");
  };
  console.log(data);
  const onClickEdit = () => {
    router.push(`/events/${router.query._id}/edit`);
  };

  return (
    <>
      <EventsDetailUI
        data={data}
        currentUrl={currentUrl}
        activedTab={activedTab}
        navRef={navRef}
        markerRef={markerRef}
        contentsRef={contentsRef}
        mapsRef={mapsRef}
        onClickMoveToPage={onClickMoveToPage}
        onClickMarker={onClickMarker}
        onClickContents={onClickContents}
        onClickMaps={onClickMaps}
        onScrollNav={onScrollNav}
        onClickDibs={onClickDibs}
        onClickLink={onClickLink}
        onClickMoveToBoardNew={onClickMoveToBoardNew}
        onClickEdit={onClickEdit}
      />
    </>
  );
}
