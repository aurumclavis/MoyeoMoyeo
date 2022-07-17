import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import FestivalIcon from "@mui/icons-material/Festival";
import GroupsIcon from "@mui/icons-material/Groups";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ListIcon from "@mui/icons-material/List";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4rem;
  @media ${breakPoints.mobile} {
    gap: 1rem;
  }
`;

// 게시글viewType변경 탭이 있는 서브헤더
export const SubHeaderWrapper = styled.div`
  width: calc(100vw - (100vw * 1.01 / 100));
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 1;
  ${(props: any) =>
    props.isSubHeaderOnTop && "border-bottom: 1px solid #d2d2d2;"}
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const SubHeader = styled.div`
  width: 75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6rem;
  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 0 1rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;
export const ViewTypeWrapper = styled.div`
  display: flex;
  padding-top: 0.5rem;
  gap: 1.5rem;
`;
export const ViewTotal = styled.span`
  height: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid white;
  ${(props: any) =>
    props.selectAccompanyDate &&
    "font-weight : 700; border-bottom: 3px solid #ffd24c;"}
  cursor: pointer;
  @media ${breakPoints.mobile} {
    height: 2.7rem;
  }
`;
export const ViewLatest = styled.span`
  height: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid white;
  ${(props: any) =>
    props.selectLatest &&
    "font-weight : 700; border-bottom: 3px solid #ffd24c;"}
  cursor: pointer;
  @media ${breakPoints.mobile} {
    height: 2.7rem;
  }
`;
export const ViewAccompany = styled.span`
  height: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid white;
  ${(props: any) =>
    props.selectRequested &&
    "font-weight : 700; border-bottom: 3px solid #ffd24c;"}
  cursor: pointer;
  @media ${breakPoints.mobile} {
    height: 2.7rem;
  }
`;
export const SearchAndCreateWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  @media ${breakPoints.mobile} {
    width: 100%;
    justify-content: space-around;
    margin-bottom: 1rem;
  }
`;
export const ViewAsSearch = styled.div`
  width: 16rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  border: 1px solid #d2d2d2;
`;
export const EventSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;
export const MySearchIcon = styled(SearchIcon)`
  width: 2rem;
  color: #d2d2d2;
`;
export const EventSearchInput = styled.input`
  width: 100%;
  height: 2.188rem;
  border: none;
  outline: none;
  font-size: 1.1rem;
  color: #323232;
  ::placeholder {
    color: #d2d2d2;
    font-size: 1rem;
  }
`;
export const MySearchIconWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
`;
export const CreateBoard = styled.button`
  width: 4rem;
  height: 2.8rem;
  border-radius: 5px;
  background-color: #15133c;
  border: none;
  outline: none;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
`;

// 필터와 리스트 무한스크롤을 감싸는 wrap
export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 6rem 0rem 6rem;
  @media ${breakPoints.mobile} {
    padding: 0;
  }
`;

// 카테고리, 날짜선택, 모집여부 필터 wrap
export const DetailViewTypeWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2.5rem;
`;
export const EventAndDateTypeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  @media ${breakPoints.mobile} {
    padding: 0.5rem;
  }
`;
// 행사카테고리 type을 선택하는 캐러샐을 감싸는 wrap
export const EventTypeWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem 1rem 2rem;
  @media ${breakPoints.mobile} {
    flex-direction: column;
    padding: 0.5rem 2rem 0.5rem 1rem;
  }
`;
export const DetailViewTypeTitle = styled.div`
  width: 10%;
  font-weight: 600;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const CarouselWrapper = styled.div`
  width: 85%;
  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 0.8rem;
  }
`;
export const ArrowRightString = styled.div`
  z-index: 1;
`;
// 날짜선택 wrap
export const SeparateLine = styled.div`
  width: 93%;
  border-top: 1px solid #d2d2d2;
`;
export const DateWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
  @media ${breakPoints.mobile} {
    /* flex-direction: column; */
    flex-wrap: wrap;
    gap: 1rem;
    padding: 0.5rem 2rem 0.5rem 1rem;
  }
`;
export const DateChangerWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media ${breakPoints.mobile} {
    width: 70%;
    gap: 1rem;
  }
`;
export const ArrowButton = styled.button`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid #f1eee9;
  border-radius: 50%;
  transition: 0.2s;
  cursor: pointer;
  :active {
    background-color: #f1eee9;
  }
`;
export const ArrowLeft = styled.img``;
export const ArrowRight = styled.img`
  padding-left: 3px;
`;
export const DateView = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1.9rem;
  border-radius: 5px;
  border: 1px solid #f1eee9;
  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
    flex-direction: column;
    align-items: center;
    padding: 0.2rem;
  }
