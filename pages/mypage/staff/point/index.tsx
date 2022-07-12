import styled from "@emotion/styled";
import NoDataFound from "../../../../src/components/units/mypage/noDataFound";
import MyPageStaffPoint from "../../../../src/components/units/mypage/staff/point/MyPageStaffPoint.Container";
import MyPageStaffSidebar from "../../../../src/components/units/mypage/staff/sidebar/MyPageStaffSidebar.Container";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 3.125rem 0;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export default function MyPageStaffPointPage() {
  return (
    <Wrapper>
      <MyPageStaffSidebar />
      {/* <MyPageStaffPoint /> */}
      <NoDataFound />
    </Wrapper>
  );
}
