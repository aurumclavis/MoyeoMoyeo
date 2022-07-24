import { v4 as uuidv4 } from "uuid";
import CommentChildItem from "./item/CommentChildItem.container";

export default function CommentChildrenListContainer(props: any) {
  return (
    <>
      {props.childCommentData?.fetchComment.children.map((el: any) => (
        <CommentChildItem
          key={uuidv4()}
          el={el}
          onClickReplyBoardComment={props.onClickReplyBoardComment}
        />
      ))}
    </>
  );
}
