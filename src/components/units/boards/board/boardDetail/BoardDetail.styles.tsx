import styled from "@emotion/styled";
import DateRangeIcon from "@mui/icons-material/DateRange";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FestivalIcon from "@mui/icons-material/Festival";
import MapIcon from "@mui/icons-material/Map";
import ListIcon from "@mui/icons-material/List";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding: 4rem 2rem;
`;
export const CoverImage = styled.img`
  width: calc(100% + 2rem * 2);
  height: 20.625rem;
  border-radius: 10px;
  object-fit: cover;
`;
export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  position: relative;
`;
export const Body = styled.div`
  width: 68%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
export const Title = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  ${(props) => props.isCompleted && "background-color: #ffe69a;"}
`;
export const CreatedAtAndViewWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 1rem;
  color: #d2d2d2;
`;
export const CreatedAt = styled.div``;
export const View = styled.div``;
export const Report = styled.div`
  text-decoration: underline;
  cursor: pointer;
`;
export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-left: 1%;
`;
export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  border: 1px solid #f1eee9;
  border-radius: 5px;
  gap: 1rem;
  font-size: 1.5rem;
`;
export const InfoUpper = styled.div`
  display: flex;
  gap: 8rem;
`;
export const ItemsText = styled.div`
  font-size: 1.5rem;
  color: #323232;
`;
export const TransportationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
export const TransPortImage = styled.img`
  width: 3rem;
  height: auto;
  cursor: pointer;
`;
export const HeadCountWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;
export const MaxHeadCount = styled.div`
  font-weight: 600;
`;
export const InfoUnder = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
export const MyCalendarIcon = styled(DateRangeIcon)`
  width: 1.5rem;
`;
export const AccompanyDate = styled.div`
  font-size: 1.5rem;
  letter-spacing: 0.05rem;
`;
export const Contents = styled.div`
  width: 100%;
  font-size: 1.3rem;
`;
export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const LocationExplainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
export const LocationExplain = styled.div`
  padding-left: 1%;
  font-size: 1.5rem;
`;
export const MapWrapper = styled.div`
  width: 100%;
  height: 24rem;
`;

export const AccompanyWrapper = styled.div`
  width: 30%;
  height: auto;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1.3rem;
  padding: 1.5rem;
  border: 1px solid #f1eee9;
  border-radius: 5px;
  position: sticky;
  top: 10rem;
  transition: 0.2s;
  :hover {
    box-shadow: 0px 2px 4px 2px #00000033;
    transform: translateY(-5px);
  }
`;
export const AccompanyUpperWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #f1eee9;
`;
export const WriterImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;
export const WriterInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WriterName = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
`;
export const WriterEtc = styled.div`
  font-size: 1rem;
  color: #d2d2d2;
`;
export const AccompanyRequestButton = styled.button`
  width: 90%;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  outline: none;
  ${(props: any) =>
    props.isSendRequestUser || props.isCompleted
      ? "background-color: #FFD24C; color: white;"
      : "background-color: #15133c; color: white;"}

  font-size: 1rem;
  cursor: pointer;
`;
export const AccompanyRequestIcon = styled.img`
  width: 20%;
`;
export const AccompanyRequestText = styled.div`
  letter-spacing: 1px;
`;
export const AccompanyCancelIcon = styled.img`
  width: 20%;
`;
export const AccompanyCancelText = styled.div`
  letter-spacing: 1px;
`;
export const AccompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding-top: 0.5rem;
  font-size: 0.8rem;
  color: #d2d2d2;
`;
export const AccompanyInfoIcon = styled(HelpOutlineIcon)`
  width: 1rem;
`;
export const AccompanyMyBoardWrapper = styled.div`
  display: flex;
  gap: 1.3rem;
`;
export const AccompanyUpperItemsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
export const AccompanyItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
`;
export const AccompanyAmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AccompanyAmountIcon = styled.img`
  width: 80%;
`;
export const AccompanyAmountText = styled.div`
  font-size: 1rem;
  letter-spacing: 1px;
`;
export const AccompanyChangeMaxIcon = styled.img`
  width: 80%;
`;
export const AccompanyChangeMaxText = styled.div`
  font-size: 1rem;
  letter-spacing: 1px;
`;
export const AccompanyCompleteIcon = styled.img`
  width: 20%;
`;
export const AccompanyCompleteText = styled.div`
  font-size: 1rem;
  letter-spacing: 1px;
`;
export const AccompanyCompleteCancelIcon = styled.img`
  width: 20%;
`;
export const AccompanyCompleteCancelText = styled.div`
  font-size: 1rem;
  letter-spacing: 1px;
`;
export const EventInfoWrapper = styled.div`
  width: 68%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
  padding: 1.5rem;
  border-radius: 5px;
  border: 1px solid #f1eee9;
  transition: 0.2s;
  :hover {
    box-shadow: 0px 2px 4px 2px #00000033;
    transform: translateY(-5px);
  }
`;
export const EventInfoText = styled.div`
  padding: 2px 5px;
  border-radius: 10px;
  font-size: 1.6rem;
  font-weight: 700;
`;
export const EventInfo = styled.div`
  display: flex;
  gap: 5%;
`;
export const EventImage = styled.img`
  width: 50%;
  height: auto;
  object-fit: fill;
  border-radius: 5px;
  cursor: pointer;
`;
export const EventInfoDetailWrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const EventInfoDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const EventFestivalIcon = styled(FestivalIcon)``;
export const EventMapIcon = styled(MapIcon)``;
export const EventDateRangeIcon = styled(DateRangeIcon)``;
export const EventListIcon = styled(ListIcon)``;

export const EventInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
`;
export const EventInfoContents = styled.div`
  padding-left: 1rem;
  color: #73777b;
`;

export const CommentWrapper = styled.div`
  width: 68%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
`;
export const CommentText = styled.span`
  padding: 2px 5px;
  border-radius: 10px;
  font-size: 1.6rem;
  font-weight: 700;
`;
