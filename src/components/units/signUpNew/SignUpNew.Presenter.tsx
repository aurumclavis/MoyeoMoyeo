// import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CommonInput from "../../commons/inputs/infoInputs";
import CommonMobileInput from "../../commons/inputs/mobileInputs";
import * as S from "./SignUpNew.Styles";
import Countdown from "react-countdown";
import Link from "next/link";
export default function SignUpNewPageUI(props) {
  const renderer = ({ minutes, seconds }: any) => {
    return (
      <S.Timer>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </S.Timer>
    );
  };

  return (
    <form onSubmit={props.handleSubmit(props.onClickCreateUser)}>
      <S.OutWrapper>
        <S.Wrapper>
          <S.HeaderTitle>회원가입</S.HeaderTitle>
          <S.CommonSubTitle>기본 정보</S.CommonSubTitle>
          <CommonInput
            placeholder={"이메일(ID)을 입력해주세요"}
            register={props.register("email")}
          />
          <S.Error>{props.formState.errors.email?.message}</S.Error>
          <CommonInput
            type="password"
            placeholder={"비밀번호를 입력해주세요"}
            register={props.register("password")}
          />
          <S.Error>{props.formState.errors.password?.message}</S.Error>
          <CommonInput
            type="password"
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
              <CommonMobileInput defaultValue={"010"} readOnly />
              <CommonMobileInput
                type="text"
                register={props.register("phoneNumber")}
                onChange={props.onChange2ndNum}
                id="p2"
                disabled={props.isDone}
                // oninput={props.moveFocus2()}
              />
              <CommonMobileInput
                register={props.register("phoneNumber2")}
                onChange={props.onChange3rdNum}
                disabled={props.isDone}
                id="p3"
              />
            </S.NumberInputs>
            <S.Error>{props.formState.errors.phoneNumber?.message}</S.Error>
            <S.Error>{props.formState.errors.phoneNumber2?.message}</S.Error>
            {!props.isDone ? (
              props.isReadyForNum ? (
                <S.NewAuthWrapper>
                  <S.AuthInput placeholder="인증번호" />
                  <Countdown renderer={renderer} date={Date.now() + 180000} />
                  <S.MobileGetNumAgainBtn onClick={props.onClickGetNumberAgain}>
                    인증번호 재요청
                  </S.MobileGetNumAgainBtn>
                  <S.MobileAuthCheckBtn onClick={props.onClickConfirm}>
                    입력완료
                  </S.MobileAuthCheckBtn>
                </S.NewAuthWrapper>
              ) : (
                <S.MobileAuthBtn
                  disabled={
                    props?.phone3rdNum === "" && props?.phone2ndNum === ""
                  }
                  isActive={
                    props?.phone3rdNum !== "" && props?.phone2ndNum !== ""
                  }
                  onClick={props.onClickGetNumber}
                >
                  인증번호 요청
                </S.MobileAuthBtn>
              )
            ) : (
              <S.MobileAuthBtn>인증됨</S.MobileAuthBtn>
            )}
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
              <S.CheckBoxTitle>
                [필수] <S.Policy>이용약관</S.Policy>에 동의합니다.
              </S.CheckBoxTitle>
            </S.SubCommonCheckBox>
            <S.SubCommonCheckBox>
              <S.CheckedIcon type="checkbox" />
              <S.CheckBoxTitle>
                [선택] 마켓팅 정보이용에 동의합니다.
              </S.CheckBoxTitle>
            </S.SubCommonCheckBox>
          </S.CheckBoxWrapper>
          <S.SubmitBtn type="submit" isActive={props.formState.isValid}>
            회원가입
          </S.SubmitBtn>
          <S.FooterWrapper>
            <S.FooterTitle>이미 계정이 있으신가요?</S.FooterTitle>
            <S.FooterBtn onClick={props.onClickMoveToPage("/login")}>
              로그인
            </S.FooterBtn>
          </S.FooterWrapper>
        </S.Wrapper>
      </S.OutWrapper>
    </form>
  );
}
