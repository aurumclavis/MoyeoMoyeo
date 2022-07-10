import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import * as S from "./MyPageStaffSidebar.Styles";

// 포인트 내역 부분 주석 처리
export default function MyPageStaffSidebar() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [activedTab, setActivedTab] = useState(null);
  const onClickTab = (event) => {
    setActivedTab(event.currentTarget.id);
    onClickMoveToPage(event.currentTarget.id)();
  };

  useEffect(() => {
    // console.log(router.asPath.slice(8));
    setActivedTab(router.asPath.slice(14));
  }, []);

  return (
    <S.Wrapper>
      <S.SidebarWrapper>
        <S.Title>관리자페이지</S.Title>
        <S.ProfileWrapper>
          <S.ProfileImg src="../../icon/simbollogo2Big.png" />
          <S.ProfileContentsWrapper>
            <S.ProfileText>김철수님</S.ProfileText>
            <S.ProfileText>aaa@company.com</S.ProfileText>
          </S.ProfileContentsWrapper>
        </S.ProfileWrapper>

        {/* 각 페이지 이동하는 탭 */}
        <S.TabWrapper>
          <S.TabItemWrapper
            isActive={activedTab === "sell"}
            id="sell"
            onClick={onClickTab}
          >
            <S.TabText>판매 내역</S.TabText>
          </S.TabItemWrapper>
          <S.TabItemWrapper
            isActive={activedTab === "point"}
            id="point"
            onClick={onClickTab}
          >
            <S.TabText>포인트 내역</S.TabText>
          </S.TabItemWrapper>
        </S.TabWrapper>
      </S.SidebarWrapper>
    </S.Wrapper>
  );
}
