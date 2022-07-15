import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 100px;
  @media ${breakPoints.mobile} {
    gap: 5px;
  }
`;
