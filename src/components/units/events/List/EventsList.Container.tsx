import EventsListUI from "./EventsList.Prsenter";
import { useState, useEffect } from "react";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";

export default function EventList() {
  const { onClickMoveToPage } = useMoveToPage();
  const [activedTab, setActivedTab] = useState(null);
  const [openEvents, setOpenEvents] = useState(false);
  const [ourEvents, setOurEvents] = useState(true);

  const onClickEventTap = () => {
    setOpenEvents(prev => !prev);
    setOurEvents(prev => !prev);
  };

  return (
    <EventsListUI
      onClickEventTap={onClickEventTap}
      activedTab={activedTab}
      openEvents={openEvents}
      ourEvents={ourEvents}
    />
  );
}
