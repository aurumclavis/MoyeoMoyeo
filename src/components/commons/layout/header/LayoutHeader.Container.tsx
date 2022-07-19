import LayoutHeaderUI from "./LayoutHeader.Presenter";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { LOGOUT } from "./LayoutHeader.Queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";

export default function LayoutHeader() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [activedTab, setActivedTab] = useState(null);
  const [prevClick] = useState(null);
  const [logout] = useMutation(LOGOUT);
  const onClickTab = e => {
    setActivedTab(e.currentTarget.id);
    onClickMoveToPage(e.currentTarget.id)();
  };
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isOpen, setIsOpen] = useState(false);

  const onClickMobileMenu = () => {
    setIsOpen(prev => !prev);
  };
  const onClickMobileLogo = () => {
    setIsOpen(false);
    onClickMoveToPage("/")();
  };
  const onClickMobileTab = e => {
    setIsOpen(false);
    onClickMoveToPage(e.currentTarget.id)();
  };

  useEffect(() => {
    setActivedTab(`/${router.asPath.split("/")[1]}`);
  });

  const onClickLogout = () => {
    logout();
    localStorage.removeItem("refreshToken");
    // setAccessToken("")
  };
  return (
    <LayoutHeaderUI
      onClickMobileLogo={onClickMobileLogo}
      onClickMobileMenu={onClickMobileMenu}
      accessToken={accessToken}
      activedTab={activedTab}
      prevClick={prevClick}
      onClickTab={onClickTab}
      onClickMobileTab={onClickMobileTab}
      isOpen={isOpen}
      onClickLogout={onClickLogout}
    />
  );
}
