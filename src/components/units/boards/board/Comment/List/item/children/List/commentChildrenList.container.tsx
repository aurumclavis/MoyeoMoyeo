import CommentChildItem from "./item/CommentChildItem.container";
import { ICommentChildrenListContainerProps } from "../../../../Comment.types";

export default function CommentChildrenListContainer(
  props: ICommentChildrenListContainerProps
) {
  return (
    <>
      {props.childCommentData?.fetchComment.children.map((el: any) => (
        <CommentChildItem key={el.id} el={el} />
      ))}
    </>
  );
}
