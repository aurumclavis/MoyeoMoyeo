import { CloseOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
  width: 100%;
  height: 8.75rem;
  display: flex;
  padding: 0.625rem;
  border-bottom: 1px solid #d2d2d2;
`;
export const ContentsWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
`;
export const Status = styled.span`
  margin: 0;
  font-weight: bold;
  font-size: 1.125rem;
`;
export const WriterWrapper = styled.div`
  display: flex;
  margin: 0.313rem 0;
`;
export const Text = styled.span`
  font-size: 1rem;
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
export const DeleteIcon = styled(CloseOutlined)`
  font-size: 1.5rem;
  padding-left: 0.313rem;
`;
