import LayoutHeaderUI from "./LayoutHeader.Presenter";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LayoutHeader() {
  const router = useRouter();
  // const [boards, setBoard] = useState(false);
  // const [events, setEvents] = useState(false);
  // const [products, setProducts] = useState(false);
  // const [mapage, setMaypage] = useState(false);

  // const onClickMoveToBoards = () => {
  //   setBoard(true);
  //   setEvents(false);
  //   setProducts(false);
  //   setMaypage(false);
  //   router.push("/boards");
  // };
  // const onClickMoveToEvents = () => {
  // setBoard(false);
  // setEvents(true);
  // setProducts(false);
  // setMaypage(false);
  //   router.push("/events");
  // };
  // const onClickMoveToProducts = () => {
  //   router.push("/products");
  // setBoard(false);
  // setEvents(false);
  // setProducts(true);
  // setMaypage(false);
  // };
  // const onClickMoveToMypage = () => {
  // setBoard(false);
  // setEvents(false);
  // setProducts(false);
  // setMaypage(true);
  //   router.push("/mypage/events");
  // };

  const onClickMoveToMain = () => {
    router.push("/");
  };
  const onClickMoveToLogin = () => {
    router.push("/login");
  };
  const onClickMoveToSignup = () => {
    router.push("/signup");
  };
  const [isOpen, setOpen] = useState(false);

  const onClickMobileMenu = () => {
    setOpen(prev => !prev);
  };

  const HEADER_MENUS = [
    { name: "동행하기", page: "/boards" },
    { name: "축제일정", page: "/events" },
    { name: "모여마켓", page: "/products" },
    { name: "마이페이지", page: "/mypage/events" },
  ];
  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) router.push(event.target.id);
  };

  return (
    <LayoutHeaderUI
      HEADER_MENUS={HEADER_MENUS}
      onClickMenu={onClickMenu}
      onClickMoveToMain={onClickMoveToMain}
      onClickMoveToLogin={onClickMoveToLogin}
      onClickMoveToSignup={onClickMoveToSignup}
      onClickMobileMenu={onClickMobileMenu}

      // isOpen={isOpen}
    />
  );
}
