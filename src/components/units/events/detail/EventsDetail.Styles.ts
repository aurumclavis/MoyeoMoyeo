import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin: 2% 0%;
  padding: 0% 2%;
  border-radius: 20px 20px 0px 0px;
  border-bottom: 3px solid #d2d2d2;
  background-color: #ffe69a;
`;

export const HeaderTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
`;

export const HeaderCalendar = styled.div`
  font-size: 1rem;
`;

export const MainWrapper = styled.div`
  width: 100%;
  height: 380px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0% 2%;
  align-items: center;
`;

export const MainImg = styled.img`
  width: 460px;
  height: 345px;
`;
export const MainLeftWrapper = styled.div`
  width: 50%;
  height: 345px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 4%;
`;

export const MainHeaderWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid #d2d2d2;
`;

export const MainTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export const MainHost = styled.div`
  font-size: 1rem;
`;

export const MainContents = styled.div`
  height: 80%;
  font-size: 16px;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  height: 760px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuBtnWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
  padding: 0px 10%;
`;
export const MenuBtn = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px 0px 0px;
  background-color: #f4f4f4;
  cursor: pointer;
  :hover {
    background-color: #42c2ff;
    color: #f4f4f4;
  }
`;

export const Contents = styled.div`
  width: 80%;
  padding: 30px;
  display: flex;
  justify-content: center;
  border: 1px solid #f4f4f4;
`;
export const ContentImg = styled.img`
  width: 740px;
`;
export const ContetsText = styled.div``;

export const Footer = styled.div`
  width: 100%;
  height: 150px;
  border-top: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const BtnRouter = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #42c2ff;
  color: #ffffff;
  cursor: pointer;
`;
export const BtnRouterList = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d2d2d2;
  cursor: pointer;
`;

// Width
// Height
// Display
// flex-direction
//  justify-content
// Align- item
// Margin
// Padding
// Border
// Color
// Background
// Font-size
// Font-weight
