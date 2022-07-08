import styled from "@emotion/styled";
import MyPageUserBoards from "../../../src/components/units/mypage/user/boards/MyPageUserBoards.Container";
import MyPageUserSidebar from "../../../src/components/units/mypage/user/sidebar/MyPageUserSidebar.Container";
const Wrapper = styled.div`
  margin: 3.125rem 0;
  display: flex;
`;

export default function MyPageBoardsPage() {
  return (
    <Wrapper>
      <MyPageUserSidebar />
      <MyPageUserBoards />
    </Wrapper>
  );
}
