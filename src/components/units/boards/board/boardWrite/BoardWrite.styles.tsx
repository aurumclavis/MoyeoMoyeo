import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import DateRangeIcon from "@mui/icons-material/DateRange";
import FestivalIcon from "@mui/icons-material/Festival";
import MapIcon from "@mui/icons-material/Map";
import ListIcon from "@mui/icons-material/List";
import SearchIcon from "@mui/icons-material/Search";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
  padding: 4rem 2rem;
`;

// 최상단 커버이미지 wrap
export const CoverImageWrapper = styled.div`
  width: calc(100% + 2rem * 2);
  height: 20.625rem;
  position: relative;
`;
export const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// 이벤트정보와 제목-내용을 감싸는 상단 wrap
// 반응형일 때 flex-direction : column
export const UpperWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 2rem;
  gap: 5%;
`;

// 이벤트정보 wrap
export const EventWrapper = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const EventInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  transition: 0.2s;
  :hover {
    box-shadow: 0px 2px 4px 2px #00000033;
    transform: translateY(-5px);
  }
`;
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;
export const MyImageUpload = styled.div`
  padding: 2px 5px;
  background-color: #d9d9d9;
  font-size: 0.813rem;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
`;
export const EventImage = styled.img`
  width: 100%;
  height: auto;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  object-fit: cover;
`;
export const EventInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid #f1eee9;
  border-top: none;
`;
export const EventInfoDetail = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
export const EventFestivalIcon = styled(FestivalIcon)`
  width: 10%;
`;
export const EventMapIcon = styled(MapIcon)`
  width: 10%;
`;
export const EventDateRangeIcon = styled(DateRangeIcon)`
  width: 10%;
`;
export const EventListIcon = styled(ListIcon)`
  width: 10%;
`;
export const EventInfoItem = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  font-weight: 500;
`;
export const EventInfoContents = styled.div`
  width: 60%;
  padding-left: 1rem;
  color: #73777b;
`;
// 이벤트 검색바
export const EventSearchWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1px;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #d2d2d2;
`;
export const MySearchIcon = styled(SearchIcon)`
  width: 2rem;
  border-right: 1px solid #d2d2d2;
  color: #d2d2d2;
`;
export const EventSearchInput = styled.input`
  width: 100%;
  height: 2.188rem;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 1rem;
  color: #323232;
  ::placeholder {
    color: #d2d2d2;
    font-size: 1rem;
  }
`;

// 우측 제목-내용쓰기 wrap
export const MainWrapper = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 2.87rem;
`;
export const ItemsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const ItemText = styled.div`
  font-size: 1.25rem;
`;
export const TitleInput = styled.input`
  width: 100%;
  height: 2.5rem;
  margin-left: 0.5rem;
  padding: 10px;
  border: none;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  outline: none;
  font-size: 1rem;
  color: #323232;
  ::placeholder {
    color: #d2d2d2;
    font-size: 1rem;
  }
`;
export const DateAndMaxHeadCountWrapper = styled.div`
  width: 100%;
  display: flex;
`;
export const DateWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-items: flex-end;
  gap: 1rem;
`;
export const AccompanyDateInputWrapper = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 0.5rem;
  padding-top: 10px;
`;
export const MyHelpOutlineIcon = styled(HelpOutlineIcon)`
  width: 1.2rem;
  color: #d2d2d2;
  cursor: pointer;
`;
export const MaxHeadCountWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;
`;
export const MaxHeadCount = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  padding-top: 0.7rem;
  margin-left: 0.5rem;
`;
export const CountPlus = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2.5px;
  border: 1px solid #d2d2d2;
  border-radius: 50%;
  color: #73777b;
  cursor: pointer;
  transition: 0.2s;
  :active {
    background-color: #ffe69a;
  }
`;
export const CountMinus = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2.5px;
  border: 1px solid #d2d2d2;
  border-radius: 50%;
  color: #73777b;
  cursor: pointer;
  transition: 0.2s;
  :active {
    background-color: #ffe69a;
  }
