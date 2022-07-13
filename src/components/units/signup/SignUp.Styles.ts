import styled from "@emotion/styled";

//전체
export const OutWrapper = styled.div`
  width: 100%;
  /* height: 50vh; */
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #bdbdbd; */
`;

//inner
export const Wrapper = styled.div`
  max-width: 1200px;
  /* height: 50%; */
  background-color: #ffffff;
  /* border: 1px solid #bdbdbd; */
  border-radius: 3px;
  padding: 15px;
`;

//헤더
export const HeaderWrapper = styled.div`
  width: 100%;
  height: 30px;
  margin: 30px 0px;
`;
export const HeaderTitle = styled.h1`
  & span {
    color: #42c2ff;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HeaderIcon = styled.img`
  width: 2.438rem; // 39px
  height: 1.938rem; // 31px
`;

//바디
export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
export const BodyCommonContainer = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  margin: 15px;
  padding: 30px;
  @media (max-width: 767px) {
    width: 100%;
    height: 20%;
    padding: 10px 15px;
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const BodyCommonIcon = styled.img`
  width: 120px;
  height: 120px;
  border: 1px solid #bdbdbd;
  border-radius: 50%;
  @media (max-width: 767px) {
    width: 25%;
    height: 25%;
  }
`;

export const BodySubCommonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10px;
  @media (max-width: 767px) {
    margin-left: 5%;
    height: 25%;
  }
`;

export const BodyCommonTitle = styled.span`
  width: 100%;
  text-align: center;
  color: #bdbdbd;
  font-weight: 500;
  @media (max-width: 767px) {
    display: flex;
    font-size: 0.8rem;
  }
`;
export const BodyCommonSubTitle = styled.span`
  width: 100%;
  text-align: center;
  color: #42c2ff;
  font-weight: 700;
  margin-bottom: 10px;
  @media (max-width: 767px) {
    display: flex;
    font-size: 1rem;
  }
`;
export const BodyCommonButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  border: 2px solid #ffd24c;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #ffd24c;
    border: 2px solid black;
    /* color: #ffffff; */
  }
  @media (max-width: 767px) {
    height: 35px;
    font-size: 1rem;
  }
`;

// footer
export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
export const FooterTitle = styled.span`
  font-size: 0.875rem;
  margin-right: 5px;
  color: #bdbdbd;
`;
export const FooterBtn = styled.div`
  font-size: 0.875rem;
  color: #42c2ff;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
