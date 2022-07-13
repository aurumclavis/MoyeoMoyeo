import FestivalListUI from "./festivalList.Presenter";

export default function FestivalList(props) {
  return (
    <>
      <FestivalListUI openEvents={props.openEvents} />
    </>
  );
}
