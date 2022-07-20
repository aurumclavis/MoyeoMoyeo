export interface IFestivalList {
  isActive?: boolean;
}

export interface IFestivalListUI {
  ToloadFunc: () => void;

  data: any;
  refetch: any;
}

export interface IFestivalListUIAdd {
  el: any;
  data: any;
}
