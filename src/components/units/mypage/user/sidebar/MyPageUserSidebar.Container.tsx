import { memo } from "react";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../../commons/store";
import * as S from "./MyPageUserSidebar.Styles";
import { IMyPageSidebarProps } from "./MyPageUserSidebar.Types";

function MyPageUserSidebar(props: IMyPageSidebarProps) {
  const MENU_NAME = ["관심 행사", "동행 내역", "관심 상품", "결제 내역"];
  const [userInfo] = useRecoilState(userInfoState);
  const onClickTab = (index: number) => () => {
    props.setActivedIndex(index);
  };

  return (
    <S.Wrapper>
      <S.SidebarWrapper>
        {/* <S.Title>마이페이지</S.Title> */}
        <S.ProfileWrapper>
          <S.ProfileImg src="../../icon/user1.png" />
          <S.ProfileContentsWrapper>
            <S.ProfileText>{userInfo.name}</S.ProfileText>
            <S.ProfileText>{userInfo.email}</S.ProfileText>
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

export default memo(MyPageUserSidebar);
