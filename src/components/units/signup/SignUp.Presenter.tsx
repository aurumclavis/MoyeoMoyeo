// import * as S from "./SignUp.Styles";
import * as S from "./SignUp.Styles";
export default function SignUpPageUI(props) {
  return (
    <S.OutWrapper>
      <S.Wrapper>
        <S.HeaderWrapper>
          <S.HeaderTitle>
            <span>회원가입</span>을 환영합니다
            <S.HeaderIcon src="/icon/simbollogo.png" />
          </S.HeaderTitle>
        </S.HeaderWrapper>
        <S.BodyWrapper>
          <S.BodyCommonContainer>
            <S.BodyCommonIcon src="/icon/simbollogo.png" />
            <S.BodySubCommonContainer>
              <S.BodyCommonTitle>여러 이벤트를 즐기고 싶다면</S.BodyCommonTitle>
              <S.BodyCommonSubTitle>일반회원</S.BodyCommonSubTitle>
              <S.BodyCommonButton onClick={props.onClickToSignNew}>
                일반회원가입
              </S.BodyCommonButton>
            </S.BodySubCommonContainer>
          </S.BodyCommonContainer>
          <S.BodyCommonContainer>
            <S.BodyCommonIcon src="/icon/simbollogo.png" />
            <S.BodySubCommonContainer>
              <S.BodyCommonTitle>
                우리 이벤트를 홍보하고 싶다면
              </S.BodyCommonTitle>
              <S.BodyCommonSubTitle>관계자회원</S.BodyCommonSubTitle>
              <S.BodyCommonButton onClick={props.onClickToSignNewStaff}>
                관계자회원가입
              </S.BodyCommonButton>
            </S.BodySubCommonContainer>
          </S.BodyCommonContainer>
        </S.BodyWrapper>
        <S.FooterWrapper>
          <S.FooterTitle>이미 계정이 있으신가요?</S.FooterTitle>
          <S.FooterBtn onClick={props.onClickToLogin}>로그인</S.FooterBtn>
        </S.FooterWrapper>
      </S.Wrapper>
    </S.OutWrapper>
  );
}
