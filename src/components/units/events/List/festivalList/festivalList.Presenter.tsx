import * as S from "./festivalList.Styles";

export default function FestivalListUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.Select>
          <option>등록 순</option>
          <option>인기 순</option>
          <option>날짜 순</option>
        </S.Select>
        <S.InsideWrapper>
          <S.ListWrapper isActive={props.openEvents}>
            <S.ListImg
              isActive={props.openEvents}
              src="/배너이미지_동행1.png"
            />
            <S.FlexWrapper>
              <S.Title>축제이름 </S.Title>
              <S.Period>2020.07.01 - 2020.07.31</S.Period>
              <S.ContentsWrapper>한줄 소개 한줄 소개 한줄</S.ContentsWrapper>
              <S.Btn> 페이지로</S.Btn>
            </S.FlexWrapper>
          </S.ListWrapper>{" "}
          <S.ListWrapper isActive={props.openEvents}>
            <S.ListImg
              isActive={props.openEvents}
              src="/배너이미지_동행1.png"
            />
            <S.FlexWrapper>
              <S.Title>축제이름 </S.Title>
              <S.ContentsWrapper>한줄 소개 한줄 소개 한줄</S.ContentsWrapper>
              <S.Period>2020.07.01 - 2020.07.31</S.Period>
              <S.Btn> 페이지로</S.Btn>
            </S.FlexWrapper>
          </S.ListWrapper>{" "}
          <S.ListWrapper isActive={props.openEvents}>
            <S.ListImg
              isActive={props.openEvents}
              src="/배너이미지_동행1.png"
            />
            <S.FlexWrapper>
              <S.Title>축제이름 </S.Title>
              <S.ContentsWrapper>한줄 소개 한줄 소개 한줄</S.ContentsWrapper>
              <S.Period>2020.07.01 - 2020.07.31</S.Period>
              <S.Btn> 페이지로</S.Btn>
            </S.FlexWrapper>
          </S.ListWrapper>{" "}
          <S.ListWrapper isActive={props.openEvents}>
            <S.ListImg
              isActive={props.openEvents}
              src="/배너이미지_동행1.png"
            />
            <S.FlexWrapper>
              <S.Title>축제이름 </S.Title>
              <S.ContentsWrapper>한줄 소개 한줄 소개 한줄</S.ContentsWrapper>
              <S.Period>2020.07.01 - 2020.07.31</S.Period>
              <S.Btn> 페이지로</S.Btn>
            </S.FlexWrapper>
          </S.ListWrapper>{" "}
          <S.ListWrapper isActive={props.openEvents}>
            <S.ListImg
              isActive={props.openEvents}
              src="/배너이미지_동행1.png"
            />
            <S.FlexWrapper>
              <S.Title>축제이름 </S.Title>
              <S.ContentsWrapper>한줄 소개 한줄 소개 한줄</S.ContentsWrapper>
              <S.Period>2020.07.01 - 2020.07.31</S.Period>
              <S.Btn> 페이지로</S.Btn>
            </S.FlexWrapper>
          </S.ListWrapper>
        </S.InsideWrapper>
      </S.Wrapper>
    </>
  );
}
