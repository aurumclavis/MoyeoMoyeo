import styled from "@emotion/styled";
import MyPageStaffPoint from "../../../../src/components/units/mypage/staff/point/MyPageStaffPoint.Container";
import MyPageStaffSidebar from "../../../../src/components/units/mypage/staff/sidebar/MyPageStaffSidebar.Container";
const Wrapper = styled.div`
  margin: 3.125rem 0;
  display: flex;
`;

export default function MyPageStaffPointPage() {
  return (
    <Wrapper>
      <MyPageStaffSidebar />
      <MyPageStaffPoint />
    </Wrapper>
  );
}
