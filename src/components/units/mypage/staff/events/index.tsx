import { gql, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../../commons/store";
import * as S from "../../listItem/MyPageListItem.Styles";
import InfiniteScroll from "react-infinite-scroller";
import NoDataFound from "../../noDataFound";
import { getDate } from "../../../../commons/getDate";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";

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
  const PAGE_SIZE = 3;
  const { data, fetchMore } = useQuery(FETCH_POSTS, {
    variables: { pageSize: PAGE_SIZE, page: 1 },
  });
  const [userInfo] = useRecoilState(userInfoState);
  const WRITER_ARR = data?.fetchPosts.filter(
    (el: any) => el.writer.email === userInfo.email
  );
  const { onClickMoveToPage } = useMoveToPage();

  const loadPosts = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(WRITER_ARR.length / PAGE_SIZE) + 1,
        pageSize: PAGE_SIZE,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchPosts)
          return { fetchPosts: [...prev.fetchPosts] };
        return {
          fetchPosts: [...prev.fetchPosts, ...fetchMoreResult?.fetchPosts],
        };
      },
    });
  };
  return (
    <S.Wrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadPosts}
        hasMore={true || false}
        useWindow={false}
      >
        {WRITER_ARR && WRITER_ARR.length !== 0 ? (
          WRITER_ARR?.map((el: any) => (
            <S.ItemWrapper key={el.id}>
              <S.ItemImageWrapper>
                <S.ItemImage
                  onError={(event) => {
                    if (event.target instanceof HTMLImageElement)
                      event.target.src = "../../error-image.png";
                  }}
                  src={`https://storage.googleapis.com/${el.images[0]?.src}`}
                />
              </S.ItemImageWrapper>
              <S.ItemContentsWrapper>
                <S.ItemTitle>
                  [{el.category}] {el.title}
                </S.ItemTitle>
                <S.ItemRowWrapper>
                  <S.IconWrapper>
                    <S.CalendarIcon />
                    <S.ItemText>
                      {getDate(el.dataStart)}~{getDate(el.dateEnd)}
                    </S.ItemText>
                  </S.IconWrapper>
                </S.ItemRowWrapper>
                <S.ItemText>{el.description}</S.ItemText>
                <S.MoreText onClick={onClickMoveToPage(`/events/${el.id}`)}>
                  행사 정보 더 보기
                </S.MoreText>
              </S.ItemContentsWrapper>
            </S.ItemWrapper>
          ))
        ) : (
          <NoDataFound />
        )}
      </InfiniteScroll>
    </S.Wrapper>
  );
}
