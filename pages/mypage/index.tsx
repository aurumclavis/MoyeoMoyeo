import { useState } from "react";
import styled from "@emotion/styled";
import MyPageUserSidebar from "../../src/components/units/mypage/user/sidebar/MyPageUserSidebar.Container";
import MyPageUserEvents from "../../src/components/units/mypage/user/events/MyPageUserEvents.Container";
import MyPageUserBoards from "../../src/components/units/mypage/user/boards/MyPageUserBoards.Container";
import MyPageUserProducts from "../../src/components/units/mypage/user/products/MyPageUserProducts.Container";
import MyPageUserBuy from "../../src/components/units/mypage/user/buy/MyPageUserBuy.Container";
import MyPageStaffSidebar from "../../src/components/units/mypage/staff/sidebar/MyPageStaffSidebar.Container";
import MyPageStaffSell from "../../src/components/units/mypage/staff/sell/MyPageStaffSell.Container";
import MyPageStaffEvents from "../../src/components/units/mypage/staff/events/MyPageStaffEventsContainer";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../src/commons/store";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 3.125rem 0;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
const obj = {
  0: <MyPageUserEvents />,
  1: <MyPageUserBoards />,
  2: <MyPageUserProducts />,
  3: <MyPageUserBuy />,
};

const staffObj = {
  0: <MyPageStaffSell />,
  1: <MyPageStaffEvents />,
};

export default function MyPageEventsPage() {
  const [userInfo] = useRecoilState(userInfoState);
  const [activedIndex, setActivedIndex] = useState(0);
  return (
    <>
      {userInfo.name && (
        <Wrapper>
          <MyPageUserSidebar
            activedIndex={activedIndex}
            setActivedIndex={setActivedIndex}
          />
          {obj[activedIndex]}
        </Wrapper>
      )}
      {!userInfo.name && (
        <Wrapper>
          <MyPageStaffSidebar
            activedIndex={activedIndex}
            setActivedIndex={setActivedIndex}
          />
          {staffObj[activedIndex]}
        </Wrapper>
      )}
    </>
  );
}
