import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 10rem;
  /* height: 10%; */
  display: flex;

  justify-content: center;
  align-items: center;
  font-weight: 200;
  /* margin-bottom: 5%; */
  /* padding-top: 2%; */
  border-top: 0.063px solid #d2d2d2;
`;
export const InsideWrapper = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: column;
`;

export const LogoImg = styled.img`
  width: 6.25rem;
  margin-bottom: 2%;
  margin-right: auto;
  margin-left: 0.3rem;
`;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const LeftListWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  font-size: 14px;
  font-family: "Courier New", Courier, monospace;
`;
export const RightListWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-left: 1vw;
  font-size: 1em;
  font-family: "Courier New", Courier, monospace;
`;

export const ListTitle = styled.div`
  width: 6rem;
  margin-right: 1rem;
  font-family: "Courier New", Courier, monospace;
`;
export const ListContents = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Courier New", Courier, monospace;
`;
