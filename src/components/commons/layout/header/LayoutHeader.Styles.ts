import styled from "@emotion/styled";
import { MenuOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 0.063rem solid #cccccc;
  @media (max-width: 767px) {
    height: 3rem;
    position: sticky;
    top: 0;
    z-index: 10;
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
  padding: 0px 1.875rem;
  margin: auto;
  margin-top: 0.625rem;
`;

export const LogoImg = styled.img`
  height: 2.4rem;
  margin-left: 1rem;
  cursor: pointer;
  @media (max-width: 767px) {
    height: 2rem;
    margin: auto;
  }
`;

export const NavBarWrapper = styled.div`
  width: 28%;
  height: 3.75rem;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  margin-right: auto;
  padding-left: 2%;
  @media (max-width: 767px) {
    display: none;
  }
`;
interface IMenuProps {
  isActive: boolean;
}

export const Menu = styled.div`
  height: 90%;
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

// export const LogoImgMobile = styled.img`
//   height: 2.813rem;
//   cursor: pointer;
//   display: none;
//   @media (max-width: 767px) {
//     height: 4rem;
//     display: block;
//     margin-right: auto;
//   }
// `;
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
  z-index: 10;
  @media (max-width: 767px) {
    display: ${(props: IMenuProps) => (props.isActive ? "none" : "block")};
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    top: 3rem;
    transition: left 0.2s;
  }
`;
export const MobileMenuIistWrapper = styled.div`
  height: 60%;
`;

export const MobileMenu = styled.div`
  height: 10%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  padding-right: 20%;
  cursor: pointer;
  :hover {
    color: #ffe69a;
    border-bottom: 0.063rem solid #ffe69a;
  }
`;

export const MobileMenuFooterWrapper = styled.div`
  height: 40%;
  background-color: ;
`;
