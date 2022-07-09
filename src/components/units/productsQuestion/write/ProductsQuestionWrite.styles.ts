import styled from "@emotion/styled";
export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const WriteTitle = styled.h2`
  width: 100%;
  margin: 0;
  padding-bottom: 20px;
  font-size: 1.5rem;
  font-weight: 600;
`;
export const WriteInput = styled.textarea`
  height: 120px;
  margin: 0.625rem 0;
  padding: 0.625rem;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  font-size: 1rem;
  resize: none;
  :focus {
    outline: none !important;
    border: 1px solid #ffd24c;
  }
`;
export const WriteBtnWrapper = styled.div`
  height: 45px;
  display: flex;
  justify-content: flex-end;
`;

export const WriteBtn = styled.button`
  width: auto;
  padding: 0.625rem 3%;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  background: rgba(255, 210, 76, 0.3);
  :hover {
    cursor: pointer;
    background-color: #ffd24c;
    outline: none;
    transition: 0.5s ease;
  }
`;
