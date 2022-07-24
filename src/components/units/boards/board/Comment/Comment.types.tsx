import { Dispatch, MouseEvent, SetStateAction } from "react";

export interface ICommentWriteContainerProps {
  userData: any;
}
export interface ICommentWritePresenterProps {
  handleSubmit: any;
  register: any;
  onClickCreateBoardComment: (el: MouseEvent<HTMLButtonElement>) => void;
}
export interface ICommentListContainerProps {
  userData: any;
}
export interface ICommentListItemsContainerProps {
  el: any;
  userData: any;
  refetch: any;
}
export interface ICommentsWrapperProps {
  isChild: boolean;
}
export interface ICommentChildrenWriteContainerProps {
  parentId: string;
  refetch: any;
  setIsReply: Dispatch<SetStateAction<boolean>>;
}
export interface ICommentChildrenListContainerProps {
  childCommentData: any;
}
export interface ICommentChildItemProps {
  el: any;
}
export interface ICommentChildrenChildrenWriteContainer {
  parentId: string;
  setIsReplyChild: Dispatch<SetStateAction<boolean>>;
  refetch: any;
}
