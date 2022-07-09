import { atom, selector } from "recoil";

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});
export const accessTokenState = atom({
  key: `accessTokenState`,
  default: "",
});
