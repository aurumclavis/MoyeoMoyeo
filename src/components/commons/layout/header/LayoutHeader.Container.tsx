import LayoutHeaderUI from "./LayoutHeader.Prsenter";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function LayoutHeader() {
  const router = useRouter();
  const HEADER_MENUS = [
    { name: "동행하기", page: "/boards" },
    { name: "축제일정", page: "/events" },
    { name: "모여마켓", page: "/products" },
    { name: "마이페이지", page: "/mypage" },
  ];
  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) router.push(event.target.id);
  };

  const onClickMoveToMain = () => {
    router.push("/");
  };
  const onClickMoveToLogin = () => {
    router.push("/login");
  };
  const onClickMoveToSignup = () => {
    router.push("/signup");
  };

  return (
    <LayoutHeaderUI
      HEADER_MENUS={HEADER_MENUS}
      onClickMenu={onClickMenu}
      onClickMoveToMain={onClickMoveToMain}
      onClickMoveToLogin={onClickMoveToLogin}
      onClickMoveToSignup={onClickMoveToSignup}
    />
  );
}
