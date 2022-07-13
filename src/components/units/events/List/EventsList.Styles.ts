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

export const TabWrapper = styled.div`
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
  width: 62px;
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

export const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const FestivalWrapper = styled.div`
  width: ${(props: ITabProps) => (props.isActive ? "45%" : "15%")};
  display: flex;
  flex-direction: column;
`;
export const EventsWrapper = styled.div`
  width: ${(props: ITabProps) => (props.isActive ? "85%" : "52%")};
  display: flex;
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
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #ffd24c;
`;
