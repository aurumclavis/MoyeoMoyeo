// import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CommonInput from "../../../commons/inputs/infoInputs";
import CommonMobileInput from "../../../commons/inputs/mobileInputs";
import * as S from "./FindPasswordStyles";

import Countdown from "react-countdown";
export default function FindPwPageUI(props) {
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
          onChagne={props.onChagneEmail}
        />
        <S.Error>{props.formState.errors.email?.message}</S.Error>
        <S.MobileInfo>
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
                  !/^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                    props.watch("email")
                  )
                }
                // isActive={props.watch("email")}
                onClick={props.onClickGetNumber}
              >
                인증번호 요청
              </S.MobileAuthBtn>
            )
          ) : (
            <S.MobileAuthBtn>인증됨</S.MobileAuthBtn>
          )}
        </S.MobileInfo>

        <CommonInput
          placeholder={"새 비밀번호를 입력해주세요"}
          register={props.register("password")}
        />
        <S.Error>{props.formState.errors.password?.message}</S.Error>
        <CommonInput
          placeholder={"새 비밀번호를 한번 더 입력해주세요"}
          register={props.register("password")}
        />

        <S.SubmitBtn>새 비밀번호로 수정</S.SubmitBtn>
        <S.FooterWrapper>
          <S.FooterTitle>앗! 비밀번호가 갑자기 생각나셨나요?</S.FooterTitle>
          <S.FooterBtn>로그인으로 돌아가기</S.FooterBtn>
        </S.FooterWrapper>
      </S.Wrapper>
    </S.OutWrapper>
  );
}
