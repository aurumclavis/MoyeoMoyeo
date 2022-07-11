import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 55%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(650px, 1fr));
  grid-gap: 0.63rem;
  justify-content: start;
  padding: 1.4rem;
  margin-right: 1rem;
  border-radius: 1.25rem;
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    padding: 0.4rem;
    grid-gap: 0.023em;
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
  height: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: auto;
  padding: 0 1.2rem;
  border: 1px solid #d2d2d2;
  border-radius: 20px;
  transition: 0.2s;
  box-shadow: 0px 2px 4px 0px #00000033;
  :hover {
    box-shadow: 0px 2px 4px 2px #00000033;
    transform: translateY(-5px);
  }
  @media (max-width: 767px) {
    width: 120px;
    height: 190px;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 0.2rem;
    /* margin-right: 0.4rem; */
    padding: 0.5rem 0.1rem;
    border-radius: 10px;
  }
`;

export const ListImg = styled.img`
  width: 95px;
  height: 95px;
  border-radius: 10px;
  @media (max-width: 767px) {
    width: 90px;
    height: 90px;
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
    height: 40%;
    padding-left: 0rem;
    flex-direction: column;
    justify-content: center;
  }
`;
export const ContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const ContentsTitle = styled.div`
  width: 100%;
  height: 30%;
  font-style: Bold;
  font-size: 1.2rem;
  @media (max-width: 767px) {
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
  }
`;
export const ContentsPeriod = styled.div`
  width: 100%;
  height: 20%;
  font-size: 0.4rem;
  @media (max-width: 767px) {
  }
`;

export const Marker = styled.div`
  width: 100%;
  height: 50%;
  font-size: 0.6rem;
  overflow: hidden;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const Btn = styled.div`
  width: 10rem;
  height: 2.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #42c2ff;
  font-size: 1.2rem;
  cursor: pointer;
  :hover {
    font-family: 600;
    border: 1px solid #ffffff;
  }
  @media (max-width: 767px) {
    width: 100%;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 600;
  }
`;
