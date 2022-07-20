import * as S from "./DateList.Styles";
// import { ICalederListUIAdd } from "./DateList.Types";

export default function CalederListUIAdd() {
  return (
    <S.ListWrapper>
      <S.List>
        {/* <S.List onClick={props.onClickDetail()}> */}
        <S.ListImg src="/배너이미지_동행1.png" />
        <S.Title>축제이름 </S.Title>
      </S.List>
    </S.ListWrapper>
  );
}
