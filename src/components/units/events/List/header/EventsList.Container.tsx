import EventsListUI from "./EventsList.Prsenter";
import { useState, useEffect } from "react";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";

export default function EventList() {
  const { onClickMoveToPage } = useMoveToPage();

  const [datePick, setDatePick] = useState(false);
  const [openEvents, setOpenEvents] = useState(false);
  const [ourEvents, setOurEvents] = useState(true);

  const onClickDate = () => {
    setDatePick(true);
    setOpenEvents(false);
    setOurEvents(false);
  };

  const onClickOpenEventTap = () => {
    setDatePick(false);
    setOpenEvents(true);
    setOurEvents(false);
  };
  const onClickOurEventTap = () => {
    setDatePick(false);
    setOpenEvents(false);
    setOurEvents(true);
  };

  return (
    <EventsListUI
      onClickMoveToPage={onClickMoveToPage}
      onClickOpenEventTap={onClickOpenEventTap}
      onClickOurEventTap={onClickOurEventTap}
      onClickDate={onClickDate}
      datePick={datePick}
      openEvents={openEvents}
      ourEvents={ourEvents}
    />
  );
}
