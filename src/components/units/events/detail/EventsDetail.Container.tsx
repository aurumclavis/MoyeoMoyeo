import EventsDetailUI from "./EventsDetail.Prsenter";
import { useRouter } from "next/router";

export default function EventsDetail() {
  const router = useRouter();

  const onClickMoveToList = () => {
    router.push("/events");
  };
  const currentUrl = `localhost:3000/events/${router.query._id}`;
  return (
    <>
      <EventsDetailUI
        onClickMoveToList={onClickMoveToList}
        currentUrl={currentUrl}
      />
    </>
  );
}
