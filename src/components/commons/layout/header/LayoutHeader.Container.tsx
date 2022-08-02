import LayoutHeaderUI from "./LayoutHeader.Presenter";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { LOGOUT } from "./LayoutHeader.Queries";
import { useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import { Modal } from "antd";

// import { accessTokenState, userInfoState } from "../../../../commons/store";

export default function LayoutHeader() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const { onClickMoveToPage } = useMoveToPage();
  const [activedTab, setActivedTab] = useState<string | null>(null);
  const [isStaff, setIstStaff] = useState<boolean | undefined>();

  const [logout] = useMutation(LOGOUT);

  const onClickTab = (e: any) => {
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
  const onClickMobileTab = (e: any) => {
    setIsOpen(false);
    onClickMoveToPage(e.currentTarget.id)();
  };

  // const resultUserInfo = useQuery(FETCH_LOGIN_USER);
  // localStorage.setItem("refreshToken", "true");

  useEffect(() => {
    setActivedTab(`/${router.asPath.split("/")[1]}`);
    // if (resultUserInfo.data?.manager) {
    //   setIstStaff(true);
    // }
    if (userInfo.manager) {
      setIstStaff(true);
    } else {
      setIstStaff(false);
    }
  });

  const onClickLogout = () => {
<<<<<<< HEAD
    // localStorage.removeItem("refreshToken");
    setAccessToken("");
    setUserInfo({
      email: "",
      name: "",
      company: "",
      pm: "",
      manager: "",
    });
    logout();
    Modal.success({
      content: "로그아웃 되셨습니다",
    });
=======
    setAccessToken("");
    logout();
    // localStorage.removeItem("refreshToken");
>>>>>>> a0730a2 (update)
  };
  return (
    <LayoutHeaderUI
      onClickMobileLogo={onClickMobileLogo}
      onClickMobileMenu={onClickMobileMenu}
      accessToken={accessToken}
      activedTab={activedTab}
      onClickTab={onClickTab}
      onClickMobileTab={onClickMobileTab}
      isOpen={isOpen}
      onClickLogout={onClickLogout}
      isStaff={isStaff}
    />
  );
}
