import styled from "@emotion/styled";

export const Wrapper = styled.div``;

// 상품 등록(수정) 타이틀
export const WriteTitle = styled.h1`
  font-size: 2rem;
  padding-left: 1.25rem;
`;

// 상품 등록(수정) 입력 영역
export const WriteWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  background: #ffffff;
  border: 1px solid #d2d2d2;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 1.875rem 1.25rem;
`;

export const Label = styled.span`
  min-width: 8.75rem;
  font-size: 1.25rem;
  margin-bottom: 1.25rem;
`;

// Input 감싸는 Wrapper
export const InputWrapper = styled.div`
  display: flex;
  margin: 0.625rem 0;
`;
export const Input = styled.input`
  width: 100%;
  height: 2.813rem;
  padding: 0.625rem;
  border-radius: 5px;
  border: 1px solid #73777b;
  font-size: 1.25rem;
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

// 등록, 취소 버튼 감싸는 Wrapper
export const SubmitWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 1.875rem 0;
`;
export const SubmitBtn = styled.button`
  width: 10%;
  padding: 1rem;
  border: none;
  border-radius: 0.625rem;
  background-color: #ffd24c;
  font-size: 1.25rem;
`;
export const CancelBtn = styled.button`
  width: 10%;
  padding: 1rem;
  border: none;
  border-radius: 0.625rem;
  background-color: #d2d2d2;
  font-size: 1.25rem;
`;
