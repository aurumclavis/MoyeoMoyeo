import { useState } from "react";
import * as S from "./policy.Styles";
declare const window: typeof globalThis & {
  IMP: any;
};
interface IPolicyProps {
  setVisible?: any;
}

export default function Policy(props: IPolicyProps) {
  return (
    <S.OutWapper>
      <S.Wrapper>
        <S.Header>
          <S.Policy>*약관 동의</S.Policy>
          <S.CancelIcon
            onClick={() => {
              props.setVisible(false);
            }}
          />
        </S.Header>
        <S.PolicyContents>약관 내용이 들어가는 곳입니당...!</S.PolicyContents>
      </S.Wrapper>
    </S.OutWapper>
  );
}
