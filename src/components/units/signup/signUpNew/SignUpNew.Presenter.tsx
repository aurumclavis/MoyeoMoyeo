import * as S from "./SignUpNew.Styles";
import CommonInput from "../../../commons/inputs/infoInputs";
import CommonMobileInput from "../../../commons/inputs/mobileInputs";
import Countdown from "react-countdown";
import Checkbox from "../../../commons/checkbox";
import ButtonSubmit from "../../../commons/buttons/submit";
import { ISignUpNew } from "./SignUpNew.Types";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import React, { useRef } from "react";

export default function SignUpNewPageUI(props: ISignUpNew) {
  const { onClickMoveToPage } = useMoveToPage();
  const startDate = useRef(Date.now());

  const renderer = ({ minutes, seconds }: any) => {
    return (
      <S.Timer>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </S.Timer>
    );
  };
  return (
    <S.OutWrapper>
      <S.Wrapper onSubmit={props.handleSubmit(props.onClickCreateUser)}>
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
          register={props.register("passwordCheck")}
        />
        <S.Error>{props.formState.errors.passwordCheck?.message}</S.Error>
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
              register={props.register("phoneNumber")}
              readOnly={props.isDone === true || props.isReadyForNum === true}
            />
            <CommonMobileInput
              register={props.register("phoneNumber2")}
              readOnly={props.isDone === true || props.isReadyForNum === true}
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
                <Countdown
                  renderer={renderer}
                  date={startDate.current + 180000}
                />
                <S.MobileGetNumAgainBtn onClick={props.onClickGetNumber}>
                  인증번호 재요청
                </S.MobileGetNumAgainBtn>
                <S.MobileAuthCheckBtn onClick={props.onClickConfirm}>
                  입력완료
                </S.MobileAuthCheckBtn>
              </S.NewAuthWrapper>
            ) : (
              <S.MobileAuthBtn
                type="button"
                isActive={
                  /[0-9]$/.test(props.watch("phoneNumber")) &&
                  /[0-9]$/.test(props.watch("phoneNumber2"))
                }
                disabled={
                  !/[0-9]$/.test(props.watch("phoneNumber")) &&
                  !/[0-9]$/.test(props.watch("phoneNumber2"))
                }
                onClick={props.onClickGetNumber}
              >
                인증번호 요청
              </S.MobileAuthBtn>
            )
          ) : (
            <S.MobileAuthBtn disabled={true}>인증됨</S.MobileAuthBtn>
          )}
        </S.MobileInfo>
        <Checkbox
          setChecked={props.setChecked}
          setSecondChecked={props.setSecondChecked}
        />
        <S.ButtonWrapper>
          <ButtonSubmit
            fontSize="1.25rem"
            isActive={props.formState.isValid}
            title="회원가입"
          />
        </S.ButtonWrapper>

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
