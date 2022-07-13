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
  border-left: 1px solid #d2d2d2;
  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 5px;
  }
`;

export const ListWrapper = styled.div`
  width: 90%;
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  margin-top: 0.4rem;
  border: 1px solid #d2d2d2;
  border-radius: 1.25rem;
  @media (max-width: 767px) {
    width: 150px;
    height: 200px;
    flex-direction: column;
    padding: 0.4rem;
    border-radius: 0.4rem;
  }
`;
export const ListImg = styled.img`
  width: 110px;
  height: 110px;
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
  width: 65%;
  font-size: 0.6rem;
  text-align: end;
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
  width: 20%;
  color: #d2d2d2;
  @media (max-width: 767px) {
    width: 100%;
    height: 30%;
    text-align: center;
    font-size: 3px;
    padding-top: 5%;
  }
`;

export const Btn = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
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
