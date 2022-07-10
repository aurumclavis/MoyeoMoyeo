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
  padding: 1.4rem;
  border-radius: 1.25rem;
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
  @media (max-width: 767px) {
    height: 1.6rem;
    width: 1.6rem;
    margin-right: 0.4rem;
  }
`;

export const ListTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 5.4rem;
  margin-right: auto;
  margin-bottom: 1rem;
  font-size: 2.4rem;
  font-weight: 700;
  @media (max-width: 767px) {
    justify-content: center;
    padding-left: 0rem;
    padding-left: 0rem;
    font-size: 2rem;
  }
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
  width: 30%;
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

/// 행사 리스트 부분
export const ListWrapper = styled.div`
  width: 80%;
  height: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0.6rem auto;
  padding: 0 2rem;
  border: 1px solid #d2d2d2;
  border-radius: 20px;
  :hover {
    box-shadow: rgb(33 37 41 / 10%) 0px 4px 8px 0px;
  }
  @media (max-width: 767px) {
    height: 5rem;
    margin: 0.2rem;
    padding: 0.6rem;
    justify-content: space-around;
  }
`;

export const ListImg = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 10px;
  @media (max-width: 767px) {
    width: 4rem;
    height: 4rem;
  }
`;

export const ContentsWrapper = styled.div`
  width: 60%;
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
  margin-right: auto;
  padding-left: 2rem;
  @media (max-width: 767px) {
    width: 10%;
    height: 8rem;
    margin-right: auto;
  }
`;
export const constTitleWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ContentsTitle = styled.div`
  height: 30%;
  font-style: Bold;
  font-size: 1.2rem;
  @media (max-width: 767px) {
    font-size: 0.6rem;
  }
`;
export const ContentsPeriod = styled.div`
  height: 20%;
  font-size: 0.4rem;
`;

export const Marker = styled.div`
  width: 98%;
  height: 50%;
  font-size: 0.6rem;
  overflow: hidden;

  @media (max-width: 767px) {
  }
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
  @media (max-width: 767px) {
    width: 5rem;
    font-size: 1rem;
  }
`;
