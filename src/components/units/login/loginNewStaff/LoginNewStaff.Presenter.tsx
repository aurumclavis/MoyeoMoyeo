import CommonInput from "../../../commons/inputs/infoInputs";
import * as S from "./LoginNewStaff.Styles";

export default function LoginNewStaffPageUI() {
  return (
    <S.OutWrapper>
      <S.Wrapper>
        <S.HeaderTitle>
          <span>관계자회원</span> 로그인
        </S.HeaderTitle>
        <S.CommonSubTitle>기본 정보</S.CommonSubTitle>
        <CommonInput placeholder={"이메일(ID)을 입력해주세요"} />
        <CommonInput placeholder={"비밀번호를 입력해주세요"} />

        <S.SubmitBtn>로그인</S.SubmitBtn>
        <S.findPassword>비밀번호찾기</S.findPassword>
        <S.FooterWrapper>
          <S.FooterTitle>아직 모여?모여!관계자계정이 없으신가요?</S.FooterTitle>
          <S.FooterBtn>관계자회원가입</S.FooterBtn>
        </S.FooterWrapper>
      </S.Wrapper>
    </S.OutWrapper>
  );
}
