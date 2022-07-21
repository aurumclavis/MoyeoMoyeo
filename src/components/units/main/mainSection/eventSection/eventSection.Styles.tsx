import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";
export const OutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  @media ${breakPoints.mobile} {
    margin: 1rem 0rem 0rem 0rem;
    padding: 0 1.125rem;
  }
`;
export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const TitleIcon = styled.img`
  width: 20px;
  height: 16px;
  margin-right: 5px;
  @media ${breakPoints.mobile} {
    width: 1.5rem; //24
    height: 1.25rem; //20
  }
`;
export const Title = styled.h1`
  margin: 0;
  @media ${breakPoints.mobile} {
    font-size: 1.6rem;
  }
`;
export const TitleRightWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin-bottom: 30px;
`;

export const MoreBox = styled.div`
  width: 60px;
  display: flex;
  justify-content: flex-end;
`;
export const More = styled.span`
  width: 45px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    color: #42c2ff;
  }
  margin-right: 2px;
  text-align: center;
`;

export const ArrowIcon = styled.img`
  width: 10px;
  height: 11px;
  margin-top: 7px;
  @media ${breakPoints.mobile} {
    margin-top: 6px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const EventWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  @media ${breakPoints.mobile} {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-right: 2px;
  }
`;

export const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.2s;
  :hover {
    box-shadow: 3px 5px 1px 0px #ffd24c;
    transform: translateY(-5px);
    border-radius: 5px;
  }
`;

export const EventsImages = styled.img`
  width: 100%;
`;
export const InnderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const EventsName = styled.div`
  width: 100%;
  font-size: 0.875rem;
  text-align: center;
`;
export const EventsPlaces = styled.div`
  width: 100%;
  font-size: 0.875rem;
  text-align: center;
`;
export const EventsDate = styled.div`
  width: 100%;
  font-size: 0.875rem;
  text-align: center;
`;
