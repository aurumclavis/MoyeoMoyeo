import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import FestivalIcon from "@mui/icons-material/Festival";
import GroupsIcon from "@mui/icons-material/Groups";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ListIcon from "@mui/icons-material/List";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 4rem;
`;
export const SubHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6rem;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 1;
  ${(props: any) =>
    props.isSubHeaderOnTop && "border-bottom: 1px solid #d2d2d2;"}
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
    props.selectTotal && "font-weight : 700; border-bottom: 3px solid #ffd24c;"}
  cursor: pointer;
`;
export const ViewRecruitment = styled.span`
  height: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid white;
  ${(props: any) =>
    props.selectRecruit &&
    "font-weight : 700; border-bottom: 3px solid #ffd24c;"}
  cursor: pointer;
`;
export const ViewAccompany = styled.span`
  height: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid white;
  ${(props: any) =>
    props.selectAccompany &&
    "font-weight : 700; border-bottom: 3px solid #ffd24c;"}
  cursor: pointer;
`;
export const SearchAndCreateWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
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
export const EventTypeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 6rem;
`;
export const CarouselWrapper = styled.div`
  width: 80%;
`;
export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;
export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;
export const DateChangerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
export const ArrowButton = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f1eee9;
  border-radius: 50%;
  cursor: pointer;
`;
export const ArrowLeft = styled.img``;
export const ArrowRight = styled.img`
  padding-left: 3px;
`;
export const DateView = styled.div`
  width: 23.125rem;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1.9rem;
  border-radius: 5px;
  border: 1px solid #f1eee9;
  background-color: white;
`;
export const DateStart = styled.div`
  letter-spacing: 0.06rem;
`;
export const DateEnd = styled.div`
  letter-spacing: 0.06rem;
`;
export const WeeklyViewButton = styled.button`
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
`;
export const MonthlyViewButton = styled.button`
  width: 6.4rem;
  height: 3rem;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: #73777b;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
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
export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
`;
export const Item = styled.div`
  width: 70%;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  transition: 0.2s;
  box-shadow: 0px 2px 4px 0px #00000033;
  :hover {
    box-shadow: 0px 2px 4px 2px #00000033;
    transform: translateY(-5px);
  }
`;
export const ItemLeft = styled.div`
  width: 90%;
  display: flex;
  gap: 0.7rem;
  padding: 10px;
`;
export const EventImage = styled.img`
  width: 5.938rem;
  border-radius: 5px;
  object-fit: cover;
`;
export const ItemMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.7rem;
`;
export const Header = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const Recruitment = styled.div`
  ${(props: any) => (props.recruited ? "color : #FFD24C;" : "color : #00AD07;")}
`;
export const Title = styled.div`
  width: 80%;
  font-size: 1rem;
  font-weight: 500;
`;
export const Remark = styled.div`
  font-size: 0.9rem;
`;
export const Footer = styled.div`
  display: flex;
  gap: 1.1rem;
  font-size: 0.8rem;
  color: #d2d2d2;
  line-height: 25px;
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
  align-items: center;
  justify-content: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  ${(props: any) => props.requested && "background-color: #FFD24C"}
`;
export const PaperPlaneImage = styled.img`
  width: 60%;
`;
