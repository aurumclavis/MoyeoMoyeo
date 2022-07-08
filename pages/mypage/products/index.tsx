import styled from "@emotion/styled";
import MyPageUserProducts from "../../../src/components/units/mypage/user/products/MyPageUserProducts.Container";
import MyPageUserSidebar from "../../../src/components/units/mypage/user/sidebar/MyPageUserSidebar.Container";
const Wrapper = styled.div`
  margin: 3.125rem 0;
  display: flex;
`;

export default function MyPageProductsPage() {
  return (
    <Wrapper>
      <MyPageUserSidebar />
      <MyPageUserProducts />
    </Wrapper>
  );
}
