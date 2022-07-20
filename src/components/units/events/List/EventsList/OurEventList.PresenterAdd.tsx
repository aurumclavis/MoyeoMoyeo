import * as S from "./OurEventList.Styles";
import { getDate } from "../../../../commons/getDate";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { IOurEventListUIAdd } from "./OurEventList.Types";

export default function OurEventListUIAdd(props: IOurEventListUIAdd) {
  const { onClickMoveToPage } = useMoveToPage();
  const onClickDetail = () => {
    onClickMoveToPage(`/events/${props.el?.id}`);
  };
  return (
    <>
      <S.ListWrapper id={props.el?._id}>
        <S.ListImg src="/배너이미지_동행1.png" />
        <S.FlexWrapper>
          <S.Title>{props.el?.title}</S.Title>
          <S.Period>
            {getDate(props.el?.dateStart)} ~ {getDate(props.el?.dateEnd)}
          </S.Period>
          <S.ContentsWrapper>{props.el?.description}</S.ContentsWrapper>
          <S.FooterWrapper>
            <S.CounterWrapper>
              <S.Counter>조회수 {props.el?.viewCount}</S.Counter>
              <S.Counter>좋아요 {props.el?.likedUsers}</S.Counter>
            </S.CounterWrapper>
            <S.Btn onClick={onClickDetail}>자세히보기</S.Btn>
          </S.FooterWrapper>
        </S.FlexWrapper>
      </S.ListWrapper>
    </>
  );
}
