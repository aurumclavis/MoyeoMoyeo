import { WithAuth } from "../../../src/components/commons/hocs/withAuth";
import EventsWrite from "../../../src/components/units/events/write/EventsWrite.container";

function EventsWritePage() {
  return (
    <>
      <EventsWrite isEdit={false} />
    </>
  );
}

export default WithAuth(EventsWritePage);
