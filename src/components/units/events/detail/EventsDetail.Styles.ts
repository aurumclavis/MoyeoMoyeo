import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.063rem solid #15133c;
  border-radius: 1.25rem;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 4.688rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0.063rem 2%;
  border-radius: 1.25rem 1.25rem 0 0;
  border-bottom: 0.188 solid #d2d2d2;
  background-color: #ffe69a;
`;

export const HeaderTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
`;

export const HeaderCalendar = styled.div`
  font-size: 1rem;
`;
export const BodyWrapper = styled.div``;

export const MainWrapper = styled.div`
  width: 100%;
  height: 23.75rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0% 2%;
  align-items: center;
`;

export const MainImg = styled.img`
  width: 28.75rem;
  height: 21.563rem;
`;
export const MainLeftWrapper = styled.div`
  width: 50%;
  height: 21.563rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 4%;
`;

export const MainHeaderWrapper = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 1rem;
  border-bottom: 1px solid #73777b;
`;

export const MainTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
`;

export const MainHost = styled.div`
  font-size: 1rem;
`;

export const MainContents = styled.div`
  height: 80%;
  font-size: 1rem;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  height: 47.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuBtnWrapper = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 1rem;
  padding: 0px 10%;
`;
export const MenuBtn = styled.div`
  width: 49.9%;
  height: 100%;
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  border-radius: 0.63rem 0.63rem 0 0;
  background-color: #f4f4f4;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  :hover {
    background-color: #42c2ff;
    color: #f4f4f4;
  }
`;

export const Contents = styled.div`
  width: 80%;
  padding: 1.875rem;
  display: flex;
  justify-content: center;
  border: 1px solid #b8fff9;
  border-radius: 0 0 0.63rem 0.63rem;
`;
export const ContentImg = styled.img`
  width: 46.25rem;
`;
export const ContetsText = styled.div``;

export const Footer = styled.div`
  width: 100%;
  height: 9.375rem;
  border-top: 0.063px solid #15133c;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const BtnRouter = styled.div`
  width: 12.5rem;
  height: 3.125rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #42c2ff;
  color: #ffffff;
  cursor: pointer;
`;
export const BtnRouterList = styled.div`
  width: 6.25rem;
  height: 3.125rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d2d2d2;
  cursor: pointer;
`;
