import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0.4rem auto;
  @media (max-width: 767px) {
    width: 95%;
    margin: 0.4rem auto 1rem auto;
  }
`;

export const InsideWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;

  @media (max-width: 767px) {
  }
`;
export const Select = styled.select`
  width: 120px;
  height: 1.6rem;
  /* margin-left: auto; */
  /* margin-right: 1rem; */
  margin-left: auto;
  margin-bottom: 1rem;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  color: #d2d2d2;
  text-align: center;
  font-size: 1rem;
`;
export const ListWrapper = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-top: 1rem;
  border: 1px solid #d2d2d2;
  border-left: 1px solid #d2d2d2;
  border-radius: 0.63rem;
  transition: 0.2s;
  box-shadow: 0px 2px 4px 0px #00000033;
  :hover {
    box-shadow: 0px 2px 4px 2px #00000033;
    transform: translateY(-5px);
  }
  @media (max-width: 767px) {
    width: 90%;
    margin: 2px;
    padding: 8px;
    font-size: 1rem;
    border-radius: 5px;
  }
`;
export const ListImg = styled.img`
  width: 100px;
  height: 100px;
  @media (max-width: 767px) {
    width: 70px;
    height: 100px;
  }
`;
export const FlexWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 1rem;
  @media (max-width: 767px) {
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 22%;
  font-size: 1rem;
  font-weight: 700;
  overflow: hidden;
  @media (max-width: 767px) {
    height: 1rem;
    font-size: 0.8rem;
  }
`;

export const ContentsWrapper = styled.div`
  height: 40%;
  font-size: 0.7rem;
  overflow: hidden;
  @media (max-width: 767px) {
    height: 68%;
    font-size: 0.4rem;
  }
`;
export const MobileWrapper = styled.div`
  width: 100%;
  height: 38%;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    height: 1rem;
    flex-direction: row;
  }
`;

export const Period = styled.div`
  width: 100%;
  font-size: 0.6rem;
  @media (max-width: 767px) {
  }
`;
export const Btn = styled.div`
  width: 100%;
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
    /* height: 40%;
    justify-content: center;
    text-align: center;
    padding-right: 0rem;
    font-size: 0.4rem; */
  }
`;
