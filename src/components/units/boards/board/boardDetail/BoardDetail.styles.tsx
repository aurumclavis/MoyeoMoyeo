import styled from "@emotion/styled";
import DateRangeIcon from "@mui/icons-material/DateRange";

export const Layout = styled.div`
  width: 100vw;
`;
export const LayoutBody = styled.div`
  width: 1200px;
  margin: auto;
  border: 1px solid gray;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding: 4rem 2rem;
`;
export const ImageWrapper = styled.div`
  width: calc(100% + 2rem * 2);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.7rem;
`;
export const EventImage = styled.img`
  width: 100%;
  height: 20.625rem;
  object-fit: cover;
`;
export const EventDate = styled.div`
  padding: 5px;
  background-color: #ffe69a;
  font-size: 0.813rem;
`;
// 반응형일 때 플렉스 컬럼으로 하면 됩니다.
export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
`;
// 반응형일 때 width 100%하면 됩니다.
export const Body = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;
export const Title = styled.div`
  font-size: 1.875rem;
  font-weight: 700;
  ${(props) => props.isCompleted && "background-color: #ffe69a;"}
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 1.5rem;
`;
export const InfoWrapper = styled.div`
  width: 29rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;
export const InfoUpper = styled.div`
  display: flex;
  gap: 9.5rem;
`;
export const WriterWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;
export const ItemsText = styled.div`
  font-size: 1.5rem;
  color: #323232;
`;
export const Writer = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;
export const HeadCountWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;
export const MaxHeadCount = styled.div`
  font-size: 1.5rem;
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
  letter-spacing: 0.1rem;
`;
export const Contents = styled.div`
  font-size: 1.3rem;
`;
export const TransportAndLocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;
export const TransportationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
export const TransPortImage = styled.img`
  width: 3.813rem;
  height: auto;
`;
export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;
export const LocationExplainWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;
export const LocationExplain = styled.div`
  font-size: 1.5rem;
`;
export const MapWrapper = styled.div`
  width: 100%;
  height: 24rem;
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
// 반응형일 때 width 100%, justify-content:center 하면 됩니다.
export const AccompanyWrapper = styled.div`
  width: 30%;
  display: flex;
  gap: 1.3rem;
  padding: 2rem;
  justify-content: flex-end;
`;
export const AccompanyMyBoardWrapper = styled.div`
  display: flex;
  gap: 1.3rem;
`;
export const AccompanyItemsWrapper = styled.div`
  width: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  ${(props: any) => props.isMyBoard && "gap:1rem;"}
  cursor: pointer;
`;
export const AccompanyRequestIcon = styled.img`
  width: 4.813rem;
`;
export const AccompanyRequestText = styled.div`
  font-size: 1.5rem;
  letter-spacing: 1px;
`;
export const AccompanyCancelIcon = styled.img`
  width: 6rem;
`;
export const AccompanyCancelText = styled.div`
  font-size: 1.5rem;
  letter-spacing: 1px;
`;
export const AccompanyAmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AccompanyAmountIcon = styled.img`
  width: 4.813rem;
`;
export const AccompanyAmount = styled.div`
  font-size: 1.5rem;
  letter-spacing: 1px;
`;
export const AccompanyAmountText = styled.div`
  font-size: 1.5rem;
  letter-spacing: 1px;
`;
export const AccompanyChangeMaxIcon = styled.img`
  width: 4.813rem;
`;
export const AccompanyChangeMaxText = styled.div`
  width: 6rem;

  font-size: 1.5rem;
  letter-spacing: 1px;
`;
export const AccompanyCompleteIcon = styled.img`
  width: 4.813rem;
`;
export const AccompanyCompleteText = styled.div`
  width: 6rem;
  font-size: 1.5rem;
  letter-spacing: 1px;
`;
export const AccompanyCompleteCancelIcon = styled.img`
  width: 4.813rem;
`;
export const AccompanyCompleteCancelText = styled.div`
  width: 6rem;
  font-size: 1.5rem;
  letter-spacing: 1px;
`;
export const CommentWrapper = styled.div`
  width: 100%;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
`;
export const CommentText = styled.div`
  width: 8rem;
  padding: 2px 5px;
  border-radius: 10px;
  background-color: #ffe69a;
  font-size: 1.6rem;
  font-weight: 700;
`;
