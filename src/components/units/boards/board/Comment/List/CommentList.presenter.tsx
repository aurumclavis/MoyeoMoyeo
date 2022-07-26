import * as S from "./CommentList.styles";
import { v4 as uuidv4 } from "uuid";
import CommentListItemsContainer from "./CommentListItems.container";

export default function CommentListPresenter(props: any) {
  return (
    <S.Wrapper>
      {props.comments.map((el: any) => (
        <CommentListItemsContainer key={uuidv4()} el={el} />
      ))}
    </S.Wrapper>
  );
}
