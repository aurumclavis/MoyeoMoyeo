import styled from "@emotion/styled";
import MyPageUserBuy from "../../../src/components/units/mypage/user/buy/MyPageUserBuy.Container";
import MyPageUserSidebar from "../../../src/components/units/mypage/user/sidebar/MyPageUserSidebar.Container";
const Wrapper = styled.div`
  margin: 3.125rem 0;
  display: flex;
`;

export default function MyPageBuyPage() {
  return (
    <Wrapper>
      <MyPageUserSidebar />
      <MyPageUserBuy />
    </Wrapper>
  );
}
