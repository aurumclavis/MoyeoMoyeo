import { css } from "@emotion/react";
import { breakPoints } from "./media";

export const globalStyles = css`
  * {
    margin: 0;
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
`;
