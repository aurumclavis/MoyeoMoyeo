import styled from "@emotion/styled";
import {
  MenuOutlined,
  ExportOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 0.063rem solid #cccccc;
  background-color: #ffffff;
  @media (max-width: 767px) {
    height: 3.4rem;
    position: sticky;
    top: 0;
    z-index: 20;
    background-color: #ffffff;
  }
`;

export const InsideWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  margin-top: 0.625rem;
  @media (max-width: 767px) {
    justify-content: center;
    margin-top: 0.325rem;
    padding-right: 36.4px;
  }
`;

export const LogoImg = styled.img`
  height: 2.4rem;
  margin-left: 1rem;
  margin-bottom: 0.63rem;
  cursor: pointer;
  @media (max-width: 767px) {
  }
`;

export const NavBarWrapper = styled.div`
  width: 340px;
  height: 3.75rem;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  margin-right: auto;
  padding-left: 1%;
  @media (max-width: 767px) {
    display: none;
  }
`;
interface IMenuProps {
  isActive: boolean;
}

export const Menu = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  font-weight: ${(props: IMenuProps) => (props.isActive ? "700" : "400")};
  /* color: ${(props: IMenuProps) =>
    props.isActive ? "#ffe69a" : "#000000"}; */
  border-bottom: ${(props: IMenuProps) =>
    props.isActive ? "3px solid #ffe69a;" : "none"};
  cursor: pointer;
  :hover {
    color: #ffe69a;
    border-bottom: 0.063rem solid #ffe69a;
  }
`;

export const UserMenuWrapper = styled.div`
  width: 8.75rem;
  height: 3.75rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const UserMenu = styled.div`
  height: 1.875rem;
  cursor: pointer;
  :hover {
    font-weight: 900;
  }
`;
export const MenuIconWrapper = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`;

export const MenuIcon = styled(MenuOutlined)`
  padding-left: 1rem;
  font-size: 1.6rem;
  cursor: pointer;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: auto;
`;

export const MobileMenuWrapper = styled.div`
  width: 40%;
  height: 100%;
  display: none;
  background-color: #ffe69a;
  margin-right: auto;
  z-index: 100;
  @media (max-width: 767px) {
    display: ${(props: IMenuProps) => (props.isActive ? "flex" : "none")};
    flex-direction: column;
    justify-content: space-between;
    justify-content: flex-start;
    position: fixed;
    top: 3.4rem;
    transition: left 0.2s;
  }
`;
export const MobileMenuIistWrapper = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  padding-top: 10%;
  padding-right: 20%;
`;

export const MobileMenu = styled.div`
  height: 7%;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-top: 15%;
  margin-bottom: 5%;
  font-size: large;
  font-weight: 600;
  border-bottom: 1px solid black;
  cursor: pointer;
  :hover {
    color: #ffe69a;
    border-bottom: 0.063rem solid #ffe69a;
  }
`;

export const MobileMenuFooterWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  padding-top: 10%;
  margin-left: auto;
  padding-right: 20%;
  background-color: #ffd24c;
`;

export const MobileFooterMenu = styled.div`
  display: flex;
  align-items: center;
  font-size: large;
  font-weight: 600;
  cursor: pointer;
  :hover {
    color: #ffe69a;
    border-bottom: 0.063rem solid #ffe69a;
  }
`;

export const MobileLoginIcon = styled(ExportOutlined)`
  margin-right: 0.6rem;
  font-size: 16px;
`;

export const MobileSignUpIcon = styled(DownloadOutlined)`
  margin-right: 0.6rem;
  font-size: 16px;
`;
export const MobileMenuIconWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1rem;
`;
