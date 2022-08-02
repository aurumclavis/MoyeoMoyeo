import * as S from "./boardSection.Styles";
import useScrollClipPath from "../../../../commons/hooks/useScrollClipPath";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { gql, useQuery } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Float, $pageSize: Float) {
    fetchBoards(page: $page, pageSize: $pageSize) {
      id
      isFull
      title
      contents
      remark
      personCount
      dateStart
      dateEnd
      writer {
        id
      }
      coverImage {
        src
      }
      eventName
      eventStart
      eventEnd
      eventCategory
    }
  }
`;
const BoardSection = () => {
  const { data } = useQuery(FETCH_BOARDS);
  const animatedItem = useScrollClipPath();
  const { onClickMoveToPage } = useMoveToPage();
  const settings = {
    slidesToScroll: 2,
    infinite: true,
    vertical: true,
    slidesToShow: 2,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    dots: true,
    responsive: [
      // 반응형
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <S.OutWrapper>
      <S.TitleWrapper>
        <S.TitleIcon src="/icon/simbollogo.png" />
        <S.Title>동행구하기 </S.Title>
      </S.TitleWrapper>
      <S.TitleRightWrapper>
        <div>이제 혼자가 아닌 우리 같이 가요!</div>
        <S.MoreBox>
          <S.More onClick={onClickMoveToPage("/boards")}>더보기</S.More>
          <S.ArrowIcon src="/icon/arrow_right.png" />
        </S.MoreBox>
      </S.TitleRightWrapper>
      <S.Wrapper>
        <S.BoardsImage src="/main/boards.png" {...animatedItem} />
        <S.CarouselWrapper>
          <S.MySlider {...settings}>
            {data?.fetchBoards
              .map((el: any, index: number) => (
                <S.BoardList
                  key={index}
                  onClick={onClickMoveToPage(`boards/${el.id}`)}
                >
                  <S.BoardTitleWrapper>
                    <S.BoardCategory>
                      {el.isFull ? "[모집완료]" : "[모집중]"}
                    </S.BoardCategory>
                    <S.BoardTitle>{el.title}</S.BoardTitle>
                  </S.BoardTitleWrapper>
                  <S.BoardContents>{el.remark}</S.BoardContents>
                  <S.BoardInfo>
                    {/* {el.eventCategory !== "일반" && (
                      <>
                        <S.EventIcon />
                        <S.BoardEvents>{el.eventName}</S.BoardEvents>
                      </>
                    )} */}
                    <S.CategoryIcon />
                    <S.BoardPeople>{el.eventCategory}</S.BoardPeople>
                    <S.MaxHeadCountIcon />
                    <S.BoardPeople>{el.personCount}명</S.BoardPeople>
                    <S.CalendarIcon />
                    <S.BoardDate>
                      {" "}
                      {el.dateStart} ~ {el.dateEnd}
                    </S.BoardDate>
                  </S.BoardInfo>
                </S.BoardList>
              ))
              .slice(0, 6)}
          </S.MySlider>
        </S.CarouselWrapper>
      </S.Wrapper>
    </S.OutWrapper>
  );
};
export default BoardSection;
