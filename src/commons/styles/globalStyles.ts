import { css } from "@emotion/react";
import { breakPoints } from "../../../styles/media";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    /* font-size: 1rem; */
  }

  html,
  body {
    height: 100vh;
    font-size: 16px;
    @media ${breakPoints.mobile} {
      font-size: 14px;
    }
  }
`;
