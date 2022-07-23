import { atom, selector } from "recoil";
import { GetAccessToken } from "../libraries/getAccessToken";
import { v1 } from "uuid";
export const visitedPageState = atom({
  key: `visitedPageState/${v1()}`,
  default: "/",
});
export const accessTokenState = atom({
  key: `accessTokenState/${v1()}`,
  default: "",
});

// export const isLoadedState = atom({
//   key: "isLoadedState",
//   default: false,
// });

export const restoreAccessTokenLoadable = selector({
  key: `restoreAccessTokenLoadable/${v1()}`,
  get: async () => {
    const newAccessToken = await GetAccessToken();
    return newAccessToken;
  },
});

export const userInfoState = atom({
  key: `userInfoState/${v1()}`,
  default: {
    email: "",
    name: "",
    company: "",
    pm: "",
  },
});

export const eventIdForBoardState = atom({
  key: `eventIdForBoardState/${v1()}`,
  default: "",
});
export const dibsProductIdState = atom({
  key: `dibsProductIdState/${v1()}`,
  default: "",
});
export const boardGeneralWriteState = atom({
  key: "boardGeneralWriteState",
  default: false,
});
