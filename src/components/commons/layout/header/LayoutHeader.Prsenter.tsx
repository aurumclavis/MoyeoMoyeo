import * as S from "./LayoutHeader.Styles";

export default function LayoutHeaderUI(props) {
  return (
    <S.Wrapper>
      <S.InsideWrapper>
        <S.LogoMenuWrapper>
          <S.LogoImg
            src="/icon/mainlogo.png"
            onClick={props.onClickMoveToMain}
          />
          <S.NavBarWrapper>
            {props.HEADER_MENUS.map(el => (
              <div key={el.page}>
                <S.Menu id={el.page} onClick={props.onClickMenu}>
                  {el.name}
                </S.Menu>
              </div>
            ))}
          </S.NavBarWrapper>
        </S.LogoMenuWrapper>
        <S.UserMenuWrapper>
          <S.UserMenu onClick={props.onClickMoveToLogin}>로그인</S.UserMenu>
          <S.UserMenu onClick={props.onClickMoveToSignup}>회원가입</S.UserMenu>
        </S.UserMenuWrapper>
      </S.InsideWrapper>
    </S.Wrapper>
  );
}
