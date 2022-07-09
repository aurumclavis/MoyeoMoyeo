import styled from "@emotion/styled";

//전체;
export const OutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* background-color: #bdbdbd; */
`;

//내용
export const Wrapper = styled.form`
  width: 430px;
  background-color: #ffffff;
  /* border: 1px solid #bdbdbd; */
  border-radius: 3px;
  padding: 50px 15px;
`;

export const HeaderTitle = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
`;
export const CommonTitle = styled.div`
  width: 100%;
  text-align: center;
  margin: 20px 0px;
`;
export const CommonSubTitle = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 5px;
  font-size: 0.875rem;
`;
// 관계자
export const SubWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  border-bottom: 1px solid #edf0f5;
  padding-bottom: 10px;
`;
export const SubTitle = styled.span`
  font-size: 0.875rem;
  margin-right: 5px;
  color: #bdbdbd;
`;
export const SubBtn = styled.div`
  font-size: 0.875rem;
  color: #42c2ff;
  cursor: pointer;
`;

// sns
export const SnsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 90px 20px 90px;
  margin-bottom: 20px;
`;

export const SnsLogo = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid #edf0f5;
  cursor: pointer;
`;

//submit
export const SubmitBtn = styled.button`
  width: 100%;
  height: 56px;
  text-align: center;
  margin-top: 20px;
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

//findpw
export const findPassword = styled.div`
  width: 100%;
  text-align: right;
  font-size: 0.875rem;
  cursor: pointer;
  color: #bdbdbd;
  margin-bottom: 40px;
  padding: 10px 0px 20px 0px;
  border-bottom: 1px solid #edf0f5;
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
  align-items: center;
  justify-content: center;
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

//hook-form error
export const Error = styled.div`
  width: 100%;
  color: red;
  font-size: 0.563rem;
  padding-left: 10px;
  text-align: left;
`;
