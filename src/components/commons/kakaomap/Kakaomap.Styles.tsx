import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
interface ItapProps {
  isActive: boolean;
}
export const Wrapper = styled.div`
  width: 100%;
  height: auto;
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
  height: 450px;
  display: flex;
  justify-content: center;
  overflow: auto;
  @media ${breakPoints.mobile} {
    height: 300px;
  }
`;
export const CategoryBtn = styled.div`
  width: 120px;
  height: 2rem;
  margin: 1rem auto 1rem auto;
  /* padding-bottom: 3rem; */
  text-align: center;
  cursor: pointer;
  border-bottom: 3px solid #ffe69a;
`;

export const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const UlWrapper = styled.div`
  width: 90%;
  height: 60px;
  display: ${(props: ItapProps) => (props.isActive ? "flex" : "none")};
  flex-direction: row;
  justify-content: center;
`;

export const LiItems = styled.div`
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 7px;
  border: none;
  border-radius: 5px;
  background-color: #ffe69a;
  cursor: pointer;
`;
