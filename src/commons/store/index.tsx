import { atom, selector } from "recoil";

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});
