import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 200;
  /* margin-bottom: 5%; */
  padding-top: 2%;
  border-top: 0.063px solid #d2d2d2;
  @media (max-width: 767px) {
    height: auto;
  }
`;
export const InsideWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

export const LogoImg = styled.img`
  width: 6.25rem;
  margin-bottom: 2%;
  margin-right: auto;
  margin-left: 0.3rem;
  @media (max-width: 767px) {
    width: 6rem;
    margin-left: 0rem;
  }
`;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 767px) {
    /* flex-direction: column; */
    justify-content: flex-start;
  }
`;
export const LeftListWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  font-size: 1rem;
  @media (max-width: 767px) {
    margin-left: 10%;
    margin-right: auto;
    font-size: 0.6rem;
  }
`;
export const RightListWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-left: 1vw;
  font-size: 1rem;
  @media (max-width: 767px) {
    font-size: 0.6rem;
  }
`;

export const ListTitle = styled.div`
  width: 6rem;
  margin-right: 1rem;
`;
export const ListContents = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const ListText = styled.div`
  @media (max-width: 767px) {
    width: 100%;
  }
`;
