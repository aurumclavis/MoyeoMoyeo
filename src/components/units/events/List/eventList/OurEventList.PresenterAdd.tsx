import * as S from "./OurEventList.Styles";
import { getDate } from "../../../../commons/getDate";
import DOMPurify from "dompurify";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { IOurEventListUIAdd } from "./OurEventList.Types";

export default function OurEventListUIAdd(props: IOurEventListUIAdd) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.ListWrapper>
      <S.ListImg
        onError={event => {
          if (event.target instanceof HTMLImageElement)
            event.target.src = "../../error-image.png";
        }}
        src={`https://storage.googleapis.com/${props.el?.images[0]?.src}`}
      />
      <S.FlexWrapper>
        <S.TItlePeriodWrapper>
          {" "}
          <S.Title>{props.el?.title}</S.Title>
          <S.Period>
            {getDate(props.el?.dateStart)} ~ {getDate(props.el?.dateEnd)}
          </S.Period>
        </S.TItlePeriodWrapper>

        {typeof window !== "undefined" && (
          <S.ContentsWrapper
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(props.el?.description),
            }}
          />
        )}
        <S.FooterWrapper>
          <S.CounterWrapper>
            <S.Counter>
              <S.CountIcon />
              조회수 {props.el?.viewCount}
            </S.Counter>
            <S.Counter>
              <S.LikeIcon />
              좋아요 {props.el?.likedUsers?.length || 0}
            </S.Counter>
          </S.CounterWrapper>
          <S.Btn onClick={onClickMoveToPage(`events/${props.el?.id}`)}>
            자세히보기
          </S.Btn>
        </S.FooterWrapper>
      </S.FlexWrapper>
    </S.ListWrapper>
  );
}
