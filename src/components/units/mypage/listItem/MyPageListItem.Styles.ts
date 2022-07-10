import styled from "@emotion/styled";
import { People, PropaneSharp, Today } from "@mui/icons-material";

// 마이페이지에 들어가는 리스트 컴포넌트 스타일
interface ItemFinishedProps {
  isFinished: boolean;
}
interface MoreTextProps {
  type?: string;
}
export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  padding: 0 1.5rem;
  grid-gap: 1.25rem;
`;
export const ItemWrapper = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  padding: 1.25rem;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;
export const ItemImageWrapper = styled.div`
  min-width: 7.5rem;
  max-width: 7.5rem;
  height: 7.5rem;
`;
export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;
export const ItemContentsWrapper = styled.div`
  padding-left: 1.25rem;
`;
export const ItemRowWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.313rem 0;
`;
export const ItemTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
`;

export const ItemFinished = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${(props: ItemFinishedProps) =>
    props.isFinished ? "#d2d2d2" : "#FFD24C"};
  margin: 0;
`;
export const ItemText = styled.span`
  display: block;
  // margin: 0.313rem 0;
  padding-right: 0.625rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: 1rem;
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 0.625rem;
`;
export const PeopleIcon = styled(People)``;
export const CalendarIcon = styled(Today)`
  margin-right: 0.313rem;
`;

export const MoreText = styled.span`
  color: ${(props: MoreTextProps) =>
    props.type === "staff" ? "#15133C" : "#ffd24c"};
  font-size: 1rem;
  font-weight: bold;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
