import { EyeOutlined, LikeOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0.4rem auto;
  @media (max-width: 767px) {
    width: 95%;
    margin: 0.4rem auto 1rem auto;
  }
`;
export const InsideWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Select = styled.select`
  width: 120px;
  height: 1.6rem;
  /* margin-left: auto; */
  /* margin-right: 1rem; */
  margin-left: auto;
  margin-bottom: 1rem;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  color: #d2d2d2;
  text-align: center;
  font-size: 1rem;
`;

export const ListWrapper = styled.div`
  width: 1000px;
  max-width: 100%;
  height: 160px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  margin-top: 1rem;
  border: 1px solid #d2d2d2;
  border-left: 1px solid #d2d2d2;
  border-radius: 0.63rem;
  transition: 0.2s;
  box-shadow: 0px 2px 4px 0px #00000033;
  :hover {
    box-shadow: 0px 2px 4px 2px #00000033;
    transform: translateY(-5px);
  }
  @media (max-width: 767px) {
    width: 400px;
    max-width: 100%;
    height: 150px;
    padding: 0.4rem;
    border-radius: 0.4rem;
  }
`;
export const ListImg = styled.img`
  width: 100px;
  height: 100%;
  @media (max-width: 767px) {
    width: 70px;
    height: 100%;
  }
`;
export const FlexWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  @media (max-width: 767px) {
    padding-left: 0.4rem;
    padding-right: 0.4rem;
  }
`;
export const TItlePeriodWrapper = styled.div`
  width: 100%;
  height: 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const Title = styled.div`
  width: 100%;
  height: 1.7rem;
  font-size: 1.2rem;
  font-weight: 700;
  overflow: hidden;
  @media (max-width: 767px) {
    width: 100%;
    font-size: 1rem;
    display: flex;
    align-items: flex-start;
  }
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  /* height: auto; */
  height: 100%;
  font-size: 0.8rem;
  white-space: normal;
  line-height: 1;
  overflow: hidden;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media (max-width: 767px) {
    height: 95%;
    font-size: 0.4rem;
  }
`;

export const Period = styled.div`
  width: 100%;
  font-size: 0.8rem;
  @media (max-width: 767px) {
    width: 100%;
    height: 10%;
    flex-direction: column;
    font-size: 7px;
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  @media (max-width: 767px) {
    height: 20%;
    justify-content: flex-start;
  }
`;

export const CounterWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  margin-right: auto;
  font-size: 1rem;
  @media (max-width: 767px) {
    width: 70%;
    height: 100%;
    justify-content: flex-start;
  }
`;

export const CountIcon = styled(EyeOutlined)`
  margin-right: 0.4rem;
  font-size: 10px;
`;

export const LikeIcon = styled(LikeOutlined)`
  margin-right: 0.4rem;
  font-size: 10px;
`;

export const Counter = styled.div`
  width: 30%;
  color: #d2d2d2;
  font-size: 10px;
  @media (max-width: 767px) {
    width: 50%;
    font-size: 3px;
  }
`;

export const Btn = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 0.3rem;
  color: #42c2ff;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  :hover {
    border: 1px solid #ffffff;
  }
  @media (max-width: 767px) {
    width: 30%;
    height: 100%;
    font-size: 1rem;
  }
`;
