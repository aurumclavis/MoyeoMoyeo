import * as S from "./SignUpNewStaff.Styles";
// import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CommonInput from "../../commons/inputs/infoInputs";
import CommonMobileInput from "../../commons/inputs/mobileInputs";

export default function SignUpNewEventPageUI() {
  return (
    <S.OutWrapper>
      <S.Wrapper>
        <S.HeaderTitle>
          <span>관계자회원</span>가입
        </S.HeaderTitle>

        <S.CommonSubTitle>기본 정보</S.CommonSubTitle>
        <CommonInput placeholder={"이메일(ID)을 입력해주세요"} />
        <CommonInput placeholder={"비밀번호를 입력해주세요"} />
        <CommonInput placeholder={"비밀번호를 한번 더 입력해주세요"} />
        <CommonInput placeholder={"이름을 입력해주세요"} />
        <S.CommonSubTitle>소속 정보</S.CommonSubTitle>
        <CommonInput placeholder={"소속회사명을 입력해주세요"} />
        <CommonInput placeholder={"담당자분의 이름을 입력해주세요"} />

        <S.MobileInfo>
          <S.CommonSubTitle>담당자 휴대폰 인증</S.CommonSubTitle>
          <S.NumberInputs>
            <CommonMobileInput defaultValue={"010"} />
            <CommonMobileInput />
            <CommonMobileInput />
          </S.NumberInputs>
          <S.MobileAuthBtn disabled={true}>인증번호 요청</S.MobileAuthBtn>
        </S.MobileInfo>
        <S.CheckBoxWrapper>
          <S.CommonCheckBox>
            <S.CheckedIcon type="checkbox" />
            <S.CheckBoxTitle>모두 선택</S.CheckBoxTitle>
          </S.CommonCheckBox>
          <S.SubCommonCheckBox>
            <S.CheckedIcon type="checkbox" />
            <S.CheckBoxTitle>[필수] 만14세 이상입니다.</S.CheckBoxTitle>
          </S.SubCommonCheckBox>
          <S.SubCommonCheckBox>
            <S.CheckedIcon type="checkbox" />
            <S.CheckBoxTitle>
              [필수] 개인정보 취급방침에 동의합니다.
            </S.CheckBoxTitle>
          </S.SubCommonCheckBox>
          <S.SubCommonCheckBox>
            <S.CheckedIcon type="checkbox" />
            <S.CheckBoxTitle>[필수] 이용약관에 동의합니다.</S.CheckBoxTitle>
          </S.SubCommonCheckBox>
        </S.CheckBoxWrapper>
        <S.SubmitBtn>회원가입</S.SubmitBtn>
        <S.FooterWrapper>
          <S.FooterTitle>이미 계정이 있으신가요?</S.FooterTitle>
          <S.FooterBtn>로그인</S.FooterBtn>
        </S.FooterWrapper>
      </S.Wrapper>
    </S.OutWrapper>
  );
}
