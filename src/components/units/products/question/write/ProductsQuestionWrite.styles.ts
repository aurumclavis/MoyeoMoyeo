import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const FormWrapper = styled.form`
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
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: flex-end;
`;
export const SubmitWrapper = styled.div`
  width: 10%;
  height: 100%;

  @media ${breakPoints.mobile} {
    width: 20%;
  }
`;
