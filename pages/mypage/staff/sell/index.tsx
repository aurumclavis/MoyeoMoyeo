import styled from "@emotion/styled";
import MyPageStaffSell from "../../../../src/components/units/mypage/staff/sell/MyPageStaffSell.Container";
import MyPageStaffSidebar from "../../../../src/components/units/mypage/staff/sidebar/MyPageStaffSidebar.Container";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 3.125rem 0;
`;

export default function MyPageStaffSellPage() {
  return (
    <Wrapper>
      <MyPageStaffSidebar />
      <MyPageStaffSell />
    </Wrapper>
  );
}
