import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
`;
export const CommentInput = styled.textarea`
  width: 100%;
  height: 6rem;
  padding: 0.5rem;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  outline: none;
  font-size: 1.1rem;
`;
export const SubmitButton = styled.button`
  width: 4.4rem;
  height: 2.5rem;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: #ffd24c;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
`;
