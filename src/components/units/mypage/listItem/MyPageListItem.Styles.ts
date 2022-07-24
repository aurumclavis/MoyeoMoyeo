import styled from "@emotion/styled";
import { People, Today } from "@mui/icons-material";
import { breakPoints } from "../../../../commons/styles/media";

// 마이페이지에 들어가는 리스트 컴포넌트 스타일
interface ItemIsFullProps {
  isFull: boolean;
}
interface MoreTextProps {
  type?: string;
}
export const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  overflow: auto;
  display: grid;
  padding: 0 1.5rem;
  // gap: 1.25rem;
  @media ${breakPoints.mobile} {
    padding: 0 1rem;
  }
`;
export const ItemWrapper = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 162px;
  display: flex;
  padding: 1.25rem 3%;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.25rem;
`;
export const ItemImageWrapper = styled.div`
  max-width: 7.5rem;
  max-height: 7.5rem;
  margin-right: 3%;
  @media ${breakPoints.mobile} {
    max-width: 6rem;
  }
`;
export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;
export const ItemContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ItemRowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0.313rem 0;
  @media ${breakPoints.mobile} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;
export const ItemTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const ItemIsFull = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${(props: ItemIsFullProps) => (props.isFull ? "#d2d2d2" : "#FFD24C")};
  margin: 0;
  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;
export const ItemText = styled.span`
  display: block;
  padding-right: 0.625rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: 1rem;
  @media ${breakPoints.mobile} {
    font-size: 0.75rem;
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 0.313rem;
`;
export const PeopleIcon = styled(People)`
  font-size: 1.5rem;
`;
export const CalendarIcon = styled(Today)`
  font-size: 1.5rem;
  margin-right: 0.313rem;
`;

export const MoreText = styled.span`
  color: ${(props: MoreTextProps) =>
    props.type === "staff" ? "#15133C" : "#ffd24c"};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  @media ${breakPoints.mobile} {
    font-size: 0.75rem;
  }
`;
export const RequestUserWrapper = styled.div`
  margin-top: 0.625rem;
`;
