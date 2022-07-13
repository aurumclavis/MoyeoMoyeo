import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  width: 100%;
  /* height: 1847px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 10%;
`;

export const HeaderTitle = styled.div`
  width: 100%;
  height: 30px;
  margin-right: auto;
  font-size: 24px;
  font-weight: bold;
`;
export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 2rem;
  padding: 2rem 2.4rem;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
`;
export const SubTitle = styled.div`
  margin-top: 10px;
  padding-left: 5px;
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const Subject = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Quill = styled(ReactQuill)`
  width: 100%;
  .ql-container {
    height: 200px;
  }
  p {
    font-size: 1rem;
  }
`;

export const ContentQuill = styled(ReactQuill)`
  width: 100%;
  .ql-container {
    height: 30rem;
  }
  p {
    font-size: 1rem;
  }
`;
export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const SearchButton = styled.button`
  width: 100px;
  height: 52px;
  border: none;
  border-radius: 5px;
  background-color: #ffd24c;
  cursor: pointer;
  :hover {
  }
`;

export const Address = styled.input`
  width: 100%;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid rgba(198, 211, 230, 1);
  border-radius: 5px;
  padding: 10px;
  font-size: 0.875rem;
  margin-bottom: 5px;
  :focus {
    outline: none;
    border: 2px solid #ffd24c;
  }
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2rem;
`;
