import { ChangeEvent } from "react";

export interface ProductDetailUIProps {
  data: any;
  navRef: HTMLDivElement;
  detailRef: HTMLElement;
  qnaRef: HTMLDivElement;
  activedTab: string;
  onScrollNav: () => void;
  onClickDetail: (event: ChangeEvent<HTMLDivElement>) => void;
  onClickQna: (event: ChangeEvent<HTMLDivElement>) => void;
  isSeller: boolean;
  onClickShowConfirm: () => void;
  onClickDibsProduct: () => void;
  clicked: boolean;
  onClickChat: () => void;
}
