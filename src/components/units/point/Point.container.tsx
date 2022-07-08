import { useState } from "react";
import * as S from "./Point.styles";
declare const window: typeof globalThis & {
  IMP: any;
};
interface IPointProps {
  setVisible?: any;
}

export default function Point(props: IPointProps) {
  const [price, setPrice] = useState(1000);
  const [isSelect, setIsSelect] = useState(false);

  const onClickDisplaySelect = () => {
    setIsSelect((prev) => !prev);
  };
  const onChangeSelect = (event) => {
    setPrice(Number(event.target.value));
    setIsSelect(false);
  };

  return (
    <S.Wrapper>
      <S.IconWrapper>
        <S.CancelIcon
          onClick={() => {
            props.setVisible(false);
          }}
        />
      </S.IconWrapper>

      <S.Title>충전하실 금액을 선택해주세요 (단위:원)</S.Title>
      <S.ContentsWrapper>
        <S.SelectWrapper onClick={onClickDisplaySelect}>
          <S.SelctedPrice onChange={onChangeSelect}>{price}</S.SelctedPrice>
        </S.SelectWrapper>
        <S.ListWrapper isSelect={isSelect}>
          <S.List onClick={onChangeSelect} value="1000">
            1000
          </S.List>
          <S.List onClick={onChangeSelect} value="5000">
            5000
          </S.List>
          <S.List onClick={onChangeSelect} value="10000">
            10000
          </S.List>
          <S.List onClick={onChangeSelect} value="20000">
            20000
          </S.List>
        </S.ListWrapper>
      </S.ContentsWrapper>

      <S.SubmitButton>충전하기</S.SubmitButton>
    </S.Wrapper>
  );
}
