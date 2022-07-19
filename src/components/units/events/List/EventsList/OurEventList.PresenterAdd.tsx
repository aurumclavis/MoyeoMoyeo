import * as S from "./OurEventList.Styles";
import { getDate } from "../../../../commons/getDate";

export default function OurEventListUIAdd(props) {
  return (
    <>
      <S.ListWrapper id={props.el?._id} isActive={props.ourEvents}>
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
            <S.Btn onClick={props.onClickMoveToPage(`/events/${props.el?.id}`)}>
              자세히보기
            </S.Btn>
          </S.FooterWrapper>
        </S.FlexWrapper>
      </S.ListWrapper>
    </>
  );
}
