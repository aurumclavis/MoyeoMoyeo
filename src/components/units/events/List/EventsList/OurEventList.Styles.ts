import styled from "@emotion/styled";

interface ITabProps {
  isActive: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(85%, 1fr));
  margin-top: 0.4rem;
  padding-left: 1rem;

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 5px;
  }
`;

export const ListWrapper = styled.div`
  width: 95%;
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  margin-top: 0.4rem;
  border: ${(props: ITabProps) =>
    props.isActive ? "1px solid #d2d2d2" : "none"};
  border-left: ${(props: ITabProps) =>
    props.isActive ? "1px solid #d2d2d2" : "3px solid #FFD24C"};
  border-radius: ${(props: ITabProps) =>
    props.isActive ? "0.63rem;" : "none"};
  @media (max-width: 767px) {
    width: 150px;
    height: 200px;
    flex-direction: column;
    padding: 0.4rem;
    border-radius: 0.4rem;
  }
`;
export const ListImg = styled.img`
  width: ${(props: ITabProps) => (props.isActive ? "100px" : "0")};
  height: ${(props: ITabProps) => (props.isActive ? "100px" : "0")};
`;
export const FlexWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: auto;
  padding-left: 1rem;
`;

export const TitleWraepper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    height: 40%;
  }
`;
export const Title = styled.div`
  width: 35%;
  height: 100%;
  font-size: 1.4rem;
  font-weight: 700;
  @media (max-width: 767px) {
    width: 100%;
    height: 40%;
    font-size: 1rem;
    text-align: center;
  }
`;

export const ContentsWrapper = styled.div`
  font-size: 0.8rem;
  @media (max-width: 767px) {
    font-size: 0;
  }
`;

export const Period = styled.div`
  width: 100%;
  font-size: 0.6rem;
  @media (max-width: 767px) {
    width: 100%;
    height: 60%;
    flex-direction: column;
    text-align: center;
    font-size: 6px;
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 767px) {
    height: 58%;
    flex-direction: column;
    justify-content: center;
  }
`;
export const Counter = styled.div`
  width: 30%;
  color: #d2d2d2;
  font-size: 8px;
  @media (max-width: 767px) {
    width: 100%;
    height: 30%;
    text-align: center;
    font-size: 3px;
    padding-top: 5%;
  }
`;

export const Btn = styled.div`
  width: ${(props: ITabProps) => (props.isActive ? "40%" : "100%")};
  height: 100%;
  display: flex;
  justify-content: ${(props: ITabProps) =>
    props.isActive ? "flex-end" : "center"};
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
    width: 100%;
    height: 40%;
    justify-content: center;
    align-items: flex-end;
    padding-right: 0rem;
    font-size: 1rem;
  }
`;
