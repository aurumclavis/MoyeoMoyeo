import * as S from "./SignUpNewStaff.Styles";
// import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CommonInput from "../../../commons/inputs/infoInputs";
import CommonMobileInput from "../../../commons/inputs/mobileInputs";
import Checkbox from "../../../commons/checkbox";
import Countdown from "react-countdown";
import ButtonSubmit from "../../../commons/buttons/submit";

export default function SignUpNewStaffPageUI(props) {
  const renderer = ({ minutes, seconds }: any) => {
    return (
      <S.Timer>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </S.Timer>
    );
  };
  return (
    <S.OutWrapper>
      <S.Wrapper>
        <S.HeaderTitle>
          <span>관계자</span> 회원가입
        </S.HeaderTitle>

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
          register={props.register("passwordCheck")}
        />
        <S.Error>{props.formState.errors.passwordCheck?.message}</S.Error>
        <S.CommonSubTitle>소속 정보</S.CommonSubTitle>
        <CommonInput
          placeholder={"소속회사명을 입력해주세요"}
          register={props.register("institution")}
        />
        <S.Error>{props.formState.errors.institution?.message}</S.Error>
        <CommonInput
          placeholder={"담당자분의 이름을 입력해주세요"}
          register={props.register("manager")}
        />
        <S.Error>{props.formState.errors.manager?.message}</S.Error>
        <S.MobileInfo>
          <S.CommonSubTitle>담당자 휴대폰 인증</S.CommonSubTitle>
          <S.NumberInputs>
            <CommonMobileInput defaultValue={"010"} />
            <CommonMobileInput
              register={props.register("phoneNumber")}
              onChange={props.onChangeMobile}
            />
            <CommonMobileInput
              register={props.register("phoneNumber2")}
              onChange={props.onChangeMobile}
            />
          </S.NumberInputs>
          <S.Error>{props.formState.errors.phoneNumber?.message}</S.Error>
          <S.Error>{props.formState.errors.phoneNumber2?.message}</S.Error>
          {!props.isDone ? (
            props.isReadyForNum ? (
              <S.NewAuthWrapper>
                <S.AuthInput
                  placeholder="인증번호"
                  {...props.register("validateToken")}
                />
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
                type="button"
                // isActive={/^[0-9]$/.test(
                //   props.watch("phoneNumber" && "phoneNumber2")
                // )}
                // disabled={
                //   !/^[0-9]$/.test(props.watch("phoneNumber" && "phoneNumber2"))
                // }
                onClick={props.onClickGetNumber}
              >
                인증번호 요청
              </S.MobileAuthBtn>
            )
          ) : (
            <S.MobileAuthBtn disabled={true} type="button">
              인증됨
            </S.MobileAuthBtn>
          )}
        </S.MobileInfo>

        <Checkbox />
        <S.ButtonWrapper>
          <ButtonSubmit
            fontSize="1.25rem"
            isActive={props.formState.isValid}
            // isActive={true}
            title="회원가입"
          />
        </S.ButtonWrapper>
        <S.FooterWrapper>
          <S.FooterTitle>이미 관계자 계정이 있으신가요?</S.FooterTitle>
          <S.FooterBtn onClick={props.onClickMoveToPage("/login/newStaff")}>
            관계자회원 로그인
          </S.FooterBtn>
        </S.FooterWrapper>
      </S.Wrapper>
    </S.OutWrapper>
  );
}
