import styled from "@emotion/styled";
import MyPageStaffSell from "../../../../src/components/units/mypage/staff/sell/MyPageStaffSell.Container";
import MyPageStaffSidebar from "../../../../src/components/units/mypage/staff/sidebar/MyPageStaffSidebar.Container";
const Wrapper = styled.div`
  margin: 3.125rem 0;
  display: flex;
`;

export default function MyPageStaffSellPage() {
  return (
    <Wrapper>
      <MyPageStaffSidebar />
      <MyPageStaffSell />
    </Wrapper>
  );
}