`;
export const MaxHeadCountInput = styled.input`
  width: 2rem;
  height: 1.5rem;
  border: none;
  border-bottom: 1px solid #d2d2d2;
  outline: none;
  color: #323232;
  font-size: 1rem;
  text-align: center;
  ::placeholder {
    color: #d2d2d2;
    font-size: 1rem;
    text-align: center;
  }
`;
export const MyDateRangeIcon = styled(DateRangeIcon)``;
export const MyReactQuill = styled(ReactQuill)`
  height: 25rem;
  margin-left: 0.5rem;
  margin-bottom: 2.2rem;
`;

// 하단 게시글요약/행사위치정보 wrap
export const UnderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.87rem;
`;
export const RemarkInput = styled.input`
  width: 100%;
  height: 2.5rem;
  margin-left: 0.5rem;
  padding: 10px;
  border: none;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  outline: none;
  font-size: 1rem;
  color: #323232;
  ::placeholder {
    color: #d2d2d2;
    font-size: 1rem;
  }
`;
export const EventLocationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const MapWrapper = styled.div`
  width: 100%;
  height: 24.188rem;
  display: flex;
  gap: 2rem;
  position: relative;
`;
export const TransportationWrapper = styled.div`
  width: 7rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-left: 0.5rem;
  position: absolute;
  left: 0;
  top: 1rem;
  z-index: 2;
`;
export const TransportationSelect = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid red;
  border-radius: 15px;
  border: 1px solid #d2d2d2;
  background-color: white;
  color: #73777b;
  font-size: 0.8rem;
  cursor: pointer;
  transition: 0.2s;
`;
export const MyArrowRightIcon = styled(ArrowRightIcon)`
  ${(props: any) => props.isDropTransport && "transform: rotate(90deg);"}
  transition: 0.3s;
`;
export const Transportation = styled.div`
  width: 3.5rem;
  ${(props: any) =>
    props.isDropTransport ? "display: flex;" : "display: none;"}
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 5px;
  background-color: white;
  border-radius: 15px;
  border: 1px solid #d2d2d2;
  transition: 0.2s;
  :hover {
    box-shadow: 0px 2px 4px 2px #00000033;
    transform: translateY(-5px);
  }
`;
export const TransportationItem = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
`;
export const TransportationItemSelected = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  background-color: #ffe69a;
`;
export const TransportationImg = styled.img`
  width: 2.5rem;
  height: auto;
  cursor: pointer;
`;
export const KaKaoMap = styled.div`
  margin-left: 0.5rem;
  border: 1px solid gray;
`;
export const AddressExplainWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 2.87rem;
  padding: 1rem;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
`;
export const AddressInput = styled.input`
  height: 2.188rem;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 1rem;
  color: #323232;
  ::placeholder {
    color: #d2d2d2;
    font-size: 1rem;
  }
`;
export const LocationExplainInput = styled.textarea`
  height: 12rem;
  padding: 10px;
  border: none;
  outline: none;
  color: #323232;
  font-size: 1rem;
  ::placeholder {
    color: #d2d2d2;
    font-size: 1rem;
  }
`;

// 최하단 취소/등록버튼 wrap
export const ButtonWrapper = styled.div`
  width: 100%;
  padding-top: 4rem;
  display: flex;
  gap: 3rem;
`;
export const CancelButton = styled.button`
  width: 50%;
  height: 3.238rem;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #f1eee9;
  font-size: 1.4rem;
  color: #323232;
  font-weight: 500;
  letter-spacing: 0.5rem;
  cursor: pointer;
`;
export const SubmitButton = styled.button`
  width: 50%;
  height: 3.238rem;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #15133c;
  font-size: 1.4rem;
  color: white;
  font-weight: 600;
  letter-spacing: 0.5rem;
  cursor: pointer;
`;
