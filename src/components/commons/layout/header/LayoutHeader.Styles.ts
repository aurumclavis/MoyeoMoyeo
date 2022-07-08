import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 0.063rem solid #cccccc;
`;

export const InsideWrapper = styled.div`
  width: 75rem;
  height: 4.375rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 0px 1.875rem;
  margin-top: 0.625rem;
`;
export const LogoMenuWrapper = styled.div`
  width: 37.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 0.625rem;
`;

export const LogoImg = styled.img`
  height: 2.813rem;
  cursor: pointer;
`;

export const NavBarWrapper = styled.div`
  width: 20rem;
  height: 3.75rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.div`
  width: 80px;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #323232;
  cursor: pointer;
  :hover {
    color: #ffe69a;
    font-weight: 800;
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
`;

export const UserMenu = styled.div`
  height: 1.875rem;
  cursor: pointer;
  :hover {
    font-weight: 900;
  }
`;
