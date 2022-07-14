import * as S from "./DateList.Styles";

export default function CalederListUI(props) {
  return (
    <S.ListWrapper isActive={props.isActive}>
      <S.List isActive={props.isActive}>
        <S.ListImg isActive={props.isActive} src="/배너이미지_동행1.png" />
        <S.Title>축제이름 </S.Title>
      </S.List>
      <S.List isActive={props.isActive}>
        <S.ListImg isActive={props.isActive} src="/배너이미지_동행1.png" />
        <S.Title>축제이름</S.Title>
      </S.List>
      <S.List isActive={props.isActive}>
        <S.ListImg isActive={props.isActive} src="/배너이미지_동행1.png" />
        <S.Title>축제이름 </S.Title>
      </S.List>
    </S.ListWrapper>
  );
}
