import { gql, useQuery } from "@apollo/client";
import { getDate } from "../../../../commons/getDate";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import * as S from "../../listItem/MyPageListItem.Styles";
import NoDataFound from "../../noDataFound";

const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      email
      dibsProducts {
        id
        name
        description
        price
        createdAt
      }
    }
  }
`;
export default function MyPageUserProducts() {
  const { data } = useQuery(FETCH_LOGIN_USER);
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Wrapper>
      {data?.fetchLoginUser.dibsProducts.map((el: any) => (
        <S.ItemWrapper key={el.id}>
          <S.ItemImageWrapper>
            <S.ItemImage src="../../배너이미지_상품1.png" />
          </S.ItemImageWrapper>
          <S.ItemContentsWrapper>
            <S.ItemTitle>{el.name}</S.ItemTitle>
            <S.ItemRowWrapper>
              <S.ItemText>{el.price}원</S.ItemText>
              <S.ItemText>{getDate(el.createdAt)}</S.ItemText>
            </S.ItemRowWrapper>
            <S.ItemText>{el.description}</S.ItemText>
            <S.MoreText onClick={onClickMoveToPage(`/products/${el.id}`)}>
              상품 정보 더 보기
            </S.MoreText>
          </S.ItemContentsWrapper>
        </S.ItemWrapper>
      ))}

      {(data?.fetchLoginUser.dibsProducts.length === 0 ||
        !data?.fetchLoginUser.dibsProducts) && <NoDataFound />}
    </S.Wrapper>
  );
}
