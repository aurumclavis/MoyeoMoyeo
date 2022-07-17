import styled from "@emotion/styled";
import { breakPoints } from "../../../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`;
export const CommentInput = styled.textarea`
  width: 100%;
  height: 7rem;
  padding: 0.5rem;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  outline: none;
  font-size: 1.1rem;
`;
export const SubmitButton = styled.button`
  height: 2.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: #ffd24c;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    font-size: 0.5rem;
  }
`;
