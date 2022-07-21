import { MouseEvent, MutableRefObject } from "react";

export interface IProductDetailUIProps {
  data: any;
  navRef: MutableRefObject<HTMLDivElement>;
  detailRef: MutableRefObject<HTMLHeadingElement>;
  qnaRef: MutableRefObject<HTMLDivElement>;
  activedTab: string;
  onScrollNav: () => void;
  onClickDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickQna: (event: MouseEvent<HTMLDivElement>) => void;
  isSeller: boolean;
  onClickShowConfirm: () => void;
  onClickDibsProduct: () => void;
  clicked: boolean;
  onClickChat: () => void;
}
