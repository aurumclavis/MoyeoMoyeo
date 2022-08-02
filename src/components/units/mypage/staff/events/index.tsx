import { gql, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../../commons/store";
import * as S from "../../listItem/MyPageListItem.Styles";
import NoDataFound from "../../noDataFound";
import { getDate } from "../../../../commons/getDate";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import DOMPurify from "dompurify";

const FETCH_POSTS = gql`
  query fetchPosts($page: Float, $pageSize: Float) {
    fetchPosts(page: $page, pageSize: $pageSize) {
      id
      title
      writer {
        id
        email
      }
      address
      description
      dateStart
      dateEnd
      images {
        src
      }
      category
    }
  }
`;

export default function MyPageStaffEvents() {
  const { data } = useQuery(FETCH_POSTS);
  const [userInfo] = useRecoilState(userInfoState);
  const WRITER_ARR = data?.fetchPosts.filter(
    (el: any) => el.writer.email === userInfo.email
  );
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Wrapper>
      {WRITER_ARR && WRITER_ARR.length !== 0 ? (
        WRITER_ARR?.map((el: any) => (
          <S.ItemWrapper key={el.id}>
            <S.ItemImageWrapper>
              {el.images[0]?.src ? (
                <S.ItemImage
                  onError={(event) => {
                    if (event.target instanceof HTMLImageElement)
                      event.target.src = "../../error-image.png";
                  }}
                  src={`https://storage.googleapis.com/${el.images[0]?.src}`}
                />
              ) : (
                <S.ItemImage src="../../error-image.png" />
              )}
            </S.ItemImageWrapper>
            <S.ItemContentsWrapper>
              <S.ItemTitle>
                [{el.category}] {el.title}
              </S.ItemTitle>
              <S.ItemRowWrapper>
                <S.IconWrapper>
                  <S.CalendarIcon />
                  <S.ItemText>
                    {getDate(el.dateStart)}~{getDate(el.dateEnd)}
                  </S.ItemText>
                </S.IconWrapper>
              </S.ItemRowWrapper>
              <S.ItemText
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(el.description),
                }}
              />
              <S.MoreText onClick={onClickMoveToPage(`/events/${el.id}`)}>
                행사 정보 더 보기
              </S.MoreText>
            </S.ItemContentsWrapper>
          </S.ItemWrapper>
        ))
      ) : (
        <NoDataFound />
      )}
    </S.Wrapper>
  );
}
