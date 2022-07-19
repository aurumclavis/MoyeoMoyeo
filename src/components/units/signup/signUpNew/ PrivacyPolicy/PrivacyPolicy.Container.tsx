import { useState } from "react";
import * as S from "./PrivacyPolicy.Styles";
declare const window: typeof globalThis & {
  IMP: any;
};
interface IPrivacyPolicyProps {
  setIsVisible?: any;
}

export default function PrivacyPolicy(props: IPrivacyPolicyProps) {
  return (
    <S.OutWapper>
      <S.Wrapper>
        <S.Header>
          <S.Policy>* 개인정보 취급방침</S.Policy>
          <S.CancelIcon
            src="/icon/delete.png"
            onClick={() => {
              props.setIsVisible(false);
            }}
          />
        </S.Header>
        <S.PolicyContents>개인정보취급방침 내용입니다.</S.PolicyContents>
      </S.Wrapper>
    </S.OutWapper>
  );
}
