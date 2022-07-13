import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  width: 100%;
  margin: 3.125rem 0;
  padding: 0 1.125rem;
`;

// 상품 등록(수정) 타이틀
export const WriteTitle = styled.h1`
  margin: 0;
  padding-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

// 상품 등록(수정) 입력 영역
export const WriteForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: #ffffff;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
`;

export const Label = styled.span`
  font-size: 1.25rem;
  margin-bottom: 1.25rem;
`;

// Input 감싸는 Wrapper
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.625rem 0;
`;
export const Input = styled.input`
  width: 100%;
  height: 2.813rem;
  padding: 0.625rem;
  border-radius: 5px;
  border: 1px solid #73777b;
  font-size: 1rem;
  :focus {
    outline: none;
    border: 2px solid #ffd24c;
  }
`;

// 이미지 업로드
export const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  ::after {
    display: block;
    content: "";
    padding-bottom: 20%;
  }
`;
export const ImageItemWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.625rem;
  border: 1px dashed #73777b;
  border-radius: 5px;
  font-size: 2rem;
`;

// 웹에디터
export const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Editor = styled.div`
  width: 100%;
  height: 10rem;
  border: 1px solid #73777b;
`;
export const MyReactQuill = styled(ReactQuill)`
  .ql-container {
    height: 20rem;
  }
  .ql-container > .ql-editor.ql-blank::before {
    font-size: 1rem;
    color: rgba(198, 211, 230, 1);
    font-style: normal;
  }
  p {
    font-size: 1rem;
  }
`;

// 등록, 취소 버튼 감싸는 Wrapper
export const BtnWrapper = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
`;
export const SubmitWrapper = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-between;
  margin-right: 0.625rem;
  @media screen and (max-width: 767px) {
    width: 20%;
  }
`;
export const CancelBtn = styled.button`
  width: 100%;
  height: 100%;
  padding: 0 10%;
  border-radius: 0.625rem;
  border: none;
  background-color: #f4f4f4;
  font-size: 1.25rem;
  cursor: pointer;
`;
export const Error = styled.div`
  color: red;
  font-size: 0.875rem;
  padding-top: 0.625rem;
`;
