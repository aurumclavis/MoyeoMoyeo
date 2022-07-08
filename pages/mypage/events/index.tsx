import MyPageUserEvents from "../../../src/components/units/mypage/user/events/MyPageUserEvents.Container";
import MyPageUserSidebar from "../../../src/components/units/mypage/user/sidebar/MyPageUserSidebar.Container";
import styled from "@emotion/styled";
const Wrapper = styled.div`
  margin: 3.125rem 0;
  display: flex;
`;

export default function MyPageEventsPage() {
  return (
    <Wrapper>
      <MyPageUserSidebar />
      <MyPageUserEvents />
    </Wrapper>
  );
}
