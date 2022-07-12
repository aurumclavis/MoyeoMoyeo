import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 35%;
  @media screen and (max-width: 767px) {
    padding-left: auto;
  }
`;

export const InsideWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: start;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  grid-gap: 0.63rem;
  padding: 1.4rem;
  border-radius: 1.25rem;
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
    padding: 0.2rem;
    grid-gap: 0.034em;
  }
`;

export const LineDiv = styled.div`
  width: 100%;
  height: 1rem;
  border-top: 0.063rem solid #15133c;
`;

/// 행사 리스트 부분
export const ListWrapper = styled.div`
  width: 95%;
  height: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.6rem;
  margin-right: auto;
  padding: 0 1rem;
  border: 1px solid #d2d2d2;
  border-radius: 20px;
  :hover {
    box-shadow: rgb(33 37 41 / 10%) 0px 4px 8px 0px;
  }
  @media (max-width: 767px) {
    width: 75px;
    height: 130px;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 0.2rem;
    /* margin-right: 0.4rem; */
    padding: 0.4rem 0.1rem;
    border-radius: 10px;
  }
`;

export const ListImg = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 10px;
  @media (max-width: 767px) {
    width: 60px;
    height: 60px;
  }
`;
export const ContentsOutsideWrapper = styled.div`
  width: 100%;
  height: 78%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1rem;
  @media (max-width: 767px) {
    width: 100%;
    height: 45%;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 0.2rem;
  }
`;
export const ContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    justify-content: flex-start;
  }
`;

export const ContentsTitle = styled.div`
  width: 100%;
  height: 30%;
  font-style: Bold;
  font-size: 1.2rem;
  @media (max-width: 767px) {
    width: 100%;
    font-size: 0.6rem;
  }
`;
export const ContentsPeriod = styled.div`
  width: 100%;
  height: 20%;
  font-size: 0.4rem;
  @media (max-width: 767px) {
    width: 0%;
    height: 0%;
    font-size: 0rem;
  }
`;

export const Marker = styled.div`
  width: 100%;
  height: 50%;
  font-size: 0.6rem;
  overflow: hidden;
  @media (max-width: 767px) {
    height: 0%;
    font-size: 0rem;
  }
`;

export const Btn = styled.div`
  width: 10rem;
  height: 2.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #42c2ff;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  :hover {
    font-family: 600;
    border: 1px solid #ffffff;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: 10%;
    justify-content: center;
    font-size: 0.6rem;
  }
`;
