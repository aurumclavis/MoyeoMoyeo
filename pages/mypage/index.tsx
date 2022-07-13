import MyPageUserEvents from "../../src/components/units/mypage/user/events/MyPageUserEvents.Container";
import MyPageUserSidebar from "../../src/components/units/mypage/user/sidebar/MyPageUserSidebar.Container";
import styled from "@emotion/styled";
import MyPageUserBoards from "../../src/components/units/mypage/user/boards/MyPageUserBoards.Container";
import MyPageUserProducts from "../../src/components/units/mypage/user/products/MyPageUserProducts.Container";
import MyPageUserBuy from "../../src/components/units/mypage/user/buy/MyPageUserBuy.Container";
import { useState } from "react";
import MyPageStaffSidebar from "../../src/components/units/mypage/staff/sidebar/MyPageStaffSidebar.Container";
import MyPageStaffSell from "../../src/components/units/mypage/staff/sell/MyPageStaffSell.Container";

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
};

export default function MyPageEventsPage() {
  const [isStaff, setIsStaff] = useState(false);
  const [activedIndex, setActivedIndex] = useState(0);
  return (
    <>
      {!isStaff && (
        <Wrapper>
          <MyPageUserSidebar
            activedIndex={activedIndex}
            setActivedIndex={setActivedIndex}
          />
          {obj[activedIndex]}
        </Wrapper>
      )}
      {isStaff && (
        <Wrapper>
          <MyPageStaffSidebar
            activedIndex={0}
            setActivedIndex={setActivedIndex}
          />
          {staffObj[0]}
        </Wrapper>
      )}
    </>
  );
}
