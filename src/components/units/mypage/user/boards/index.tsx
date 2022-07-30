import { gql, useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";
import { useRecoilState } from "recoil";
import { v1 } from "uuid";
import { userInfoState } from "../../../../../commons/store";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import * as S from "../../listItem/MyPageListItem.Styles";
import NoDataFound from "../../noDataFound";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Float, $pageSize: Float) {
    fetchBoards(page: $page, pageSize: $pageSize) {
      id
      title
      remark
      createdAt
      personCount
      contents
      isFull
      writer {
        email
      }
      dateStart
      dateEnd
      eventImage {
        src
      }
      coverImage {
        src
      }
    }
  }
`;

export default function MyPageUserBoards() {
  const { onClickMoveToPage } = useMoveToPage();
  const PAGE_SIZE = 3;
  const { data, fetchMore } = useQuery(FETCH_BOARDS, {
    variables: { pageSize: PAGE_SIZE, page: 1 },
  });
  const [userInfo] = useRecoilState(userInfoState);
  const WRITER_ARR = data?.fetchBoards.filter(
    (el: any) => el.writer.email === userInfo.email
  );

  const loadBoards = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(WRITER_ARR.length / PAGE_SIZE) + 1,
        pageSize: PAGE_SIZE,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult?.fetchBoards],
        };
      },
    });
  };

  return (
    <S.Wrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadBoards}
        hasMore={true || false}
        useWindow={false}
      >
        {WRITER_ARR && WRITER_ARR.length !== 0 ? (
          WRITER_ARR?.map((el: any) => (
            <S.ItemWrapper key={v1()}>
              <S.ItemImageWrapper>
                <S.ItemImage
                  onError={(event) => {
                    if (event.target instanceof HTMLImageElement)
                      event.target.src = "../../error-image.png";
                  }}
                  src={`https://storage.googleapis.com/${el.coverImage?.src}`}
                />
              </S.ItemImageWrapper>
              <S.ItemContentsWrapper>
                <S.ItemTitle>
                  <S.ItemIsFull isFull={el.isFull}>
                    {el.isFull ? "[모집완료]" : "[모집중]"}
                  </S.ItemIsFull>{" "}
                  {el.title}
                </S.ItemTitle>
                <S.ItemRowWrapper>
                  <S.IconWrapper>
                    <S.PeopleIcon />
                    <S.ItemText>{el.personCount}명</S.ItemText>
                  </S.IconWrapper>
                  <S.IconWrapper>
                    <S.CalendarIcon />
                    <S.ItemText>
                      {el.dateStart}~{el.dateEnd}
                    </S.ItemText>
                  </S.IconWrapper>
                </S.ItemRowWrapper>
                <S.ItemText>{el.remark}</S.ItemText>
                <S.MoreText onClick={onClickMoveToPage(`/boards/${el.id}`)}>
                  게시글 더보기
                </S.MoreText>
                {/* <RequestUserList
                  onClickAcceptRequest={onClickAcceptRequest}
                  onClickRefuseRequest={onClickRefuseRequest}
                  requestAccepted={requestAccepted}
                  requestRefused={requestRefused}
                  isDetailPage={false}
                /> */}
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
