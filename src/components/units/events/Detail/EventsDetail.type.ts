export interface IEventsDetailUI {
  data: any;
  currentUrl: string;
  activedTab: string;
  navRef: any;
  markerRef: any;
  contentsRef: any;
  mapsRef: any;
  onClickMoveToList: () => void;
  onClickMarker: (e: any) => void;
  onClickContents: (e: any) => void;
  onClickMaps: (e: any) => void;
  onScrollNav: () => void;
  onClickDibs: () => void;
  onClickLink: () => void;
  onClickMoveToBoardNew: () => void;
  onClickEdit: () => void;
}
