import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import * as S from "./MyPageStaffSidebar.Styles";

// 포인트 내역 부분 주석 처리
function MyPageStaffSidebar(props) {
  const MENU_NAME = ["판매 내역"];
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();

  const onClickTab = (index: number) => () => {
    props.setActivedIndex(index);
  };

  return (
    <S.Wrapper>
      {/* <S.Title>관리자페이지</S.Title> */}
      <S.SidebarWrapper>
        <S.ProfileWrapper>
          <S.ProfileImg src="../../icon/staff2.png" />
          <S.ProfileContentsWrapper>
            <S.ProfileText>김철수님</S.ProfileText>
            <S.ProfileText>aaa@company.com</S.ProfileText>
          </S.ProfileContentsWrapper>
        </S.ProfileWrapper>

        {/* 각 페이지 이동하는 탭 */}
        <S.TabWrapper>
          {MENU_NAME.map((el, index) => {
            return (
              <S.TabItemWrapper
                key={index}
                isActive={props.activedIndex === index}
                onClick={onClickTab(index)}
              >
                <S.TabText>{el}</S.TabText>
              </S.TabItemWrapper>
            );
          })}
        </S.TabWrapper>
      </S.SidebarWrapper>
    </S.Wrapper>
  );
}
export default memo(MyPageStaffSidebar);
