import styled from "@emotion/styled";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
export const CommentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
  border-top: 1px solid #f1eee9;
  border-bottom: 1px solid #f1eee9;
`;
export const UpperWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const UpperLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const CommentsWriter = styled.div`
  font-weight: 600;
`;
export const CreatedAt = styled.div`
  font-size: 0.7rem;
  color: #d2d2d2;
`;
export const UpperRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const MyEditIcon = styled(EditIcon)`
  width: 2rem;
  cursor: pointer;
`;
export const MyDeleteIcon = styled(CloseIcon)`
  width: 2rem;
  cursor: pointer;
`;
export const UnderWrapper = styled.div`
  margin-left: 1.2rem;
`;
export const Contents = styled.div``;
