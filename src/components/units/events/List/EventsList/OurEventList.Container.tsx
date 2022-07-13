import OurEventListUI from "./OurEventList.Presenter";

export default function OurEventList(props) {
  return <OurEventListUI ourEvents={props.ourEvents} />;
}
