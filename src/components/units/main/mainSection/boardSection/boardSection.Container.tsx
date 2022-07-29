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
    infinite: true,
    vertical: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
            {new Array(6).fill(1).map((el: any, index: number) => (
              <S.BoardList key={index}>
                <S.BoardTitleWrapper>
                  <S.BoardCategory>[모집중]</S.BoardCategory>
                  <S.BoardTitle>
                    이번 주 금요일에 하는 지브리전시회 동행구해요~~!!
                  </S.BoardTitle>
                </S.BoardTitleWrapper>
                <S.BoardContents>
                  20대 대학생이구요. 총 2~3명이 좋아요 전시회 보고 같이 밥도
                  드실분 연락주세요! 남녀 상관 없습니다.{" "}
                </S.BoardContents>
                <S.BoardInfo>
                  <S.Icon src="/example3.png" />
                  <S.BoardEvents>지브리전시회</S.BoardEvents>
                  <S.Icon src="/example4.png" />
                  <S.BoardPeople>2~3명</S.BoardPeople>
                  <S.Icon src="/example5.png" />
                  <S.BoardDate>2022.07.06~2022.07.06</S.BoardDate>
                </S.BoardInfo>
              </S.BoardList>
            ))}
          </S.MySlider>
        </S.CarouselWrapper>
      </S.Wrapper>
    </S.OutWrapper>
  );
};
export default BoardSection;
