export interface ILayoutHeaderUI {
  isStaff: boolean | undefined;
  isOpen: boolean;
  onClickMobileLogo: () => void;
  onClickMobileTab: (e: any) => void;
  onClickMobileMenu: () => void;
  accessToken: string;
  activedTab: string | null;
  onClickTab: (e: any) => void;
  onClickLogout: () => void;
}
