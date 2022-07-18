import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 0rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 767px) {
    padding: 0rem 1rem;
  }
`;

export const LineDiv = styled.div`
  width: 1rem;
  height: 100%;
  border-left: 0.63rem solid #d2d2d2;
`;

export const Date = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-top: 0.5rem;
  padding-left: 10%;
  gap: 1.5rem;
`;
interface ITabProps {
  isActive: boolean;
}
export const Tab = styled.div`
  /* width: 80px; */
  height: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.4rem;
  font-weight: ${(props: ITabProps) => props.isActive && "700"};
  border-bottom: ${(props: ITabProps) =>
    props.isActive ? "3px solid #ffd24c" : " 3px solid white"};
  :hover {
    cursor: pointer;
  }
  @media (max-width: 767px) {
    width: 55px;
    height: 2rem;
    justify-content: center;
    margin-left: 0.3rem;
    margin-bottom: 0.63rem;
    font-size: 0.8rem;
  }
`;

export const TabWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 18;
  margin-bottom: 1rem;
  padding-top: 0.5rem;

  @media (max-width: 767px) {
    position: sticky;
    top: 3.4rem;
    align-items: center;
    margin-bottom: 0;
  }
`;

export const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DateWrapper = styled.div`
  width: 100%;
  display: ${(props: ITabProps) => (props.isActive ? " flex" : "none")};

  margin-top: 1rem;
  @media (max-width: 767px) {
    display: ${(props: ITabProps) => (props.isActive ? " flex" : "none")};
  }
`;
export const FestivalWrapper = styled.div`
  width: 100%;
  display: ${(props: ITabProps) => (props.isActive ? "flex" : "none")};

  @media (max-width: 767px) {
  }
`;
export const EventsWrapper = styled.div`
  width: 100%;
  display: ${(props: ITabProps) => (props.isActive ? "flex" : "none")};
  @media (max-width: 767px) {
  }
`;

export const EventsBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const EventWriteBtn = styled.div`
  width: 5.2rem;
  height: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  border-radius: 5px;
  background-color: #15133c;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  @media (max-width: 767px) {
    width: 60px;
    height: 30px;
  }
`;
