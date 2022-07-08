import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import FestivalIcon from "@mui/icons-material/Festival";
import GroupsIcon from "@mui/icons-material/Groups";
import DateRangeIcon from "@mui/icons-material/DateRange";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 4rem 0;
`;
export const EventTypeWrapper = styled.div`
  width: 100%;
  margin-left: 20rem;
`;
export const CarouselWrapper = styled.div`
  width: 60%;
`;
export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 4.4rem;
  margin-left: 8rem;
`;
export const ViewTypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
export const ViewTotal = styled.div`
  width: 7.688rem;
  height: 4.188rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #d2d2d2;
  ${(props: any) => props.selectTotal && "background-color: #f1eee9;"}
  cursor: pointer;
`;
export const ViewRecruitment = styled.div`
  width: 7.688rem;
  height: 4.188rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #d2d2d2;
  ${(props: any) => props.selectRecruit && "background-color: #f1eee9;"}
  cursor: pointer;
`;
export const ViewAccompany = styled.div`
  width: 7.688rem;
  height: 4.188rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #d2d2d2;
  ${(props: any) => props.selectAccompany && "background-color: #f1eee9;"}
  cursor: pointer;
`;
export const ViewBySearch = styled.div`
  width: 7.688rem;
  height: 4.188rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
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
    font-size: 1.1rem;
  }
`;
export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;
export const DateWrapper = styled.div`
  width: 100%;
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
  width: 2.438rem;
  height: 2.438rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d2d2d2;
  border-radius: 50%;
  cursor: pointer;
`;
export const ArrowLeft = styled.img``;
export const ArrowRight = styled.img``;
export const DateView = styled.div`
  width: 23.125rem;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1.9rem;
  background-color: #d2d2d2;
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

// 모바일일 때 이 부분 display:none -> flex 활용
export const ViewTypeMobileWrapper = styled.div`
  display: none;
  gap: 2.5rem;
`;
export const ViewTypeMobile = styled.div`
  display: flex;
  gap: 1rem;
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
  gap: 1rem;
`;
export const ItemWrapper = styled.div`
  width: 44rem;
  height: 5.938rem;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px #00000033;
`;
export const Item = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const EventImage = styled.img`
  width: 5.938rem;
  height: 5.938rem;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  object-fit: fill;
`;
export const ItemMain = styled.div`
  display: flex;
  flex-direction: column;
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
  font-size: 1rem;
  font-weight: 500;
`;
export const Remark = styled.div`
  font-size: 0.9rem;
`;
export const Footer = styled.div`
  display: flex;
  gap: 1.5rem;
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
export const SendAccompany = styled.div`
  width: 4.625rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  ${(props: any) => props.accompanied && "background-color: #FFD24C"}
`;
export const PaperPlaneImage = styled.img`
  width: 60%;
`;
export const CreateBoardButton = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #ffd24c;
  color: black;
  box-shadow: 0px 4px 10px 0px #00000033;
  font-size: 30px;
  text-align: center;
  line-height: 55px;
  position: fixed;
  bottom: 50px;
  left: 150px;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    font-size: 40px;
    background-color: gray;
    color: white;
  }
`;
