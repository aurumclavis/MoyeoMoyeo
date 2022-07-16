import { useRouter } from "next/router";
import { useState, useEffect, memo, Dispatch, SetStateAction } from "react";
import * as S from "./MyPageUserSidebar.Styles";
interface IMyPageUserSidebarProps {
  activedIndex: number;
  setActivedIndex: Dispatch<SetStateAction<number>>;
}

// 포인트 충전 부분 주석 처리
function MyPageUserSidebar(props: IMyPageUserSidebarProps) {
  const MENU_NAME = ["관심 행사", "동행 내역", "관심 상품", "구매 내역"];
  // const [visible, setVisible] = useState(false);
  // const onClickShowPointModal = () => {
  //   setVisible(true);
  // };

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
            <S.ProfileText>김철수님</S.ProfileText>
            <S.ProfileText>kim1234@gmail.com</S.ProfileText>
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
