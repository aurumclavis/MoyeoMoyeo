import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";
import GroupsIcon from "@mui/icons-material/Groups";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ListIcon from "@mui/icons-material/List";

import FestivalIcon from "@mui/icons-material/Festival";
export const OutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${breakPoints.mobile} {
    margin: 2rem 0rem 2rem 0rem;
    padding: 0 1.125rem;
  }
`;
export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const TitleIcon = styled.img`
  width: 20px;
  height: 16px;
  margin-right: 5px;
  @media ${breakPoints.mobile} {
    width: 1.5rem; //24
    height: 1.25rem; //20
  }
`;
export const Title = styled.h1`
  margin: 0;
  @media ${breakPoints.mobile} {
    font-size: 1.6rem;
  }
`;
export const TitleRightWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
export const MoreBox = styled.div`
  width: 55px;
  display: flex;
  justify-content: center;
`;
export const More = styled.span`
  width: auto;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    color: #42c2ff;
  }
`;
export const ArrowIcon = styled.img`
  width: 10px;
  height: 11px;
  margin-top: 5px;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;
export const BoardsImage = styled.img`
  width: 60%;
  height: 100%;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const CarouselWrapper = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const MySlider = styled(Slider)`
  width: 100%;
  display: flex;
  margin-top: 40px;
  @media ${breakPoints.mobile} {
    width: 100%;
    margin-top: 0px;
  }
  overflow-x: hidden;
  overflow-y: hidden;
`;
export const BoardList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 15px 0px;
  transition: 0.2s;
  padding: 10px;
  border: 1px solid #00000033;
  box-shadow: 0px 3px 1px 0px #00000033;
  :hover {
    box-shadow: 0px 5px 1px 0px #ffd24c;
    transform: translateY(-5px);
    cursor: pointer;
  }
`;
export const BoardTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
export const BoardCategory = styled.div`
  text-align: center;
  color: green;
  margin-right: 10px;
`;
export const BoardTitle = styled.div`
  text-align: center;
`;
export const BoardContents = styled.div`
  width: 100%;
  height: 70px;
  text-align: left;
  font-size: 0.825rem;
`;
export const BoardInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
export const BoardEvents = styled.div`
  text-align: center;
  font-size: 0.825rem;
  margin-right: 10px;
`;
export const EventIcon = styled(FestivalIcon)`
  width: 1rem;
  margin-right: 5px;
`;
export const MaxHeadCountIcon = styled(GroupsIcon)`
  width: 1rem;
  margin-right: 5px;
`;
export const BoardPeople = styled.div`
  text-align: center;
  font-size: 0.825rem;
  margin-right: 10px;
`;
export const BoardDate = styled.div`
  text-align: center;
  font-size: 0.825rem;
  margin-right: 10px;
`;
export const CalendarIcon = styled(DateRangeIcon)`
  width: 1rem;
  margin-right: 5px;
`;
export const Icon = styled.img`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
`;

export const CategoryIcon = styled(ListIcon)`
  width: 1rem;
  margin-right: 5px;
`;
