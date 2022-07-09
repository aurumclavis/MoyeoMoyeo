import CommonInput from "../../../commons/inputs/infoInputs";
import * as S from "./LoginNewStaff.Styles";

export default function LoginNewStaffPageUI(props) {
  return (
    <S.OutWrapper>
      <S.Wrapper onSubmit={props.handleSubmit(props.onClickToLogin)}>
        <S.HeaderTitle>
          <span>관계자</span> 회원로그인
        </S.HeaderTitle>
        <S.SubWrapper>
          <S.SubTitle>잠깐,일반회원이신가요?</S.SubTitle>
          <S.SubBtn onClick={props.onClickToLoginNewStaff}>
            일반회원 로그인
          </S.SubBtn>
        </S.SubWrapper>

        <CommonInput
          type="text"
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

        <S.SubmitBtn>로그인</S.SubmitBtn>
        <S.findPassword onClick={props.onClickToFindPw}>
          비밀번호찾기
        </S.findPassword>
        <S.FooterWrapper>
          <S.FooterTitle>
            아직 모여?모여! 관계자계정이 없으신가요?
          </S.FooterTitle>
          <S.FooterBtn onClick={props.onClickToSignUp}>
            관계자회원가입
          </S.FooterBtn>
        </S.FooterWrapper>
      </S.Wrapper>
    </S.OutWrapper>
  );
}
