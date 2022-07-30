import { gql, useQuery } from "@apollo/client";
import { v1 } from "uuid";
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
        images {
          src
        }
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
        <S.ItemWrapper key={v1()}>
          <S.ItemImageWrapper>
            {el.images === null ? (
              <S.ItemImage src="../../error-image.png" />
            ) : (
              <S.ItemImage
                onError={(event) => {
                  if (event.target instanceof HTMLImageElement)
                    event.target.src = "../../error-image.png";
                }}
                src={`https://storage.googleapis.com/${el.images[0]?.src}`}
              />
            )}
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
