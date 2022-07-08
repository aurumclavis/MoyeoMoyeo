import { css } from "@emotion/react";
import { breakPoints } from "../../../styles/media";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 1rem;
    font-family: "mainfont";
  }
  @font-face {
    font-family: "mainfont";
    src: url("/fonts/LeferiPointWhiteOblique.ttf");
  }

  html {
    font-size: 16px;
    @media ${breakPoints.mobile} {
      font-size: 14px;
    }
  }
`;
