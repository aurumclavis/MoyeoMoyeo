import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100vw;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
export const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const UlWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LiItems = styled.div`
  width: 50px;
  height: 50px;
  margin-left: 30px;
  border: 1px solid black;
`;
