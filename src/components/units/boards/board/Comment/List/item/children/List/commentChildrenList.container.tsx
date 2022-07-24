import CommentChildItem from "./item/CommentChildItem.container";
import * as S from "../../../CommentList.styles";

export default function CommentChildrenListContainer(props: any) {
  return (
    <>
      {props.childCommentData?.fetchComment.children.map((el: any) => (
        <CommentChildItem key={el.id} el={el} />
      ))}
    </>
  );
}
