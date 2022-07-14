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
export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
// export const ColumnWrapper = styled.div`
//   width: 50%;
//   display: flex;
//   flex-direction: column;
//   margin: 0 auto;
// `;
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
export const TitleWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const DateWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const AddressWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
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
  margin-bottom: 1rem;
  .ql-container {
    height: 10rem;
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
  margin-left: 10%;
  margin-right: auto;
  border: none;
  border-radius: 5px;
  background-color: #ffd24c;

  cursor: pointer;
  :hover {
  }
  @media (max-width: 767px) {
    margin-left: 0;
  }
`;

export const Address = styled.input`
  width: 50%;
  height: 52px;
  border: 1px solid rgba(198, 211, 230, 1);
  border-radius: 5px;
  padding: 10px;
  font-size: 0.875rem;
  margin-bottom: 5px;
  :focus {
    outline: none;
    border: 2px solid #ffd24c;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
`;

export const ButtonOutWrapper = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  width: 40%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const CancleBtn = styled.div`
  width: 40%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 0.625rem;
  border: none;
  background-color: #d2d2d2;
  font-size: 1.25rem;
`;
