import EventsDetailUI from "./EventsDetail.Presenter";
import { useRouter } from "next/router";
import { useEffect, useRef, useState, MouseEvent } from "react";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import _, { throttle } from "lodash";
import { useRecoilState } from "recoil";
import {
  dibsPostState,
  eventIdForBoardState,
  userInfoState,
} from "../../../../commons/store";
import { useMutation, useQuery } from "@apollo/client";
import {
  DELETE_POST,
  DIBS_POST,
  FETCH_POST,
  UNDIBS_POST,
} from "./EventsDetail.Queries";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

export default function EventsDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_POST, {
    variables: { postId: router.query._id },
  });
  const [userInfo] = useRecoilState(userInfoState);

  const [deletePost] = useMutation(DELETE_POST);
  const { onClickMoveToPage } = useMoveToPage();
  const [, setEventIdForBoard] = useRecoilState(eventIdForBoardState);

  const [dibsPost] = useMutation(DIBS_POST);
  const [unDibsPost] = useMutation(UNDIBS_POST);
  const [dibsId, setDibsId] = useRecoilState(dibsPostState);

  const [activedTab, setActivedTab] = useState("marker");
  const currentUrl = `moyeomoyeo.site/events/${router.query._id}`;
  const navRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);
  const contentsRef = useRef<HTMLDivElement>(null);
  const mapsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", onScrollNav);
    window.removeEventListener("scroll", () => {
      return onScrollNav;
    });
  }, []);

  const onClickMoveToBoardNew = () => {
    setEventIdForBoard(String(router.query._id));
    onClickMoveToPage("/boards/new")();
  };
  const onClickMoveToList = () => {
    onClickMoveToPage("/events")();
  };

  const onClickDibs = async () => {
    if (!dibsId) {
      try {
        await dibsPost({
          variables: { postId: router.query._id },
          refetchQueries: [
            {
              query: FETCH_POST,
              variables: { postId: router.query.id },
            },
          ],
        });
        Modal.success({ content: "행사를 찜했습니다" });
      } catch (error) {
        Modal.error({ content: "행사 찜하기가 실패했습니다" });
      }
    } else {
      try {
        await unDibsPost({
          variables: { postId: router.query._id },
        });
        setDibsId("");
        Modal.success({
          content: "행사 찜하기를 해제합니다.",
        });
      } catch (error) {
        if (error instanceof Error)
          Modal.error({ content: "행사 찜해제가 실패했습니다" });
      }
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

  const onClickMarker = (e: MouseEvent<HTMLDivElement>) => {
    window.scrollTo({
      top: markerRef.current?.offsetTop - navRef.current?.offsetHeight,
      behavior: "smooth",
    });

    throttle(() => {
      setActivedTab(e.currentTarget.id);
    });
  };

  const onClickContents = (e: MouseEvent<HTMLDivElement>) => {
    window.scrollTo({
      top: contentsRef.current?.offsetTop - navRef.current?.offsetHeight,
      behavior: "smooth",
    });

    throttle(() => {
      setActivedTab(e.currentTarget.id);
    });
  };

  const onClickMaps = (e: MouseEvent<HTMLDivElement>) => {
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

  const onClickEdit = () => {
    router.push(`/events/${router.query._id}/edit`);
  };

  const onClickDelete = async () => {
    try {
      await deletePost({
        variables: {
          postId: router.query._id,
        },
        // refetchQueries: [{ query: FETCH_POST }],
      });
      router.push(`/events`);
      Modal.success({ content: "행사가 삭제되었습니다" });
    } catch (error) {
      Modal.error({ content: "행사 삭제가 실패했습니다" });
    }
  };
  const onClickShowConfirm = () => {
    Modal.confirm({
      title: "본 행사를 삭제하시겠습니까?",
      icon: <ExclamationCircleOutlined />,
      content: "삭제한 이후에는 취소가 불가능합니다.",
      onOk() {
        onClickDelete();
      },
      onCancel() {},
    });
  };

  return (
    <>
      <EventsDetailUI
        data={data}
        userInfo={userInfo}
        currentUrl={currentUrl}
        activedTab={activedTab}
        navRef={navRef}
        markerRef={markerRef}
        contentsRef={contentsRef}
        mapsRef={mapsRef}
        onClickMoveToList={onClickMoveToList}
        onClickMarker={onClickMarker}
        onClickContents={onClickContents}
        onClickMaps={onClickMaps}
        onScrollNav={onScrollNav}
        onClickDibs={onClickDibs}
        onClickLink={onClickLink}
        onClickMoveToBoardNew={onClickMoveToBoardNew}
        onClickEdit={onClickEdit}
        onClickShowConfirm={onClickShowConfirm}
      />
    </>
  );
}
