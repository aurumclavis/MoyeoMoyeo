import CommonInput from "../../../commons/inputs/infoInputs";
import * as S from "./FindPasswordStyles";
import Countdown from "react-countdown";
import ButtonSubmit from "../../../commons/buttons/submit";
import { IFindPw } from "./FindPassword.Types";
import { useRef } from "react";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";

export default function FindPwPageUI(props: IFindPw) {
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
      <S.Wrapper>
        <S.HeaderTitle>비밀번호 찾기</S.HeaderTitle>
        <S.CommonSubTitle>*이메일 인증이 필요합니다.</S.CommonSubTitle>
        <CommonInput
          placeholder={"이메일(ID)을 입력해주세요"}
          register={props.register("email")}
        />
        <S.Error>{props.formState.errors.email?.message}</S.Error>
        <S.MobileInfo>
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
                onClick={props.onClickGetNumber}
                isActive={/^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  props.watch("email")
                )}
                disabled={
                  !/^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                    props.watch("email")
                  )
                }
              >
                인증번호 요청
              </S.MobileAuthBtn>
            )
          ) : (
            <S.MobileAuthBtn>인증됨</S.MobileAuthBtn>
          )}
        </S.MobileInfo>
        <form onSubmit={props.handleSubmit(props.onClickToUpdatePW)}>
          <CommonInput
            type="password"
            placeholder={"새 비밀번호를 입력해주세요"}
            register={props.register("password")}
            readOnly={props.isDone === false}
          />
          <S.Error>{props.formState.errors.password?.message}</S.Error>
          <CommonInput
            type="password"
            placeholder={"새 비밀번호를 한번 더 입력해주세요"}
            register={props.register("passwordCheck")}
            readOnly={props.isDone === false}
          />
          <S.Error>{props.formState.errors.passwordCheck?.message}</S.Error>
          <S.ButtonWrapper>
            <ButtonSubmit
              fontSize="1.25rem"
              isActive={props.formState.isValid}
              title="비밀번호 업데이트"
            />
          </S.ButtonWrapper>
        </form>
        <S.FooterWrapper>
          <S.FooterTitle>앗! 비밀번호가 갑자기 생각나셨나요?</S.FooterTitle>
          <S.FooterBtn onClick={onClickMoveToPage("/login")}>
            로그인으로 돌아가기
          </S.FooterBtn>
        </S.FooterWrapper>
      </S.Wrapper>
    </S.OutWrapper>
  );
}
