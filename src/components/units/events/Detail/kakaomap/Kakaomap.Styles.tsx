import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100vw;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  @media ${breakPoints.mobile} {
    height: 300px;
  }
`;

export const MapWrapper = styled.div`
  width: 100vw;
  height: 500px;
  display: flex;
  justify-content: center;
  overflow: auto;
  @media ${breakPoints.mobile} {
    height: 300px;
  }
`;
