import LayoutHeaderUI from "./LayoutHeader.Presenter";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";

export default function LayoutHeader() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [activedTab, setActivedTab] = useState(null);
  const [prevClick] = useState(null);

  const onClickTab = e => {
    setActivedTab(e.currentTarget.id);
    onClickMoveToPage(e.currentTarget.id)();
  };

  const [isOpen, setIsOpen] = useState(false);

  const onClickMobileMenu = () => {
    setIsOpen(prev => !prev);
  };
  const onClickMobileTab = e => {
    setIsOpen(false);
    onClickMoveToPage(e.currentTarget.id)();
  };

  useEffect(() => {
    setActivedTab(`/${router.asPath.split("/")[1]}`);
  });

  return (
    <LayoutHeaderUI
      onClickMobileMenu={onClickMobileMenu}
      activedTab={activedTab}
      prevClick={prevClick}
      onClickTab={onClickTab}
      onClickMobileTab={onClickMobileTab}
      isOpen={isOpen}
    />
  );
}
