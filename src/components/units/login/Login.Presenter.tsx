import Link from "next/link";
import CommonInput from "../../commons/inputs/infoInputs";
import * as S from "./Login.Styles";

export default function LoginPageUI() {
  return (
    <S.OutWrapper>
      <S.Wrapper>
        <S.HeaderTitle>로그인</S.HeaderTitle>
        <S.SubWrapper>
          <S.SubTitle>잠깐,관계자 회원이신가요?</S.SubTitle>
          <S.SubBtn>관계자회원 로그인</S.SubBtn>
        </S.SubWrapper>
        {/* <S.CommonTitle>이메일로 로그인</S.CommonTitle> */}
        {/* <S.CommonSubTitle>기본 정보</S.CommonSubTitle> */}
        <CommonInput placeholder={"이메일(ID)을 입력해주세요"} />
        <CommonInput placeholder={"비밀번호를 입력해주세요"} />
        <S.SubmitBtn>로그인</S.SubmitBtn>
        <S.findPassword>비밀번호찾기</S.findPassword>
        <S.CommonTitle>소셜 계정으로 1초만에 로그인</S.CommonTitle>
        <S.SnsWrapper>
          <Link href="http://localhost:3000/login/kakao">
            <a>
              <S.SnsLogo src="/signUp/kakao.png" />
            </a>
          </Link>
          <Link href="http://localhost:3000/login/naver">
            <a>
              <S.SnsLogo src="/signUp/naver.png" />
            </a>
          </Link>
          <Link href="http://localhost:3000/login/google">
            <a>
              <S.SnsLogo src="/signUp/ico-google.svg" />
            </a>
          </Link>
        </S.SnsWrapper>
        <S.FooterWrapper>
          <S.FooterTitle>아직 모여?모여!계정이 없으신가요?</S.FooterTitle>
          <S.FooterBtn>회원가입</S.FooterBtn>
        </S.FooterWrapper>
      </S.Wrapper>
    </S.OutWrapper>
  );
}
