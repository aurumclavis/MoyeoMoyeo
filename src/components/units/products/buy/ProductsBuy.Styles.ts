import styled from "@emotion/styled";
import { Clear } from "@mui/icons-material";
export const Wrapper = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;
  position: absolute;
  left: 30%;
  top: 6.25rem;

  border: 1px solid #cccccc;
  border-radius: 20px;
  background-color: #ffffff;
`;
export const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;
export const CancelIcon = styled(Clear)`
  font-size: 1.5rem;
  :hover {
    cursor: pointer;
  }
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  text-align: center;
`;
export const SubmitButton = styled.button`
  background: #42c2ff;
  border-radius: 1.875rem;
  color: #ffffff;
  width: 80%;
  height: 40px;
  text-align: center;
  padding: 0.625rem;
  border: none;
  margin: 1.875rem 0;
  :hover {
    cursor: pointer;
  }
`;
