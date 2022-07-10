import MyPageUserEvents from "../../../src/components/units/mypage/user/events/MyPageUserEvents.Container";
import MyPageUserSidebar from "../../../src/components/units/mypage/user/sidebar/MyPageUserSidebar.Container";
import styled from "@emotion/styled";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 3.125rem 0;
`;

export default function MyPageEventsPage() {
  return (
    <Wrapper>
      <MyPageUserSidebar />
      <MyPageUserEvents />
    </Wrapper>
  );
}
