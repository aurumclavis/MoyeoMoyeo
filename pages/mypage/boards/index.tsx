import styled from "@emotion/styled";
import MyPageUserBoards from "../../../src/components/units/mypage/user/boards/MyPageUserBoards.Container";
import MyPageUserSidebar from "../../../src/components/units/mypage/user/sidebar/MyPageUserSidebar.Container";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 3.125rem 0;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export default function MyPageBoardsPage() {
  return (
    <Wrapper>
      <MyPageUserSidebar />
      <MyPageUserBoards />
    </Wrapper>
  );
}
