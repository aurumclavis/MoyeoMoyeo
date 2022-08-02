import * as S from "./FestivalList.Styles";
import { IFestivalListUIAdd } from "./FestivalList.Types";
import { getDate } from "../../../../commons/getDate";

export default function FestivalListUIAdd(props: IFestivalListUIAdd) {
  return (
    <>
      <S.ListWrapper id={props.el?.id}>
        <S.ListImg src={props.el?.imgSrc} />
        <S.FlexWrapper>
          <S.Title>{props.el?.name}</S.Title>

          <S.ContentsWrapper>{props.el?.description}</S.ContentsWrapper>
          <S.MobileWrapper>
            <S.Period>{getDate(props.el?.date)}</S.Period>
            <S.Btn href={`${props.el?.urlRedirect}`}>페이지로</S.Btn>
          </S.MobileWrapper>
        </S.FlexWrapper>
      </S.ListWrapper>
    </>
  );
}
