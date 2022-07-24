import styled from "@emotion/styled";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import Reply from "@mui/icons-material/Reply";
import { breakPoints } from "../../../../../../commons/styles/media";
import { ICommentsWrapperProps } from "../Comment.types";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.2rem;
`;
export const CommentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
  border-top: 1px solid #f1eee9;
  border-bottom: 1px solid #f1eee9;
  ${(props: ICommentsWrapperProps) => props.isChild && "width : 93%;"}
`;
export const UpperWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const UpperLeft = styled.div`
  display: flex;
  align-items: flex-end;
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
export const MyReply = styled(Reply)`
  width: 2rem;
  cursor: pointer;
`;
export const UnderWrapper = styled.div`
  margin-left: 1.2rem;
  padding-bottom: 1rem;
`;
export const Contents = styled.div``;

export const EditWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`;
export const CommentInput = styled.textarea`
  width: 100%;
  height: 7rem;
  padding: 0.8rem;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  outline: none;
  font-size: 1rem;
  ::placeholder {
    color: #d2d2d2;
  }
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
