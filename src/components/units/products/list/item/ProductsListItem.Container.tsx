import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { IProductsListItemProps } from "../ProductsList.Types";
import * as S from "./ProductsListItem.Styles";

export default function ProductsListItem(props: IProductsListItemProps) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.GridItemWrapper
      onClick={onClickMoveToPage(`products/${props.el.id}`)}
      key={props.el.id}
    >
      <S.ImageWrapper>
        {props.el.images[0]?.src ? (
          <S.Image
            onError={(event) => {
              if (event.target instanceof HTMLImageElement)
                event.target.src = "../../error-image.png";
            }}
            src={`https://storage.googleapis.com/${props.el.images[0]?.src}`}
          />
        ) : (
          <S.Image src="../../error-image.png" />
        )}
      </S.ImageWrapper>
      <S.TextWrapper>
        <S.Text>{props.el.name}</S.Text>
        <S.ViewPickWrapper>
          <S.Text>{props.el.price}원</S.Text>
          <S.IconWrapper>
            <S.ViewIcon />
            <S.Text>{props.el.viewCount}</S.Text>
            <S.PickIcon />
            <S.Text>{props.el.likedUsers?.length || 0}</S.Text>
          </S.IconWrapper>
        </S.ViewPickWrapper>
      </S.TextWrapper>
    </S.GridItemWrapper>
  );
}
