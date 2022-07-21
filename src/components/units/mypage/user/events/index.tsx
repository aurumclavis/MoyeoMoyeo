import { gql, useQuery } from "@apollo/client";
import { getDate } from "../../../../commons/getDate";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import * as S from "../../listItem/MyPageListItem.Styles";
import NoDataFound from "../../noDataFound";

const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      email
      dibsPosts {
        id
        title
        address
        description
        dateStart
        dateEnd
        category
      }
    }
  }
`;
export default function MyPageUserEvents() {
  const { data } = useQuery(FETCH_LOGIN_USER);
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      {data?.fetchLoginUser.dibsPosts.map((el: any) => (
        <S.ItemWrapper key={el.id}>
          <S.ItemImageWrapper>
            <S.ItemImage src="../../배너이미지_동행1.png" />
          </S.ItemImageWrapper>
          <S.ItemContentsWrapper>
            <S.ItemTitle>
              [{el.category}]{el.title}
            </S.ItemTitle>
            <S.ItemRowWrapper>
              <S.IconWrapper>
                <S.CalendarIcon />
                <S.ItemText>
                  {getDate(el.dateStart)}~{getDate(el.dateEnd)}
                </S.ItemText>
              </S.IconWrapper>
            </S.ItemRowWrapper>
            <S.ItemText>{el.description}</S.ItemText>
            <S.MoreText onClick={onClickMoveToPage(`/events/${el.id}`)}>
              행사 정보 더 보기
            </S.MoreText>
          </S.ItemContentsWrapper>
        </S.ItemWrapper>
      ))}
      {(data?.fetchLoginUser.dibsPosts.length === 0 ||
        !data?.fetchLoginUser.dibsPosts) && <NoDataFound />}
    </S.Wrapper>
  );
}
