import * as S from "./LayoutHeader.Styles";

export default function LayoutHeaderUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.MenuIconWrapper>
          <S.MenuIcon onClick={props.onClickMobileMenu} />
        </S.MenuIconWrapper>
        <S.InsideWrapper>
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
              isActive={props.activedTab === "/events"}
              id="/events"
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
      <S.Flex>
        <S.MobileMenuWrapper isActive={props.isOpen}>
          <S.MobileMenuIistWrapper>
            <S.MobileMenu id="/boards" onClick={props.onClickMobileTab}>
              동행하기
            </S.MobileMenu>
            <S.MobileMenu id="/events/list" onClick={props.onClickMobileTab}>
              행사일정
            </S.MobileMenu>
            <S.MobileMenu id="/products" onClick={props.onClickMobileTab}>
              모여마켓
            </S.MobileMenu>
            <S.MobileMenu id="/mypage/events" onClick={props.onClickMobileTab}>
              마이페이지
            </S.MobileMenu>
          </S.MobileMenuIistWrapper>
          <S.MobileMenuFooterWrapper>로그인</S.MobileMenuFooterWrapper>
        </S.MobileMenuWrapper>
      </S.Flex>
    </>
  );
}
