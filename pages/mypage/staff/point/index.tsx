import styled from "@emotion/styled";
import MyPageStaffPoint from "../../../../src/components/units/mypage/staff/point/MyPageStaffPoint.Container";
import MyPageStaffSidebar from "../../../../src/components/units/mypage/staff/sidebar/MyPageStaffSidebar.Container";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 3.125rem 0;
`;

export default function MyPageStaffPointPage() {
  return (
    <Wrapper>
      <MyPageStaffSidebar />
      <MyPageStaffPoint />
    </Wrapper>
  );
}
