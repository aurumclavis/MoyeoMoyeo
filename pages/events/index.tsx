import styled from "@emotion/styled";
import EventList from "../../src/components/units/events/festival/EventsList.Container";
import ListHeader from "../../src/components/units/events/header/List.Container";
import EventPlus from "../../src/components/units/events/plus/EventsPlus.Container";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const IsideWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const LineDiv = styled.div`
  height: 100%;
  width: 3px;
  border-right: 1px solid #d2d2d2;
`;
export default function EventsListPage() {
  return (
    <Wrapper>
      <ListHeader />
      <IsideWrapper>
        <EventList />
        <LineDiv />
        <EventPlus />
      </IsideWrapper>
    </Wrapper>
  );
}
