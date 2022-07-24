import { Dispatch, MouseEvent, MutableRefObject, SetStateAction } from "react";

export interface IBoardListContainerProps {
  rawData: any;
  userData: any;
}

export interface IBoardListPresenter {
  eventCategory: string[];
  isUseDateChanger: boolean;
  selectAccompanyDate: boolean;
  selectLatest: boolean;
  selectRequested: boolean;
  onClickViewAccompanyDate: (event: MouseEvent<HTMLDivElement>) => void;
  onClickViewLatest: (event: MouseEvent<HTMLDivElement>) => void;
  onClickViewRequested: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickViewRecruit: (event: MouseEvent<HTMLButtonElement>) => void;
  selectViewRecruit: boolean;
  data: any;
  setData: Dispatch<SetStateAction<any>>;
  viewTypeData: any;
  setCategoryData: Dispatch<SetStateAction<any>>;
  fromToDate: any;
  onClickWeeklyMonthly: (event: MouseEvent<HTMLButtonElement>) => void;
  isWeekly: boolean;
  onClickArrowLeft: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickArrowRight: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickCreateBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  subHeader: MutableRefObject<HTMLDivElement>;
  isSubHeaderOnTop: boolean;
  onClickGoDetail: (el: string) => (event: MouseEvent<HTMLDivElement>) => void;
  userData: any;
  selectedCategoryName: string;
  setSelectedCategoryName: Dispatch<SetStateAction<any>>;
  onClickRequestAccompany: (
    el: string
  ) => (el: string) => (event: MouseEvent<HTMLDivElement>) => void;
  requestedBoardList: string[];
}

export interface ISubHeaderWrapperProps {
  isSubHeaderOnTop: boolean;
}
export interface IViewTotalProps {
  selectAccompanyDate: boolean;
}
export interface IViewLatestProps {
  selectLatest: boolean;
}
export interface IViewAccompanyProps {
  selectRequested: boolean;
}
export interface IRecruitmentViewTypeButtonProps {
  selectViewRecruit: boolean;
}
export interface IRecruitmentProps {
  recruited: boolean;
}
export interface IItemRightProps {
  requested: boolean;
}

export interface IUnevenSetsFiniteProps {
  eventCategory: string[];
  selectedCategoryName: string;
  setSelectedCategoryName: Dispatch<SetStateAction<any>>;
  viewTypeData: any;
  setCategoryData: Dispatch<SetStateAction<any>>;
}

export interface IEachItemProps {
  selectedCategoryName: string;
  index: number;
  el: string;
  setClickedIndex: Dispatch<SetStateAction<any>>;
  setSelectedCategoryName: Dispatch<SetStateAction<any>>;
  setCategoryData: Dispatch<SetStateAction<any>>;
  viewTypeData: any;
  clickedIndex: number;
}
export interface IItemProps {
  isViewTotal: boolean;
  clicked: boolean;
}