`;
export const DateStart = styled.div`
  letter-spacing: 0.06rem;
`;
export const DateEnd = styled.div`
  letter-spacing: 0.06rem;
`;
export const MonthlyViewButton = styled.button`
  width: 6.4rem;
  height: 3rem;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: #15133c;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 20%;
  }
`;
export const WeeklyViewButton = styled.button`
  width: 6.4rem;
  height: 3rem;
  border: none;
  outline: none;
  border-radius: 5px;
  border: 1px solid #d2d2d2;
  background-color: #f1eee9;
  color: #323232;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 23%;
  }
`;
// 모집중 보기 토글버튼
export const RecruitmentViewTypeButton = styled.button`
  width: 17%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  margin-right: 1.5rem;
  border: 2px solid gray;
  border-radius: 15px;
  font-weight: 600;
  transition: 0.5s;
  ${(props: any) =>
    props.selectViewRecruit
      ? "color:white;background-color:#ffd24c; border-color:#FFE69A;"
      : "color:black;background-color:white;border-color:#d2d2d2;"}
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 90%;
  }
`;

// 리스트 무한스크롤 wrap
export const ListWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
  cursor: pointer;
`;
export const Item = styled.div`
  width: 100%;
  height: 9rem;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  background-color: white;
  transition: 0.2s;
  box-shadow: 0px 2px 4px 0px #00000033;
  :hover {
    box-shadow: 0px 2px 4px 2px #00000033;
    transform: translateY(-5px);
  }
  @media ${breakPoints.mobile} {
    height: auto;
    flex-direction: column;
    align-items: center;
  }
`;
export const ItemLeft = styled.div`
  width: 90%;
  display: flex;
  gap: 1rem;
  padding: 10px;
  @media ${breakPoints.mobile} {
    width: 100%;
    flex-direction: column;
  }
`;
export const EventImage = styled.img`
  width: 14%;
  border-radius: 5px;
  object-fit: cover;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 15rem;
  }
`;
export const ItemMain = styled.div`
  width: 86%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.7rem;
  @media ${breakPoints.mobile} {
    width: 100%;
    gap: 1.5rem;
  }
`;
export const Header = styled.div`
  display: flex;
  gap: 0.5rem;
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;
export const Recruitment = styled.div`
  ${(props: any) => (props.recruited ? "color : #FFD24C;" : "color : #00AD07;")}
`;
export const Title = styled.div`
  width: 80%;
  font-size: 1rem;
  font-weight: 500;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const Remark = styled.div`
  padding-left: 0.5rem;
  font-size: 0.9rem;
  @media ${breakPoints.mobile} {
    margin-bottom: 1rem;
  }
`;
export const Footer = styled.div`
  display: flex;
  gap: 1.1rem;
  font-size: 0.8rem;
  color: #d2d2d2;
  line-height: 25px;
  @media ${breakPoints.mobile} {
    flex-wrap: wrap;
    gap: 0 1.5rem;
  }
`;
export const Event = styled.div`
  display: flex;
  align-items: flex-end;
`;
export const EventIcon = styled(FestivalIcon)`
  width: 1rem;
  margin-right: 5px;
`;
export const Category = styled.div`
  display: flex;
  align-items: flex-end;
`;
export const CategoryIcon = styled(ListIcon)`
  width: 1rem;
  margin-right: 5px;
`;
export const MaxHeadCount = styled.div`
  display: flex;
  align-items: flex-end;
`;
export const MaxHeadCountIcon = styled(GroupsIcon)`
  width: 1rem;
  margin-right: 5px;
`;
export const AccompanyDate = styled.div`
  display: flex;
  align-items: flex-end;
`;
export const CalendarIcon = styled(DateRangeIcon)`
  width: 1rem;
  margin-right: 5px;
`;
export const ItemRight = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  :hover img {
    transform: scale(1.1, 1.1);
  }
  ${(props: any) =>
    props.requested && "background-color: #FFD24C; color: white;"}
  @media ${breakPoints.mobile} {
    padding: 1rem;
    width: 100%;
    flex-direction: row;
    border-top-right-radius: 0;
    border-bottom-left-radius: 5px;
  }
`;
export const PaperPlaneImage = styled.img`
  width: 60%;
  transition: 0.2s;
  @media ${breakPoints.mobile} {
    width: 3rem;
    height: auto;
  }
`;
export const ItemRightText = styled.div`
  letter-spacing: 0.3px;
  font-size: 1rem;
  color: #323232;
`;
