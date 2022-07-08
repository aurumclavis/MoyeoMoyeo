import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import * as S from "./MyPageStaffSidebar.Styles";

export default function MyPageStaffSidebar() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.SidebarWrapper>
      <S.ProfileWrapper>
        <S.ProfileImg src="../../icon/simbollogo2Big.png" />
        <S.ProfileContentsWrapper>
          <S.ProfileText>김철수님</S.ProfileText>
          <S.ProfileText>aaa@company.com</S.ProfileText>
          <S.PointWrapper>
            <S.ProfileText>6800P</S.ProfileText>
            <S.PointBtnWrapper>
              <S.PointBtn>충전</S.PointBtn>
            </S.PointBtnWrapper>
          </S.PointWrapper>
        </S.ProfileContentsWrapper>
      </S.ProfileWrapper>

      {/* 탭 눌러서 각 내역 확인 가능 */}
      <S.TabWrapper>
        <S.TabItemWrapper>
          <S.CartIcon />
          <S.TabText>판매 내역</S.TabText>
        </S.TabItemWrapper>
        <S.TabItemWrapper>
          <S.PointIcon />
          <S.TabText>포인트 내역</S.TabText>
        </S.TabItemWrapper>
      </S.TabWrapper>
    </S.SidebarWrapper>
  );
}
