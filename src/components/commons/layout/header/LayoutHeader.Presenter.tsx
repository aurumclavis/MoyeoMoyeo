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
            onClick={props.onClickMobileLogo}
          />
          <S.NavBarWrapper>
            <S.Menu
              isActive={props.activedTab === "/events"}
              id="/events"
              onClick={props.onClickTab}
            >
              행사일정
            </S.Menu>
            <S.Menu
              isActive={props.activedTab === "/boards"}
              id="/boards"
              onClick={props.onClickTab}
            >
              동행하기
            </S.Menu>
            <S.Menu
              isActive={props.activedTab === "/products"}
              id="/products"
              onClick={props.onClickTab}
            >
              모여마켓
            </S.Menu>
            {props.accessToken ? (
              <S.Menu
                isActive={props.activedTab === "/mypage"}
                id="/mypage"
                onClick={props.onClickTab}
              >
                마이페이지
              </S.Menu>
            ) : (
              <S.Menu isActive={false}> </S.Menu>
            )}
          </S.NavBarWrapper>
          <S.UserMenuWrapper>
            {props.accessToken ? (
              <>
                <S.UserMenu></S.UserMenu>
                <S.UserMenu onClick={props.onClickLogout}>로그아웃</S.UserMenu>
              </>
            ) : (
              <>
                <S.UserMenu id="/login" onClick={props.onClickTab}>
                  로그인
                </S.UserMenu>
                <S.UserMenu id="/signup" onClick={props.onClickTab}>
                  회원가입
                </S.UserMenu>
              </>
            )}
          </S.UserMenuWrapper>
        </S.InsideWrapper>
      </S.Wrapper>
      <S.Flex>
        <S.MobileMenuWrapper isActive={props.isOpen}>
          <S.MobileMenuIistWrapper>
            <S.MobileMenu id="/events" onClick={props.onClickMobileTab}>
              행사일정
            </S.MobileMenu>
            <S.MobileMenu id="/boards" onClick={props.onClickMobileTab}>
              동행하기
            </S.MobileMenu>
            <S.MobileMenu id="/products" onClick={props.onClickMobileTab}>
              모여마켓
            </S.MobileMenu>
            {props.accessToken && (
              <S.MobileMenu id="/mypage" onClick={props.onClickMobileTab}>
                마이페이지
              </S.MobileMenu>
            )}
          </S.MobileMenuIistWrapper>
          <S.MobileMenuFooterWrapper>
            <S.MobileMenuIconWrapper>
              <S.MobileLoginIcon />
              {props.accessToken ? (
                <S.MobileFooterMenu onClick={props.onClickLogout}>
                  로그아웃
                </S.MobileFooterMenu>
              ) : (
                <S.MobileFooterMenu
                  id="/login"
                  onClick={props.onClickMobileTab}
                >
                  로그인
                </S.MobileFooterMenu>
              )}
            </S.MobileMenuIconWrapper>
            <S.MobileMenuIconWrapper>
              {!props.accessToken && (
                <>
                  <S.MobileSignUpIcon />
                  <S.MobileFooterMenu
                    id="/signup"
                    onClick={props.onClickMobileTab}
                  >
                    회원가입
                  </S.MobileFooterMenu>
                </>
              )}
            </S.MobileMenuIconWrapper>
          </S.MobileMenuFooterWrapper>
        </S.MobileMenuWrapper>
      </S.Flex>
    </>
  );
}
