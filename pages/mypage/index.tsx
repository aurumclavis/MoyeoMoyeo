import { useState } from "react";
import styled from "@emotion/styled";
import MyPageUserSidebar from "../../src/components/units/mypage/user/sidebar";
import MyPageUserEvents from "../../src/components/units/mypage/user/events";
import MyPageUserBoards from "../../src/components/units/mypage/user/boards";
import MyPageUserProducts from "../../src/components/units/mypage/user/products";
import MyPageUserBuy from "../../src/components/units/mypage/user/buy";
import MyPageStaffSidebar from "../../src/components/units/mypage/staff/sidebar";
import MyPageStaffSell from "../../src/components/units/mypage/staff/sell";
import MyPageStaffEvents from "../../src/components/units/mypage/staff/events";
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
