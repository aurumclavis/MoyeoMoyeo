import { Clear, Reply, SubdirectoryArrowRight } from "@mui/icons-material";
import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
  width: 100%;
  height: 10.5rem;
  display: flex;
  padding: 1.25rem;
  background-color: #f4f4f4;
  border-bottom: 1px solid #d2d2d2;
`;
export const SubDirectoryWrapper = styled.div`
  width: 5%;
  display: flex;
  justify-content: center;
  margin: 5px 0;
  font-size: 1.5rem;
`;
export const SubDirectoryIcon = styled(SubdirectoryArrowRight)``;
export const ContentsWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const WriterWrapper = styled.div`
  display: flex;
  margin: 0.313rem 0;
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
  overflow: scroll;
`;
export const IconWrapper = styled.div`
  width: 5%;
  height: auto;
  display: flex;
  justify-content: flex-end;
`;
export const DeleteIcon = styled(Clear)`
  font-size: 1.5rem;
  :hover {
    cursor: pointer;
  }
`;
export const ReplyIcon = styled(Reply)`
  font-size: 1.5rem;
  :hover {
    cursor: pointer;
  }
`;
