import styled from "@emotion/styled";

interface ITabProps {
  isActive: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0.4rem;
`;

export const ListWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  padding: ${(props: ITabProps) => (props.isActive ? "1rem" : "0.4rem")};
  margin: 0.4rem;
  margin-left: 1rem;
  flex-direction: row;
  justify-content: ${(props: ITabProps) =>
    props.isActive ? "flex-start" : "flex-end"};
  align-items: center;
  border: ${(props: ITabProps) =>
    props.isActive ? "1px solid #d2d2d2" : "none"};
  border-left: ${(props: ITabProps) =>
    props.isActive ? "1px solid #d2d2d2" : "3px solid #FFD24C"};
  border-radius: ${(props: ITabProps) =>
    props.isActive ? "1.25rem;" : "none"};
  @media (max-width: 767px) {
    height: 65px;
    margin: 2px;
    margin-left: 0px;
    font-size: 1rem;
    border-radius: 5px;
  }
`;
export const ListImg = styled.img`
  width: ${(props: ITabProps) => (props.isActive ? "110px" : "0")};
  height: ${(props: ITabProps) => (props.isActive ? "110px" : "0")};
  @media (max-width: 767px) {
    width: ${(props: ITabProps) => (props.isActive ? "50px" : "0")};
    height: ${(props: ITabProps) => (props.isActive ? "50px" : "0")};
  }
`;
export const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: auto;
  padding-left: 1rem;
`;

export const Title = styled.div`
  width: 100%;
  height: 20%;
  font-size: 1rem;
  font-weight: 700;
  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const ContentsWrapper = styled.div`
  font-size: 0.8rem;
  @media (max-width: 767px) {
    font-size: 0rem;
  }
`;

export const Period = styled.div`
  width: 100%;
  height: 20%;
  font-size: 0.6rem;
  @media (max-width: 767px) {
    font-size: 0rem;
  }
`;
export const Btn = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;
  color: #42c2ff;
  margin-top: auto;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  :hover {
    border: 1px solid #ffffff;
  }
  @media (max-width: 767px) {
    justify-content: center;
    text-align: center;
    padding-right: 0rem;
    font-size: 0.8rem;
  }
`;
