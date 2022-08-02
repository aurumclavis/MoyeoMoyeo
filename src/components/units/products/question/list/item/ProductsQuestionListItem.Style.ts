import styled from "@emotion/styled";
import { Clear, Reply } from "@mui/icons-material";

export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 1.25rem;
  border-bottom: 1px solid #d2d2d2;
`;
export const ContentsWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
`;
export const IconWrapper = styled.div`
  height: auto;
  display: flex;
  justify-content: flex-end;
`;

export const Text = styled.span`
  font-size: 1rem;
  padding-right: 0.625rem;
`;
export const Date = styled.span`
  padding-right: 0.625rem;
  color: #73777b;
  font-size: 0.875rem;
`;
export const Contents = styled.p`
  flex-grow: 1;
  margin: 0.313rem 0;
  overflow: auto;
`;

// 답글, 삭제 아이콘
export const DeleteIcon = styled(Clear)`
  font-size: 1.5rem;
  cursor: pointer;
`;
export const ReplyIcon = styled(Reply)`
  font-size: 1.5rem;
  cursor: pointer;
`;
