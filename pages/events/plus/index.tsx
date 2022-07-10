import List from "../../../src/components/units/events/list/wrapper/List.Container";
import EventsPlus from "../../../src/components/units/events/list/plus/EventsPlus.Container";
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
      <EventsPlus />
    </Wrapper>
  );
}
