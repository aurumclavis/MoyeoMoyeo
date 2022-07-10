import ListWrapperUI from "./List.Prsenter";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";

export default function List() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [activedTab, setActivedTab] = useState(null);
  const [prevClick, setPrevClick] = useState(null);

  const onClickTab = e => {
    setActivedTab(e.currentTarget.id);
    onClickMoveToPage(e.currentTarget.id)();
  };

  useEffect(() => {
    setActivedTab(router.asPath.slice(8));
  }, []);

  return (
    <ListWrapperUI
      onClickTab={onClickTab}
      activedTab={activedTab}
      prevClick={prevClick}
    />
  );
}
