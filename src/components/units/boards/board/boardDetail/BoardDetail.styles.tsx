import styled from "@emotion/styled";
import DateRangeIcon from "@mui/icons-material/DateRange";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FestivalIcon from "@mui/icons-material/Festival";
import MapIcon from "@mui/icons-material/Map";
import ListIcon from "@mui/icons-material/List";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding: 4rem 2rem;
  @media ${breakPoints.mobile} {
    padding: 0 0 2rem 0;
    margin-bottom: 8rem;
    gap: 2rem;
  }
`;

// 스크롤 내리면 나타나는 서브헤더(네비)
interface INavItemProps {
  isActive: boolean;
}
export const NavWrapper = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: -71px;
  left: 0;
  z-index: 3;
  background-color: #ffffff;
  border-bottom: 1px solid #d9d9d9;
  transition: top 0.5s;
  @media ${breakPoints.mobile} {
    margin-top: 3.3em;
  }
`;
export const NavItemWrapper = styled.div`
  width: 75rem;
  display: flex;
  background-color: #ffffff;
`;
export const NavItem = styled.div`
  padding: 0.625rem;
  transition: 0.2s;
  color: ${(props: INavItemProps) => (props.isActive ? "#000000" : "#d2d2d2")};
  font-weight: ${(props: INavItemProps) =>
    props.isActive ? "bold" : "normal"};
  border-bottom: ${(props) => (props.isActive ? "4px solid #FFD24C" : "none")};
  font-size: 1rem;
  :hover {
    cursor: pointer;
  }
`;

// 최상단 커버이미지
export const CoverImage = styled.img`
  width: calc(100% + 2rem * 2);
  height: 20.625rem;
  border-radius: 10px;
  object-fit: cover;
  @media ${breakPoints.mobile} {
    width: calc(100vw - (100vw * 1.01 / 100));
    height: 15rem;
    border-radius: 0;
  }
`;

// 좌측 바디와 우측 프로필날개를 감싸는 wrap
export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  position: relative;
  @media ${breakPoints.mobile} {
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 0 1rem 0 1rem;
    gap: 2rem;
  }
`;

// 좌측 바디
export const Body = styled.div`
  width: 68%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media ${breakPoints.mobile} {
    width: 100%;
    gap: 2rem;
    order: 0;
  }
`;
export const Title = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  ${(props: any) => props.isCompleted && "background-color: #ffe69a;"}
  @media ${breakPoints.mobile} {
    font-size: 1.5rem;
  }
`;
export const CreatedAtAndViewCountWrapper = styled.div`
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

// 제목 아래 본문
export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-left: 1%;
  @media ${breakPoints.mobile} {
    gap: 2rem;
    padding: 0;
  }
`;

// 인포박스
export const InfoWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  border: 1px solid #f1eee9;
  border-radius: 5px;
  gap: 1rem;
  font-size: 1.5rem;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const InfoUpper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ItemsText = styled.div`
  font-size: 1.5rem;
  color: #323232;
  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;
export const TransportationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
export const TransPortImage = styled.img`
  width: 2.5rem;
  height: auto;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 2rem;
  }
`;
export const HeadCountWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;
export const MaxHeadCount = styled.div`
  font-weight: 600;
  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  letter-spacing: 0.05rem;
  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

// 게시글 본문 내용
export const Contents = styled.div`
  width: 100%;
  font-size: 1.3rem;
`;

// 지도wrap
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
  font-size: 1.3rem;
`;
// 카카오맵 감싸는 wrap
export const MapWrapper = styled.div`
  width: 100%;
  height: 24rem;
  position: relative;
`;
export const RoadViewButton = styled.button`
  border: 2px solid #73777b;
  border-radius: 5px;
  background-color: #f1eee9;
  position: absolute;
  padding: 5px;
  top: 1rem;
  left: 1rem;
  color: #323232;
  font-weight: 700;
  z-index: 2;
  cursor: pointer;
`;

// 바디 우측 프로필 날개 wrap
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
  @media ${breakPoints.mobile} {
    width: 100%;
    position: static;
    order: 2;
    padding: 1rem;
    :hover {
      box-shadow: none;
      transform: none;
    }
  }
`;
// 우측 날개 상단
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
  transition: 0.2s;
  cursor: pointer;
  :hover {
    transform: scale(1.3, 1.3);
  }
`;
export const AccompanyChangeMaxText = styled.div`
  font-size: 1rem;
  letter-spacing: 1px;
`;
// 날개 하단 wrap
export const AccompanyUnderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 2rem;
  @media ${breakPoints.mobile} {
    gap: 4rem;
  }
`;
// 동행자리스트
export const AccompanyUserListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
export const AccompanyUser = styled.div`
  width: 20%;
  font-size: 1.2rem;
  font-weight: 600;
`;
// 모집완료/완료취소버튼
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
  @media ${breakPoints.mobile} {
    width: 20rem;
  }
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

// 바디 하단 이벤트정보 wrap
export const EventInfoWrapper = styled.div`
  width: 68%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1rem;
  padding: 1.5rem;
  border-radius: 5px;
  border: 1px solid #f1eee9;
  transition: 0.2s;
  :hover {
    box-shadow: 0px 2px 4px 2px #00000033;
    transform: translateY(-5px);
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    gap: 1rem;
    padding: 1rem;
    order: 1;
  }
`;
export const EventInfoText = styled.div`
  padding: 2px 5px;
  border-radius: 10px;
  font-size: 1.6rem;
  font-weight: 700;
  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;
export const EventInfo = styled.div`
  display: flex;
  gap: 5%;
  @media ${breakPoints.mobile} {
    flex-direction: column;
    gap: 2rem;
  }
`;
export const EventImage = styled.img`
  width: 50%;
  height: auto;
  object-fit: fill;
  border-radius: 5px;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const EventInfoDetailWrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media ${breakPoints.mobile} {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem 10%;
  }
`;
export const EventInfoDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media ${breakPoints.mobile} {
    width: 45%;
    order: 1;
  }
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

// 댓글 wrap
export const CommentWrapper = styled.div`
  width: 68%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 5rem;
  @media ${breakPoints.mobile} {
    width: 100%;
    order: 3;
  }
`;
export const CommentText = styled.span`
  padding: 0 5px;
  border-radius: 10px;
  font-size: 1.6rem;
  font-weight: 700;
`;
