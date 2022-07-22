import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.4rem auto 1rem auto;
  @media (max-width: 767px) {
    width: 95%;
    margin: 0.4rem auto 1rem auto;
  }
`;

export const Select = styled.select`
  width: 120px;
  height: 1.6rem;
  margin-left: auto;
  margin-right: 2rem;
  margin-bottom: 1rem;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  color: #d2d2d2;
  text-align: center;
  font-size: 1rem;
`;
export const InsideWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;
export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(460px, 1fr));
  grid-gap: 1.25rem;
  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
    grid-gap: 5px;
  }
`;
export const ListWrapper = styled.div`
  width: 460px;
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  margin-top: 0.4rem;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  transition: 0.2s;
  box-shadow: 0px 2px 4px 0px #00000033;
  :hover {
    box-shadow: 0px 2px 4px 2px #00000033;
    transform: translateY(-5px);
  }
  @media (max-width: 767px) {
    width: 365px;
    height: 150px;
    padding: 0.4rem;
    border-radius: 0.4rem;
  }
`;
export const ListImg = styled.img`
  width: 100px;
  height: 100%;
  border-radius: 5px;
  @media (max-width: 767px) {
    width: 90px;
    height: 130px;
  }
`;
export const FlexWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: auto;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  @media (max-width: 767px) {
    padding-left: 0.4rem;
    padding-right: 0.4rem;
  }
`;

export const TitleWraepper = styled.div`
  width: 100%;
  height: 18%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;

    height: 40%;
  }
`;
export const Title = styled.div`
  width: 100%;
  height: 25%;
  font-size: 1.4rem;
  font-weight: 700;
  overflow: hidden;
  @media (max-width: 767px) {
    width: 100%;
    height: 20%;
    padding-top: 9px;
    font-size: 1rem;
  }
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  height: 56px;
  overflow: hidden;
  font-size: 0.8rem;
  @media (max-width: 767px) {
    height: 30px;
    font-size: 0.4rem;
  }
`;

export const Period = styled.div`
  width: 100%;
  font-size: 0.6rem;
  @media (max-width: 767px) {
    width: 100%;
    height: 10%;
    flex-direction: column;
    font-size: 7px;
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 767px) {
    height: 30%;
    flex-direction: column;
    justify-content: center;
  }
`;

export const CounterWrapper = styled.div`
  width: 60%;
  height: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: auto;
  @media (max-width: 767px) {
    justify-content: flex-start;
    width: 100%;
    height: 40%;
  }
`;

export const Counter = styled.div`
  width: 50%;
  color: #d2d2d2;
  font-size: 8px;
  @media (max-width: 767px) {
    width: 30%;
    font-size: 3px;
  }
`;

export const Btn = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 0.3rem;
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
    height: 50%;
    /* padding-right: 1rem; */
    font-size: 1rem;
  }
`;
