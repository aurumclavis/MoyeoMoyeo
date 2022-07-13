import styled from "@emotion/styled";
import EventList from "../../src/components/units/events/List/EventsList.Container";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default function EventsListPage() {
  return (
    <Wrapper>
      <EventList />
    </Wrapper>
  );
}
