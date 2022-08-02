import useScrollFadeIn from "../../../../commons/hooks/useScrollFadeIn";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import * as S from "./eventSection.Styles";
import { gql, useQuery } from "@apollo/client";
import { getDate } from "../../../../commons/getDate";

export const FETCH_POSTS = gql`
  query fetchPosts($page: Float, $pageSize: Float) {
    fetchPosts(page: $page, pageSize: $pageSize) {
      id
      title
      dateStart
      dateEnd
      images {
        id
        src
      }
      category
      uploadedAt
      viewCount
      description
      likedUsers {
        id
      }
    }
  }
`;

const EventSection = () => {
  const animatedItem = useScrollFadeIn();
  const { onClickMoveToPage } = useMoveToPage();
  const { data } = useQuery(FETCH_POSTS);
  return (
    <S.OutWrapper>
      <S.TitleWrapper>
        <S.TitleIcon src="/icon/simbollogo.png" />
        <S.Title> 행사찾기</S.Title>
      </S.TitleWrapper>
      <S.TitleRightWrapper>
        <div>취향저격 탕! 나만의 행사들을 골라봐요!</div>
        <S.MoreBox>
          <S.More onClick={onClickMoveToPage("/events")}>더보기</S.More>
          <S.ArrowIcon src="/icon/arrow_right.png" />
        </S.MoreBox>
      </S.TitleRightWrapper>
      <S.Wrapper>
        <S.EventWrapper {...animatedItem}>
          {data?.fetchPosts
            .map((el: any, index: number) => (
              <S.EventsList
                onClick={onClickMoveToPage(`events/${el.id}`)}
                key={index}
              >
                <S.EventsImages
                  onError={(event) => {
                    if (event.target instanceof HTMLImageElement)
                      event.target.src = "../../error-image.png";
                  }}
                  src={`https://storage.googleapis.com/${el?.images[0]?.src}`}
                />
                <S.InnderWrapper>
                  <S.EventsName>{el.title}</S.EventsName>
                  {/* <S.EventsPlaces>{el.description}</S.EventsPlaces> */}
                  <S.EventsDate>
                    {getDate(el.dateStart)} ~ <br /> {getDate(el?.dateEnd)}
                  </S.EventsDate>
                </S.InnderWrapper>
              </S.EventsList>
            ))
            .slice(0, 6)}
        </S.EventWrapper>
      </S.Wrapper>
    </S.OutWrapper>
  );
};
export default EventSection;
