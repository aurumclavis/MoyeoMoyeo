import styled from "@emotion/styled";
import { People, Today } from "@mui/icons-material";
export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 1.5rem;
  display: grid;
  grid-gap: 1.25rem;
`;
export const ItemWrapper = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  padding: 1.25rem;
  background: #ffffff;
  border: 1px solid #d2d2d2;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;
export const ItemImageWrapper = styled.div`
  min-width: 6.25rem;
  max-width: 7.5rem;
  height: 120px;
`;
export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
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
  margin: 0;
`;
export const ItemText = styled.span`
  display: block;
  // margin: 0.313rem 0;
  padding-right: 0.625rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1rem;
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 0.625rem;
`;
export const PeopleIcon = styled(People)``;
export const CalendarIcon = styled(Today)``;
