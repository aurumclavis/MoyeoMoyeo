import { useState } from "react";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import Point from "../../../point/Point.container";
import * as S from "./MyPageUserSidebar.Styles";

export default function MyPageUserSidebar() {
  const [visible, setVisible] = useState(false);
  const { onClickMoveToPage } = useMoveToPage();
  const onClickShowPointModal = () => {
    setVisible(true);
  };
  return (
    <S.SidebarWrapper>
      <S.ProfileWrapper>
        <S.ProfileImg src="../../icon/simbollogo2Big.png" />
        <S.ProfileContentsWrapper>
          <S.ProfileText>김철수님</S.ProfileText>
          <S.ProfileText>kim1234@gmail.com</S.ProfileText>
          <S.PointWrapper>
            <S.ProfileText>6800P</S.ProfileText>
            <S.PointBtnWrapper>
              <S.PointBtn onClick={onClickShowPointModal}>충전</S.PointBtn>
            </S.PointBtnWrapper>
          </S.PointWrapper>
        </S.ProfileContentsWrapper>
      </S.ProfileWrapper>

      {/* 탭 눌러서 각 내역 확인 가능 */}
      <S.TabWrapper>
        <S.TabItemWrapper>
          <S.EventsIcon />
          <S.TabText>관심 행사</S.TabText>
        </S.TabItemWrapper>
        <S.TabItemWrapper>
          <S.PeopleIcon />
          <S.TabText>동행 내역</S.TabText>
        </S.TabItemWrapper>
        <S.TabItemWrapper>
          <S.FavoriteIcon />
          <S.TabText>관심 상품</S.TabText>
        </S.TabItemWrapper>
        <S.TabItemWrapper>
          <S.CartIcon />
          <S.TabText>구매 내역</S.TabText>
        </S.TabItemWrapper>
        <S.TabItemWrapper>
          <S.PointIcon />
          <S.TabText>내 포인트</S.TabText>
        </S.TabItemWrapper>
      </S.TabWrapper>
      {visible && <Point setVisible={setVisible} />}
    </S.SidebarWrapper>
  );
}
