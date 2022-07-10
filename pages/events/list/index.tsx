import EventsList from "../../../src/components/units/events/list/festival/EventsList.Container";
import List from "../../../src/components/units/events/list/wrapper/List.Container";
import styled from "@emotion/styled";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export default function EventsListPage() {
  return (
    <Wrapper>
      <List />
      <EventsList />
    </Wrapper>
  );
}
