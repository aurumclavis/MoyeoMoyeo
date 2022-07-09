import { atom, selector } from "recoil";
import { GetAccessToken } from "../libraries/getAccessToken";

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});
export const accessTokenState = atom({
  key: `accessTokenState`,
  default: "",
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await GetAccessToken();
    return newAccessToken;
  },
});

export const userInfoState = atom({
  key: `userInfoState`,
  default: {
    email: "",
    name: "",
    company: "",
    pm: "",
  },
});
