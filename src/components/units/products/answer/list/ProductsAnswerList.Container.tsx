import * as S from "./ProductsAnswerList.Styles";
interface ProductsAnswerListProps {
  data: any;
  onClickActiveAnswer: () => void;
}

export default function ProductsAnswerList(props: ProductsAnswerListProps) {
  return (
    <>
      {props.data?.fetchComment.children.map((el: any) => (
        <S.ItemWrapper key={el.id}>
          <S.SubDirectoryWrapper>
            <S.SubDirectoryIcon />
          </S.SubDirectoryWrapper>
          <S.ContentsWrapper>
            <S.Text>판매자</S.Text>
            <S.Date>{el.createdAt}</S.Date>
            <S.Contents>{el.content}</S.Contents>
          </S.ContentsWrapper>
          <S.IconWrapper>
            <S.ReplyIcon onClick={props.onClickActiveAnswer} />
            <S.DeleteIcon />
          </S.IconWrapper>
        </S.ItemWrapper>
      ))}
    </>
  );
}
