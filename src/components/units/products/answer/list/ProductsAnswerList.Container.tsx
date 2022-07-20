import * as S from "./ProductsAnswerList.Styles";
interface ProductsAnswerListProps {
  child: any;
  onClickActiveAnswer: () => void;
}

export default function ProductsAnswerList(props: ProductsAnswerListProps) {
  return (
    <S.ItemWrapper>
      <S.SubDirectoryWrapper>
        <S.SubDirectoryIcon />
      </S.SubDirectoryWrapper>
      <S.ContentsWrapper>
        <S.Text>판매자</S.Text>
        <S.Date>2022-07-02</S.Date>
        <S.Contents>
          답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 답변 내용입니다.
          답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 답변 내용입니다.
          답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 답변 내용입니다.
          답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 답변 내용입니다.
          답변 내용입니다. 답변 내용입니다.답변 내용입니다. 답변 내용입니다. 답
        </S.Contents>
      </S.ContentsWrapper>
      <S.IconWrapper>
        <S.ReplyIcon onClick={props.onClickActiveAnswer} />
        <S.DeleteIcon />
      </S.IconWrapper>
    </S.ItemWrapper>
  );
}
