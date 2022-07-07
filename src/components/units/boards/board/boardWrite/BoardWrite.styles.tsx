import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import DateRangeIcon from "@mui/icons-material/DateRange";
import SearchIcon from "@mui/icons-material/Search";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  padding: 4rem 0;
`;
// 반응형일 때 flex-direction : column
export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 3.5rem;
  padding: 0 2rem;
`;
// 반응형일 때 width : calc(100% + 2rem * 2)
export const ImageWrapper = styled.div`
  width: 50%;
  height: 34rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-top: 4rem;
`;
export const DateAndUploadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const EventDate = styled.div`
  padding: 5px;
  background-color: #ffe69a;
  font-size: 0.813rem;
`;
export const MyImageUpload = styled.div`
  padding: 5px;
  background-color: #d9d9d9;
  font-size: 0.813rem;
`;
export const EventImage = styled.img`
  width: 100%;
  height: 31.25rem;
  object-fit: cover;
`;
export const InfoWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2.87rem;
`;
export const ButtonWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 1rem;
`;
export const CancelButton = styled.button`
  width: 4.625rem;
  height: 3.238rem;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #d2d2d2;
  font-size: 1.4rem;
  color: #323232;
  font-weight: 500;
`;
export const SubmitButton = styled.button`
  width: 4.625rem;
  height: 3.238rem;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #15133c;
  font-size: 1.4rem;
  color: white;
  font-weight: 600;
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
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const AccompanyDateInput = styled.input`
  width: 7.125rem;
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
  height: 2.188rem;
  margin-left: 0.5rem;
  border: none;
  border-bottom: 1px solid black;
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
  border-bottom: 1px solid black;
  outline: none;
  font-size: 1.2rem;
  color: #323232;
  ::placeholder {
    color: #d2d2d2;
    font-size: 1.1rem;
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
`;
export const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.87rem;
  padding: 0 2rem;
`;
export const TitleInput = styled.input`
  width: 31rem;
  height: 2.188rem;
  margin-left: 0.5rem;
  border: none;
  border-bottom: 1px solid black;
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
  display: flex;
  gap: 2rem;
`;
export const KaKaoMap = styled.div`
  width: 100%;
  height: 24.188rem;
  margin-left: 0.5rem;
  border: 1px solid gray;
`;
export const AddressExplainWrapper = styled.div`
  width: 26rem;
  display: flex;
  flex-direction: column;
  gap: 2.87rem;
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
  height: 9.25rem;
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
