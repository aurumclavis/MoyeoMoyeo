import * as S from "./signUpSns.Styles";

export default function SignUpSnsPageUI() {
  return (
    <S.OutWrapper>
      <S.Wrapper>
        <S.HeaderTitle>소셜(SNS) 회원가입</S.HeaderTitle>

        <S.KakaoWrapper>
          <S.SnsIcon src="/signUp/ico-kakaotalk.svg" />
          <S.SignUpTitle>카카오로 1초 만에 회원 가입</S.SignUpTitle>
        </S.KakaoWrapper>
        <S.NaverWrapper>
          <S.SnsIcon src="/signUp/ico-naver.svg" />
          <S.NaverTitle>네이버로 가입</S.NaverTitle>
        </S.NaverWrapper>
        <S.GoogleWrapper>
          <S.SnsIcon src="/signUp/ico-google.svg" />
          <S.SignUpTitle>구글로 가입</S.SignUpTitle>
        </S.GoogleWrapper>
        {/* <S.NaverSignUpIcon>네이버로 회원가입하기</S.NaverSignUpIcon>
        <S.GoogleSignUpIcon>구글로 회원가입하기</S.GoogleSignUpIcon> */}

        <S.BodyWrapper>
          <S.BodyTitle>이메일로 가입</S.BodyTitle>
          <S.BodyIcon src="/signUp/arrow.png" />
        </S.BodyWrapper>
      </S.Wrapper>
    </S.OutWrapper>
  );
}
