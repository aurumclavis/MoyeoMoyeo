import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1.25rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LineDiv = styled.div`
  width: 100%;
  height: 1rem;
  border-top: 0.063rem solid #d2d2d2;
`;

export const HeaderTitle = styled.div`
  width: 100%;
  height: 5rem;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
`;

export const HeaderCalendar = styled.div`
  width: 100%;
  height: 3rem;
  text-align: center;
  font-size: 1.4rem;
`;
export const MainHost = styled.div`
  margin: 1rem;
  font-size: 1rem;
`;

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
  width: 80%;
  margin: 2rem 0;
`;
export const MarkerWrapper = styled.div`
  width: 60%;
  /* height: 20vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2.4rem 0;
  padding: 1rem;
  border: 1px solid #d2d2d2;
`;

export const MainTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
`;

export const MainContents = styled.div`
  width: 100%;
  height: 80%;
  margin: 1rem;
  font-size: 1.2rem;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  /* height: 47.5rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
`;

// export const MenuBtnWrapper = styled.div`
//   width: 100%;
//   height: 4rem;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   margin-top: 1rem;
//   padding: 0px 10%;
// `;
// export const MenuBtn = styled.div`
//   width: 49.9%;
//   height: 100%;
//   display: flex;
//   flex-direction: center;
//   justify-content: center;
//   align-items: center;
//   border-radius: 0.63rem 0.63rem 0 0;
//   background-color: #f4f4f4;
//   font-size: 1.2rem;
//   font-weight: 700;
//   cursor: pointer;
//   :hover {
//     background-color: #42c2ff;
//     color: #f4f4f4;
//   }
// `;

export const ContentImg = styled.img`
  width: 98%;
`;
export const ContetsText = styled.div`
  width: 70%;
  margin: 2rem;
  font-size: 1rem;
`;

export const Footer = styled.div`
  width: 100%;
  height: 9.375rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const BtnRouter = styled.div`
  width: 15.625rem;
  height: 4.375rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #42c2ff;
  color: #ffffff;
  font-size: 1.4rem;
  cursor: pointer;
  :hover {
    font-weight: 700;
    box-shadow: rgb(33 37 41 / 10%) 2px 10px 5px 0px;
  }
`;
export const BtnRouterList = styled.div`
  width: 15.625rem;
  height: 4.375rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d2d2d2;
  font-size: 1.4rem;
  cursor: pointer;
  :hover {
    font-weight: 700;
    box-shadow: rgb(33 37 41 / 10%) 2px 10px 5px 0px;
  }
`;
