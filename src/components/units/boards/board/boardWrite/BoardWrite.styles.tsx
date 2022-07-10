import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import DateRangeIcon from "@mui/icons-material/DateRange";
import FestivalIcon from "@mui/icons-material/Festival";
import MapIcon from "@mui/icons-material/Map";
import ListIcon from "@mui/icons-material/List";
import SearchIcon from "@mui/icons-material/Search";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  padding: 4rem 2rem;
`;
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
export const MyCoverImageUpload = styled.div`
  padding: 2px 5px;
  background-color: #d9d9d9;
  font-size: 0.813rem;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
`;
// 반응형일 때 flex-direction : column
export const UpperWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10%;
  padding: 0 2rem;
`;
export const EventInfoAndUploadWrapper = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  border-radius: 5px;
  border: 1px solid #f1eee9;
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
  top: 0;
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
export const EventInfoWrapper = styled.div`
  display: flex;
  padding: 1.5rem;
`;
export const EventInfoDetailWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
export const EventInfoDetail = styled.div`
  display: flex;
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
  padding-left: 3rem;
  color: #73777b;
`;
export const InfoWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 2.87rem;
`;
export const EventSearchWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  padding: 1px;
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
  padding-left: 0.5rem;
  border: none;
  outline: none;
  font-size: 1.1rem;
  color: #323232;
  ::placeholder {
    color: #d2d2d2;
    font-size: 1.1rem;
  }
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
export const AccompanyDateInputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const AccompanyDateInput = styled.input`
  width: 20%;
  height: 2.188rem;
  margin-left: 0.5rem;
  padding: 0.6rem;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  font-size: 0.813rem;
  ::placeholder {
    color: black;
  }
`;
export const CalendarWrapper = styled.div`
  width: 2.188rem;
  height: 2.188rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
`;
export const MyDateRangeIcon = styled(DateRangeIcon)``;
export const RemarkInput = styled.input`
  width: 100%;
  height: 2.5rem;
  margin-left: 0.5rem;
  padding: 10px;
  border: none;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  outline: none;
  font-size: 1.1rem;
  color: #323232;
  ::placeholder {
    color: #d2d2d2;
    font-size: 1.1rem;
  }
`;
export const MaxHeadCountWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  padding-top: 0.7rem;
  margin-left: 0.5rem;
`;
export const MaxHeadCountInput = styled.input`
  width: 2rem;
  height: 1.5rem;
  border: none;
  border-bottom: 1px solid #d2d2d2;
  outline: none;
  font-size: 1.2rem;
  color: #323232;
  ::placeholder {
    color: #d2d2d2;
    font-size: 1.1rem;
    text-align: center;
  }
`;
export const TransportationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 0.5rem;
`;
export const Bicycle = styled.div`
  width: 4.5rem;
  height: 3.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  /* background-color: #d9d9d9; */
`;
export const Bus = styled.div`
  width: 4.5rem;
  height: 3.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  /* background-color: #d9d9d9; */
`;
export const Train = styled.div`
  width: 4.5rem;
  height: 3.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  /* background-color: #d9d9d9; */
`;
export const Car = styled.div`
  width: 4.5rem;
  height: 3.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  background-color: #d9d9d9;
`;
export const Airplane = styled.div`
  width: 4.5rem;
  height: 3.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  /* background-color: #d9d9d9; */
`;
export const Ship = styled.div`
  width: 4.5rem;
  height: 3.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  /* background-color: #d9d9d9; */
`;
export const TransportationImg = styled.img`
  width: 3.813rem;
  height: auto;
  cursor: pointer;
`;
export const UnderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.87rem;
  padding: 0 2rem;
`;
export const TitleInput = styled.input`
  width: 65%;
  height: 2.5rem;
  margin-left: 0.5rem;
  padding: 10px;
  border: none;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  outline: none;
  font-size: 1.1rem;
  color: #323232;
  ::placeholder {
    color: #d2d2d2;
    font-size: 1.1rem;
  }
`;
export const MyReactQuill = styled(ReactQuill)`
  height: 25rem;
  margin-left: 0.5rem;
  margin-bottom: 2.2rem;
`;
export const LocationWrapper = styled.div`
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
`;
export const KaKaoMap = styled.div`
  width: 60%;
  margin-left: 0.5rem;
  border: 1px solid gray;
`;
export const AddressExplainWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 2.87rem;
  padding: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
`;
export const AddressInput = styled.input`
  height: 2.188rem;
  margin-left: 0.5rem;
  border: none;
  outline: none;
  font-size: 1.1rem;
  color: #323232;
`;
export const LocationExplainInput = styled.textarea`
  height: 12rem;
  margin-left: 0.5rem;
  border: none;
  outline: none;
  color: #323232;
  font-size: 1.1rem;
  ::placeholder {
    color: #d2d2d2;
    font-size: 1.1rem;
  }
`;
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
