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
  border-radius: 1.25rem;
  margin: 1rem 3.25rem 0 3.25rem;
`;
export const LineDiv = styled.div`
  width: 100%;
  height: 1rem;
  border-top: 0.063rem solid #15133c;
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
  margin-bottom: 1rem;
  font-size: 3rem;
  font-weight: 700;
  /* border-radius: 1.25rem 1.25rem 0 0; */
  /* border-bottom: 0.188rem solid #d2d2d2; */
  /* background-color: #ffe69a; */
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
  justify-content: space-between;
  align-items: center;
  margin: 0.6rem;
  padding: 0 2rem;
  border: 1px solid #d2d2d2;
  border-radius: 20px;
  :hover {
    box-shadow: rgb(33 37 41 / 10%) 0px 4px 8px 0px;
  }
`;

export const ListImg = styled.img`
  width: 11.25rem;
  height: 11.25rem;
  margin: 2rem 0;
  border-radius: 10px;
`;

export const ContentsWrapper = styled.div`
  width: 40rem;
  height: 11.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
  padding-left: 2rem 0px;
`;

export const ContentsTitle = styled.div`
  height: 30%;
  font-style: Bold;
  font-size: 1.8rem;
`;
export const ContentsPeriod = styled.div`
  height: 20%;
  font-size: 0.8rem;
`;

export const Marker = styled.div`
  width: 500px;
  height: 50%;
  font-size: 1rem;
  overflow: hidden;
`;

export const Btn = styled.div`
  width: 10rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #42c2ff;
  border-radius: 20px;
  font-size: 1.4rem;
  cursor: pointer;
  :hover {
    font-family: 600;
    border: 1px solid #ffffff;
  }
`;
