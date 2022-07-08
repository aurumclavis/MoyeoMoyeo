import styled from "@emotion/styled";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { CaretLeftOutlined } from "@ant-design/icons";
import { CaretRightOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.3rem;
  border: 0.063rem solid #15133c;
  border-radius: 1.25rem;
`;
export const LineDiv = styled.div`
  width: 100%;
  height: 1rem;
  border-top: 0.188rem solid #15133c;
`;

export const LineListDiv = styled.div`
  width: 100%;
  height: 1rem;
  border-top: 0.1rem solid #f4f4f4;
`;
export const Logo = styled.img`
  height: 3.125rem;
  width: 3.125rem;
  margin-right: 1rem;
`;

export const ListTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 5.4rem;
  margin-right: auto;
  font-size: 3rem;
  font-weight: 700;
  border-radius: 1.25rem 1.25rem 0 0;
  border-bottom: 0.188 solid #d2d2d2;
  background-color: #ffe69a;
`;

export const DateWrapper = styled.div`
  width: 35rem;
  height: 27rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;
export const CalendarWrapper = styled.div`
  width: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #42c2ff;
`;

export const DatePickWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
`;
export const DatePick = styled.div`
  width: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 1rem;
  background-color: #f4f4f4;
  font-family: "Courier New", Courier, monospace;
`;
export const DatePickIcon = styled(DateRangeIcon)``;
export const DateLeftIcon = styled(CaretLeftOutlined)``;
export const DateRigthIcon = styled(CaretRightOutlined)``;

export const ListWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0.6rem 0px;
`;

export const ListImg = styled.img`
  width: 11.25rem;
  height: 11.25rem;
`;

export const ContentsWrapper = styled.div`
  width: 50rem;
  height: 11.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
  padding-left: 20px;
`;

export const ContentsTitleWrapper = styled.div`
  width: 100%;
  height: 3.125rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid black;
  padding-bottom: 0.4rem;
`;
export const ContentsTitle = styled.div`
  font-style: Bold;
  font-size: 2rem;
`;
export const ContentsPeriod = styled.div`
  font-size: 1rem;
`;

export const MarkerDetailWrapper = styled.div`
  width: 100%;
  height: 9.375rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const Marker = styled.div`
  width: 500px;
  font-size: 20px;
  overflow: hidden;
`;

export const Btn = styled.div`
  width: 9.688rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #85f4ff;
  border-radius: 20px;
  cursor: pointer;
`;
