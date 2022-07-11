import * as S from "./LayoutHeader.Styles";

export default function LayoutHeaderUI(props) {
  return (
    <S.Wrapper>
      <S.InsideWrapper>
        {/* <S.MenuIcon /> */}
        <S.LogoMenuWrapper>
          <S.LogoImg
            src="/icon/mainlogo.png"
            onClick={props.onClickMoveToPage("/")}
          />
          <S.NavBarWrapper>
            <S.Menu
              isActive={props.activedTab === "/boards"}
              id="/boards"
              onClick={props.onClickTab}
            >
              동행하기
            </S.Menu>
            <S.Menu
              isActive={props.activedTab === "/events/list"}
              id="/events/list"
              onClick={props.onClickTab}
            >
              행사일정
            </S.Menu>
            <S.Menu
              isActive={props.activedTab === "/products"}
              id="/products"
              onClick={props.onClickTab}
            >
              모여마켓
            </S.Menu>
            <S.Menu
              isActive={props.activedTab === "/mypage/events"}
              id="/mypage/events"
              onClick={props.onClickTab}
            >
              마이페이지
            </S.Menu>
          </S.NavBarWrapper>
        </S.LogoMenuWrapper>
        <S.UserMenuWrapper>
          <S.UserMenu onClick={props.onClickMoveToPage("/login")}>
            로그인
          </S.UserMenu>
          <S.UserMenu onClick={props.onClickMoveToPage("/signup")}>
            회원가입
          </S.UserMenu>
        </S.UserMenuWrapper>
      </S.InsideWrapper>
    </S.Wrapper>
  );
}
