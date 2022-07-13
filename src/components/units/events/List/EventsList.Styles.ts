import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  width: 80px;
  height: 3.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1.4rem;
  font-weight: ${(props: ITabProps) => (props.isActive ? "700" : "none")};
  border-bottom: ${(props: ITabProps) =>
    props.isActive ? "3px solid #ffd24c" : "none"};
  :hover {
    cursor: pointer;
  }
  @media (max-width: 767px) {
    justify-content: flex-start;
    margin-left: 0.6rem;
    font-size: 1rem;
  }
`;

export const TabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 15;
  margin-bottom: 1rem;
`;

export const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
export const DateWrapper = styled.div`
  width: ${(props: ITabProps) => (props.isActive ? "100%" : "316px")};
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`;
export const FestivalWrapper = styled.div`
  width: ${(props: ITabProps) => (props.isActive ? "30%" : "15%")};
  display: ${(props: ITabProps) => (props.isActive ? "flex" : "none")};
  flex-direction: column;
`;
export const EventsWrapper = styled.div`
  width: ${(props: ITabProps) => (props.isActive ? "40%" : "20%")};
  display: ${(props: ITabProps) => (props.isActive ? "flex" : "none")};
  flex-direction: column;
  @media (max-width: 767px) {
    margin-left: 1rem;
  }
`;

export const EventsBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const EventWriteBtn = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  border-radius: 10px;
  background-color: #ffd24c;
`;
