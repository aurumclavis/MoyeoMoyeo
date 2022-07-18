import styled from "@emotion/styled";
import {
  CheckCircleOutlined,
  LinkOutlined,
  EyeOutlined,
} from "@ant-design/icons";

interface IMenuProps {
  isActive: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 1.25rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LineDiv = styled.div`
  width: 100%;
  height: 1rem;
  border-top: 0.063rem solid #d2d2d2;
`;

export const HeaderTitle = styled.div`
  width: 100%;
  height: 5rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;

export const HeaderCalendar = styled.div`
  width: 100%;
  height: 3rem;
  text-align: center;
  font-size: 0.8rem;
`;
export const MainHost = styled.div`
  margin: 1rem;
  font-size: 0.6rem;
`;
export const CountWrapper = styled.div`
  color: #d2d2d2;
`;
export const CountIcon = styled(EyeOutlined)`
  margin-right: 0.4rem;
  font-size: 1rem;
  cursor: pointer;
`;

export const MainWrapper = styled.div`
  width: 100%;
  height: 23.75rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0% 2%;
  align-items: center;
`;

export const MainImg = styled.img`
  width: 80%;
  margin: 2rem 0;
`;

export const MainTitle = styled.div`
  margin-top: 2rem;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const MainContents = styled.div`
  width: 100%;
  height: 80%;
  margin: 1rem;
  font-size: 1.2rem;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  /* height: 47.5rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;
export const ContentsTitle = styled.div`
  margin-bottom: 2rem;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const ContentImg = styled.img`
  width: 98%;
  @media (max-width: 767px) {
    width: 90%;
  }
`;
export const ContetsText = styled.div`
  width: 60%;
  /* height: 20vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2.4rem 0;
  padding: 1rem 2rem;
  border: 1px solid #d2d2d2;
  font-size: 1rem;
  @media (max-width: 767px) {
    width: 80%;
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  margin: 2rem 0rem;
`;

export const MapTitle = styled.div`
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  overflow: hidden;
`;

export const Footer = styled.div`
  width: 100%;
  height: 9.375rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 767px) {
    width: 80%;
  }
`;
export const BtnRouter = styled.div`
  width: 12.625rem;
  height: 3.375rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #42c2ff;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  :hover {
    font-weight: 700;
    box-shadow: rgb(33 37 41 / 10%) 2px 10px 5px 0px;
  }
  @media (max-width: 767px) {
    width: 8rem;
    height: 5rem;
    font-size: 0.8rem;
  }
`;
export const BtnRouterList = styled.div`
  width: 10.625rem;
  height: 3.375rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d2d2d2;
  font-size: 1rem;
  cursor: pointer;
  :hover {
    font-weight: 700;
    box-shadow: rgb(33 37 41 / 10%) 2px 10px 5px 0px;
  }
  @media (max-width: 767px) {
    width: 6rem;
    height: 5rem;
    font-size: 0.8rem;
  }
`;

/// 네브바
export const NavWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  @media (max-width: 767px) {
    top: 47px;
  }
`;

export const NavMenuWrapper = styled.div`
  width: 50%;
  display: flex;
  margin-left: 8%;
  background-color: #ffffff;

  @media (max-width: 767px) {
  }
`;

export const NavMenu = styled.div`
  padding: 0.4rem;
  margin-left: 2rem;
  padding-bottom: 0.2rem;

  border-bottom: ${(props: IMenuProps) =>
    props.isActive ? "3px solid #ffe69a;" : "none"};
  font-size: 1rem;
  font-weight: 700;

  :hover {
    cursor: pointer;
  }
  @media (max-width: 767px) {
    margin-left: 0rem;
  }
`;
export const IconWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 12%;
  font-size: 10px;
  @media (max-width: 767px) {
    width: 20%;
    justify-content: space-around;
  }
`;

export const PickWraepper = styled.div`
  width: 50%;
  height: 85%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 6%;
  border-radius: 10px;
  background-color: #ffd24c;
  @media (max-width: 767px) {
    width: 40%;
  }
`;

export const Linkraepper = styled.div`
  width: 40%;
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  border-radius: 10px;
  background-color: #ffd24c;
  @media (max-width: 767px) {
    width: 40%;
  }
`;

export const IconTitle = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 767px) {
    display: none;
  }
`;
export const PickIcon = styled(CheckCircleOutlined)`
  font-size: 1.4rem;
  color: red;
  cursor: pointer;
  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;

export const LincIcon = styled(LinkOutlined)`
  font-size: 1.2rem;
  cursor: pointer;
  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;
