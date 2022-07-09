import styled from "@emotion/styled";

//전체;
export const OutWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* background-color: #bdbdbd; */
`;

//내용
export const Wrapper = styled.div`
  width: 430px;
  background-color: #ffffff;
  /* border: 1px solid #bdbdbd; */
  border-radius: 3px;
  padding: 50px 15px;
`;

export const HeaderTitle = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
  & span {
    color: #42c2ff;
  }
`;
export const CommonTitle = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

export const CommonSubTitle = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 5px;
  font-size: 0.875rem;
`;
//submit
export const SubmitBtn = styled.button`
  width: 100%;
  height: 56px;
  text-align: center;
  border: 1px solid #edf0f5;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
`;

//findpw
export const findPassword = styled.div`
  width: 100%;
  text-align: right;
  font-size: 0.875rem;
  cursor: pointer;
  color: #bdbdbd;
  margin-bottom: 40px;
  padding-top: 10px;
  :hover {
    color: #42c2ff;
  }
`;

// footer
export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  border-top: 1px solid #edf0f5;
  padding-top: 20px;
`;
export const FooterTitle = styled.span`
  font-size: 0.875rem;
  margin-right: 5px;
  color: #bdbdbd;
`;
export const FooterBtn = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffd24c;
  background-color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0px;
  :hover {
    background-color: #ffd24c;
    border: 1px solid black;
  }
`;
