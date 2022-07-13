import styled from "@emotion/styled";

//전체;
export const OutWrapper = styled.div`
  width: 100%;
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
  margin-bottom: 30px;
`;
export const CommonTitle = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

// sns
export const SnsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 90px 20px 90px;
  border-bottom: 1px solid #edf0f5;
  margin-bottom: 20px;
`;

export const SnsLogo = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid #edf0f5;
  cursor: pointer;
`;

export const CommonSubTitle = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 5px;
  font-size: 0.875rem;
`;

// mobile
export const MobileInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 30px 0px;
`;
export const NumberInputs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
export const MobileAuthBtn = styled.div`
  width: 123px;
  height: 37px;
  text-align: center;
  padding-top: 7px;
  border: 1px solid #edf0f5;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.825rem;
  :disabled {
    background-color: #edf0f5;
  }
  /* background-color: ${(props) =>
    props.isActive ? "#FFD24C" : "#edf0f5"}; */
`;

//인증번호
export const NewAuthWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Timer = styled.div`
  color: #ff9a31;
  font-size: 0.825rem;
  display: flex;
  align-items: center;
`;
export const AuthInput = styled.input`
  width: 140px;
  height: 37px;
  border: 1px solid rgba(198, 211, 230, 1);
  border-radius: 5px;
  padding: 10px;
  font-size: 0.875rem;
  margin-bottom: 5px;
  ::placeholder {
    font-size: 0.875rem;
    color: rgba(198, 211, 230, 1);
    font-weight: 700px;
  }
  :focus {
    outline: none;
    border: 2px solid #ffd24c;
  }
`;
export const MobileGetNumAgainBtn = styled.div`
  width: 120px;
  height: 37px;
  background-color: #ffffff;
  text-align: center;
  padding-top: 7px;
  border: 1px solid #ffd24c;
  border-radius: 5px;
  font-size: 0.875rem;
  cursor: pointer;
  :hover {
    background-color: #ffd24c;
    color: black;
    border: 1px solid black;
  }
`;
export const MobileAuthCheckBtn = styled.div`
  width: 80px;
  height: 37px;
  background-color: #ffffff;
  text-align: center;
  padding-top: 7px;
  border: 1px solid #ffd24c;
  border-radius: 5px;
  font-size: 0.875rem;
  cursor: pointer;
  :hover {
    background-color: #ffd24c;
    color: black;
    border: 1px solid black;
  }
`;

//checkbox
export const CheckBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  margin-bottom: 30px;
`;
export const CheckedIcon = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const CommonCheckBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const SubCommonCheckBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 30px;
  margin-bottom: 10px;
`;
export const CheckBoxTitle = styled.span`
  text-align: center;
`;

//submit

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 56px;
`;
export const SubmitBtn = styled.button`
  /* width: 100%;
  height: 56px; */
  text-align: center;
  border: 1px solid #edf0f5;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  background-color: ${(props) => (props.isActive ? "#FFD24C" : "#edf0f5")};
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
//hook-form error
export const Error = styled.div`
  width: 100%;
  color: red;
  font-size: 0.563rem;
  padding-left: 10px;
  text-align: left;
`;
// 이용약관
export const Policy = styled.span`
  color: #42c2ff;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
