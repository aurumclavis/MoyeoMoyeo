// import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CommonInput from "../../commons/inputs/infoInputs";
import CommonMobileInput from "../../commons/inputs/mobileInputs";
import * as S from "./SignUpNew.Styles";

export default function SignUpNewPageUI(props) {
  // const moveFocus2 = () => {
  //   // const p2 = document.getElementById("p2").value;
  //   if (.length === 4) {
  //     document.getElementById("p3").focus();
  //   }
  // };
  return (
    <S.OutWrapper>
      <S.Wrapper>
        <S.HeaderTitle>회원가입</S.HeaderTitle>
        <S.CommonTitle>소셜 계정으로 1초만에 회원가입</S.CommonTitle>
        <S.SnsWrapper>
          <S.SnsLogo src="/signUp/kakao.png" />
          <S.SnsLogo src="/signUp/naver.png" />
          <S.SnsLogo src="/signUp/googlelogo.png" />
        </S.SnsWrapper>
        <S.CommonTitle>이메일로 회원가입</S.CommonTitle>
        <S.CommonSubTitle>기본 정보</S.CommonSubTitle>
        <CommonInput
          placeholder={"이메일(ID)을 입력해주세요"}
          register={props.register("email")}
        />
        <S.Error>{props.formState.errors.email?.message}</S.Error>
        <CommonInput
          placeholder={"비밀번호를 입력해주세요"}
          register={props.register("password")}
        />
        <S.Error>{props.formState.errors.password?.message}</S.Error>
        <CommonInput
          placeholder={"비밀번호를 한번 더 입력해주세요"}
          register={props.register("password2")}
        />
        <S.Error>{props.formState.errors.password2?.message}</S.Error>
        <CommonInput
          placeholder={"이름을 입력해주세요"}
          register={props.register("name")}
        />
        <S.Error>{props.formState.errors.name?.message}</S.Error>
        <S.MobileInfo>
          <S.CommonSubTitle>휴대폰 인증</S.CommonSubTitle>
          <S.NumberInputs>
            <CommonMobileInput defaultValue={"010"} />
            <CommonMobileInput id="p2" maxlength="4" />
            {/* oninput={moveFocus2} */}
            <CommonMobileInput id="p3" maxlength="4" />
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
          <S.SubCommonCheckBox>
            <S.CheckedIcon type="checkbox" />
            <S.CheckBoxTitle>
              [선택] 행사 정보를 이메일과 문자로 받고 싶어요.
            </S.CheckBoxTitle>
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
