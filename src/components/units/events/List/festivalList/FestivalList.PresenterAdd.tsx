import * as S from "./FestivalList.Styles";

export default function FestivalListUIAdd(props) {
  return (
    <>
      <S.ListWrapper id={props.el?._id} isActive={props.openEvents}>
        <S.ListImg isActive={props.openEvents} src="/배너이미지_동행1.png" />
        <S.FlexWrapper>
          <S.Title>{props.el?.title}</S.Title>
          <S.ContentsWrapper>{props.el?.description}</S.ContentsWrapper>
          <S.Period>2020.07.01 - 2020.07.31</S.Period>
          <S.Btn> 페이지로</S.Btn>
        </S.FlexWrapper>
      </S.ListWrapper>
    </>
  );
}
