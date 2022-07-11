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

  const [isOpen, setOpen] = useState(false);

  const onClickMobileMenu = () => {
    setOpen(prev => !prev);
  };

  return (
    <LayoutHeaderUI
      onClickMobileMenu={onClickMobileMenu}
      onClickMoveToPage={onClickMoveToPage}
      activedTab={activedTab}
      prevClick={prevClick}
      onClickTab={onClickTab}
      // isOpen={isOpen}
    />
  );
}
