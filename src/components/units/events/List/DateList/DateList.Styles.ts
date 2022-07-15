import styled from "@emotion/styled";
import { DatePicker } from "antd";
interface ITabProps {
  isActive: boolean;
}
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const NavWrapper = styled.div`
  width: 90%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 1rem auto;
  background-color: white;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  @media (max-width: 767px) {
    width: 100%;
    height: 160px;
    flex-direction: column;
    justify-content: center;
    top: 6rem;
  }
`;
export const InsideWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const NavTitle = styled.div`
  width: 70%;
  height: 30px;
  font-weight: 600;
  text-align: center;
`;

export const DatePick = styled(DatePicker)`
  width: 275px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1.9rem;
  border-radius: 5px;
  border: 1px solid #15133c;
  background-color: white;
  @media (max-width: 767px) {
    width: 90%;
  }
`;

export const SelectWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Select = styled.select`
  width: 275px;
  height: 40px;
  padding: 0.5rem 1.9rem;
  border: 1px solid #15133c;
  border-radius: 5px;
  @media (max-width: 767px) {
    width: 90%;
  }
`;

export const ListWrapper = styled.div`
  width: 90%;
  display: ${(props: ITabProps) => (props.isActive ? "grid" : "none")};
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 0.63rem;
  margin: 1rem auto;

  @media (max-width: 767px) {
    width: 90%;
    grid-template-rows: repeat(auto-fill, minmax(180px, 1fr));
    grid-gap: 5px;
    margin-top: 10px;
    margin-left: 0rem;
  }
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
  transition: 0.2s;
  box-shadow: 0px 2px 4px 0px #00000033;
  :hover {
    box-shadow: 0px 2px 4px 2px #00000033;
    transform: translateY(-5px);
  }
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
