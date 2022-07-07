import * as S from "./LayoutHeader.Styles";

export default function LayoutHeaderUI(props) {
  return (
    <S.Wrapper>
      <S.InsideWrapper>
        <S.LogoMenuWrapper>
          <S.LogoImg src="/icon/mainlogo.png" />
          <S.NavBarWrapper>
            <S.Menu>동행하기</S.Menu>
            <S.Menu>축제일정</S.Menu>
            <S.Menu>모여마켓</S.Menu>
            <S.Menu>마이페이지</S.Menu>
          </S.NavBarWrapper>
        </S.LogoMenuWrapper>
        <S.UserMenuWrapper>
          <S.UserMenu>로그인</S.UserMenu>
          <S.UserMenu>회원가입</S.UserMenu>
        </S.UserMenuWrapper>
      </S.InsideWrapper>
    </S.Wrapper>
  );
}
