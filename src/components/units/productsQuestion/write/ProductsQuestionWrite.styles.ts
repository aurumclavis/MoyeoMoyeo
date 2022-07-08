import styled from "@emotion/styled";
export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.25rem;
`;
export const WriteTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: bold;
`;
export const WriteInput = styled.textarea`
  height: 120px;
  margin: 0.625rem 0;
  padding: 0.625rem;
  background: #ffffff;
  border: 1px solid #d2d2d2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-size: 1rem;
`;
export const WriteBtnWrapper = styled.div`
  height: 45px;
  display: flex;
  justify-content: flex-end;
`;

export const WriteBtn = styled.button`
  width: auto;
  padding: 0.625rem 1rem;
  border: 2px solid #ffd24c;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #ffffff;
  :hover {
    cursor: pointer;
    background-color: #ffd24c;
    outline: none;
    transition: 0.5s ease;
  }
`;
