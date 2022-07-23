import { MouseEvent, MutableRefObject } from "react";

export interface IEventsDetailUI {
  data: any;
  currentUrl: string;
  activedTab: string;
  navRef: MutableRefObject<HTMLDivElement>;
  markerRef: MutableRefObject<HTMLDivElement>;
  contentsRef: MutableRefObject<HTMLDivElement>;
  mapsRef: MutableRefObject<HTMLDivElement>;
  onClickMoveToList: () => void;
  onClickMarker: (e: MouseEvent<HTMLDivElement>) => void;
  onClickContents: (e: MouseEvent<HTMLDivElement>) => void;
  onClickMaps: (e: MouseEvent<HTMLDivElement>) => void;
  onScrollNav: () => void;
  onClickDibs: () => void;
  onClickLink: () => void;
  onClickMoveToBoardNew: () => void;
  onClickEdit: () => void;
  onClickShowConfirm: () => void;
}
