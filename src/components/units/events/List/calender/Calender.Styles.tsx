import styled from "@emotion/styled";
interface ITabProps {
  isActive: boolean;
}
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const CalenderWrapper = styled.div`
  width: 316px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  position: sticky;
  top: 60px;
  left: 0;
  z-index: 5;
  padding-right: 1rem;
  border-right: 1px solid #d2d2d2;
`;

export const CalenderText = styled.div`
  width: 70%;
  height: 30px;
  background-color: #d2d2d2;
`;

export const ListWrapper = styled.div`
  width: 600px;
  height: 1200px;
  display: ${(props: ITabProps) => (props.isActive ? "grid" : "none")};
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 0.63rem;
  margin-left: 1rem;
`;
export const List = styled.div`
  width: 150px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: 1rem;
  border: ${(props: ITabProps) =>
    props.isActive ? "1px solid #d2d2d2" : "none"};
  border-left: ${(props: ITabProps) =>
    props.isActive ? "1px solid #d2d2d2" : "3px solid #FFD24C"};

  @media (max-width: 767px) {
  }
`;
export const ListImg = styled.img`
  width: ${(props: ITabProps) => (props.isActive ? "150px" : "0")};
  height: ${(props: ITabProps) => (props.isActive ? "150px" : "0")};
  @media (max-width: 767px) {
  }
`;
export const FlexWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 25px;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  @media (max-width: 767px) {
  }
`;

export const ContentsWrapper = styled.div`
  font-size: 0.7rem;
  @media (max-width: 767px) {
  }
`;

export const Period = styled.div`
  width: 100%;
  height: 20%;
  font-size: 0.6rem;
  @media (max-width: 767px) {
  }
`;
export const Btn = styled.div`
  width: 100%;
  text-align: center;
  background-color: #42c2ff;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  :hover {
    border: 1px solid #ffffff;
  }
  @media (max-width: 767px) {
  }
`;
