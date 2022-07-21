import { Dispatch, SetStateAction } from "react";

export interface IMyPageSidebarProps {
  activedIndex: number;
  setActivedIndex: Dispatch<SetStateAction<number>>;
}
