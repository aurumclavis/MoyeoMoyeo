import { useRouter } from "next/router";
import { useState, useEffect, memo } from "react";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import * as S from "./MyPageUserSidebar.Styles";

// 포인트 충전 부분 주석 처리
function MyPageUserSidebar() {
  // const [visible, setVisible] = useState(false);
  // const onClickShowPointModal = () => {
  //   setVisible(true);
  // };
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [activedTab, setActivedTab] = useState(null);
  const [prevClick, setPrevClick] = useState(null);

  const onClickTab = (event) => {
    setActivedTab(event.currentTarget.id);
    onClickMoveToPage(event.currentTarget.id)();
  };

  useEffect(() => {
    // console.log(router.asPath.slice(8));
    setActivedTab(router.asPath.slice(8));
  }, []);

  return (
    <S.Wrapper>
      <S.SidebarWrapper>
        {/* <S.Title>마이페이지</S.Title> */}
        <S.ProfileWrapper>
          <S.ProfileImg src="../../icon/user2.png" />
          <S.ProfileContentsWrapper>
            <S.ProfileText>김철수님</S.ProfileText>
            <S.ProfileText>kim1234@gmail.com</S.ProfileText>
            {/* <S.PointWrapper>
            <S.ProfileText>6800P</S.ProfileText>
            <S.PointBtnWrapper>
              <S.PointBtn onClick={onClickShowPointModal}>충전</S.PointBtn>
            </S.PointBtnWrapper>
          </S.PointWrapper> */}
          </S.ProfileContentsWrapper>
        </S.ProfileWrapper>

        {/* 각 페이지 이동하는 탭 */}
        <S.TabWrapper>
          <S.TabItemWrapper
            isActive={activedTab === "events"}
            id="events"
            onClick={onClickTab}
          >
            <S.TabText>관심 행사</S.TabText>
          </S.TabItemWrapper>
          <S.TabItemWrapper
            isActive={activedTab === "boards"}
            id="boards"
            onClick={onClickTab}
          >
            <S.TabText>동행 내역</S.TabText>
          </S.TabItemWrapper>
          <S.TabItemWrapper
            isActive={activedTab === "products"}
            id="products"
            onClick={onClickTab}
          >
            <S.TabText>관심 상품</S.TabText>
          </S.TabItemWrapper>
          <S.TabItemWrapper
            isActive={activedTab === "buy"}
            id="buy"
            onClick={onClickTab}
          >
            <S.TabText>구매 내역</S.TabText>
          </S.TabItemWrapper>
          {/* <S.TabItemWrapper onClick={onClickMoveToPage("/mypage/point")}>
          <S.PointIcon />
          <S.TabText>내 포인트</S.TabText>
        </S.TabItemWrapper> */}
        </S.TabWrapper>

        {/* {visible && <Point setVisible={setVisible} />} */}
      </S.SidebarWrapper>
    </S.Wrapper>
  );
}

export default memo(MyPageUserSidebar);
