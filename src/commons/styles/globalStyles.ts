import { css } from "@emotion/react";
import { breakPoints } from "./media";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-size: 1rem; */
  }

  html,
  body {
    font-size: 16px;
    @media ${breakPoints.mobile} {
      font-size: 14px;
    }
  }
  @font-face {
    font-family: "Yoony"; // 이름 선언
    src: url("/font/EF_YOONY.ttf"); // 내가 저장한 경로!
  }
  @font-face {
    font-family: "Leferi";
    src: url("/font/LeferiPointWhiteOblique.ttf"); // 내가 저장한 경로!
  }
`;
