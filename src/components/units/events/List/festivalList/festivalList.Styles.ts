import styled from "@emotion/styled";

interface ITabProps {
  isActive: boolean;
}
export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0.4rem auto;
  @media (max-width: 767px) {
    width: 95%;
    margin: 0.4rem auto 0 0;
  }
`;

export const InsideWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 0.63rem;
  margin: 0.4rem auto;
  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;
export const Select = styled.select`
  width: 120px;
  height: 1.6rem;
  /* margin-left: auto; */
  margin-right: 2rem;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  color: #d2d2d2;
  text-align: center;
  font-size: 1rem;
`;
export const ListWrapper = styled.div`
  width: 300px;
  height: 130px;
  display: flex;
  flex-direction: row;
  justify-content: ${(props: ITabProps) =>
    props.isActive ? "space-between" : "flex-end"};
  align-items: center;
  padding: ${(props: ITabProps) => (props.isActive ? "1rem" : "0.4rem")};
  margin-top: 0.4rem;
  border: ${(props: ITabProps) =>
    props.isActive ? "1px solid #d2d2d2" : "none"};
  border-left: ${(props: ITabProps) =>
    props.isActive ? "1px solid #d2d2d2" : "3px solid #FFD24C"};
  border-radius: ${(props: ITabProps) =>
    props.isActive ? "0.63rem;" : "none"};
  @media (max-width: 767px) {
    width: 130px;
    height: 65px;
    margin: 2px;
    margin-left: 0px;
    padding: 8px;
    font-size: 1rem;
    border-radius: 5px;
  }
`;
export const ListImg = styled.img`
  width: ${(props: ITabProps) => (props.isActive ? "100px" : "0")};
  height: ${(props: ITabProps) => (props.isActive ? "100px" : "0")};
  @media (max-width: 767px) {
    width: ${(props: ITabProps) => (props.isActive ? "50px" : "0")};
    height: ${(props: ITabProps) => (props.isActive ? "50px" : "0")};
  }
`;
export const FlexWrapper = styled.div`
  width: 140px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: auto;
  padding: 3px 0;
  @media (max-width: 767px) {
    width: 60px;
    height: 100%;
    margin-left: auto;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 22%;
  font-size: 1rem;
  font-weight: 700;
  @media (max-width: 767px) {
    height: 40%;
    font-size: 0.6rem;
    text-align: center;
  }
`;

export const ContentsWrapper = styled.div`
  height: 40%;
  font-size: 0.7rem;
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
  height: 16%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;
  color: #42c2ff;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  :hover {
    border: 1px solid #ffffff;
  }
  @media (max-width: 767px) {
    height: 40%;
    justify-content: center;
    text-align: center;
    padding-right: 0rem;
    font-size: 0.4rem;
  }
`;
