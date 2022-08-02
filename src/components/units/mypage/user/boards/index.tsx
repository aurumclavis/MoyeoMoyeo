import { gql, useQuery } from "@apollo/client";
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
  const { data } = useQuery(FETCH_BOARDS);
  const [userInfo] = useRecoilState(userInfoState);
  const WRITER_ARR = data?.fetchBoards.filter(
    (el: any) => el.writer.email === userInfo.email
  );

  return (
    <S.Wrapper>
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
    </S.Wrapper>
  );
}
