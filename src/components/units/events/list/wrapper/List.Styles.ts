import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6rem;
`;
export const TabWrapper = styled.div`
  display: flex;
  padding-top: 0.5rem;
  gap: 1.5rem;
`;
interface ITabProps {
  isActive: boolean;
}
export const Tab = styled.div`
  height: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: ${(props: ITabProps) => (props.isActive ? "700" : "none")};
  border-bottom: ${(props: ITabProps) =>
    props.isActive ? "3px solid #ffd24c" : "none"};
  :hover {
    cursor: pointer;
  }
`;
