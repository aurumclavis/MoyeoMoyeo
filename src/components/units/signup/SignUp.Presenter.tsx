import { useMoveToPage } from "../../commons/hooks/useMoveToPage";
import * as S from "./SignUp.Styles";
export default function SignUpPageUI() {
  const { onClickMoveToPage } = useMoveToPage();
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
            <S.BodyCommonIcon src="/icon/user1.png" />
            <S.BodySubCommonContainer>
              <S.BodyCommonTitle>여러 이벤트를 즐기고 싶다면</S.BodyCommonTitle>
              <S.BodyCommonSubTitle>일반회원</S.BodyCommonSubTitle>
              <S.BodyCommonButton onClick={onClickMoveToPage("/signup/sns")}>
                일반회원가입
              </S.BodyCommonButton>
            </S.BodySubCommonContainer>
          </S.BodyCommonContainer>
          <S.BodyCommonContainer>
            <S.BodyCommonIcon src="/icon/staff1.png" />
            <S.BodySubCommonContainer>
              <S.BodyCommonTitle>
                우리 이벤트를 홍보하고 싶다면
              </S.BodyCommonTitle>
              <S.BodyCommonSubTitle>관계자회원</S.BodyCommonSubTitle>
              <S.BodyCommonButton
                onClick={onClickMoveToPage("/signup/newStaff")}
              >
                관계자회원가입
              </S.BodyCommonButton>
            </S.BodySubCommonContainer>
          </S.BodyCommonContainer>
        </S.BodyWrapper>
        <S.FooterWrapper>
          <S.FooterTitle>이미 계정이 있으신가요?</S.FooterTitle>
          <S.FooterBtn onClick={onClickMoveToPage("/login")}>
            로그인
          </S.FooterBtn>
        </S.FooterWrapper>
      </S.Wrapper>
    </S.OutWrapper>
  );
}
