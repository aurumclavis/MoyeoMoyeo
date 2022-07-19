import { gql } from "@apollo/client";
import * as S from "../../listItem/MyPageListItem.Styles";

const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      email
      dibsPosts {
        id
        title
        writer
        description
      }
    }
  }
`;
export default function MyPageUserEvents() {
  return (
    <S.Wrapper>
      <S.ItemWrapper>
        <S.ItemImageWrapper>
          <S.ItemImage src="../../배너이미지_동행1.png" />
        </S.ItemImageWrapper>
        <S.ItemContentsWrapper>
          <S.ItemTitle>[지역명] 기본 행사 이름</S.ItemTitle>
          <S.ItemRowWrapper>
            <S.IconWrapper>
              <S.CalendarIcon />
              <S.ItemText>2022.07.26~2022.07.28</S.ItemText>
            </S.IconWrapper>
          </S.ItemRowWrapper>
          <S.ItemText>짧은 내용</S.ItemText>
          <S.MoreText>행사 정보 더 보기</S.MoreText>
        </S.ItemContentsWrapper>
      </S.ItemWrapper>

      <S.ItemWrapper>
        <S.ItemImageWrapper>
          <S.ItemImage src="../../배너이미지_동행2.png" />
        </S.ItemImageWrapper>
        <S.ItemContentsWrapper>
          <S.ItemTitle>[지역명] 내용이 긴 행사</S.ItemTitle>
          <S.ItemRowWrapper>
            <S.IconWrapper>
              <S.CalendarIcon />
              <S.ItemText>2022.07.26~2022.07.28</S.ItemText>
            </S.IconWrapper>
          </S.ItemRowWrapper>
          <S.ItemText>
            내용입니다 내용입니다 내용입니다 내용입니다 내용입니다 내용입니다
            내용입니다 내용입니다 내용입니다 내용입니다 내용입니다 내용입니다
            내용입니다 내용입니다 내용입니다 내용입니다 내용입니다 내용입니다
            내용입니다 내용입니다 내용입니다 내용입니다 내용입니다 내용입니다
            내용입니다 내용입니다 내용입니다 내용입니다 내용입니다 내용입니다
            내용입니다 내용입니다 내용입니다 내용입니다
          </S.ItemText>
          <S.MoreText>행사 정보 더 보기</S.MoreText>
        </S.ItemContentsWrapper>
      </S.ItemWrapper>
      <S.ItemWrapper>
        <S.ItemImageWrapper>
          <S.ItemImage src="../../배너이미지_동행1.png" />
        </S.ItemImageWrapper>
        <S.ItemContentsWrapper>
          <S.ItemTitle>[지역명] 기본 행사 이름</S.ItemTitle>
          <S.ItemRowWrapper>
            <S.IconWrapper>
              <S.CalendarIcon />
              <S.ItemText>2022.07.26~2022.07.28</S.ItemText>
            </S.IconWrapper>
          </S.ItemRowWrapper>
          <S.ItemText>짧은 내용</S.ItemText>
          <S.MoreText>행사 정보 더 보기</S.MoreText>
        </S.ItemContentsWrapper>
      </S.ItemWrapper>

      <S.ItemWrapper>
        <S.ItemImageWrapper>
          <S.ItemImage src="../../배너이미지_동행2.png" />
        </S.ItemImageWrapper>
        <S.ItemContentsWrapper>
          <S.ItemTitle>[지역명] 내용이 긴 행사</S.ItemTitle>
          <S.ItemRowWrapper>
            <S.IconWrapper>
              <S.CalendarIcon />
              <S.ItemText>2022.07.26~2022.07.28</S.ItemText>
            </S.IconWrapper>
          </S.ItemRowWrapper>
          <S.ItemText>
            내용입니다 내용입니다 내용입니다 내용입니다 내용입니다 내용입니다
            내용입니다 내용입니다 내용입니다 내용입니다 내용입니다 내용입니다
            내용입니다 내용입니다 내용입니다 내용입니다 내용입니다 내용입니다
            내용입니다 내용입니다 내용입니다 내용입니다 내용입니다 내용입니다
            내용입니다 내용입니다 내용입니다 내용입니다 내용입니다 내용입니다
            내용입니다 내용입니다 내용입니다 내용입니다
          </S.ItemText>
          <S.MoreText>행사 정보 더 보기</S.MoreText>
        </S.ItemContentsWrapper>
      </S.ItemWrapper>
    </S.Wrapper>
  );
}
