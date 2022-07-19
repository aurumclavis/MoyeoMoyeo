import styled from "@emotion/styled";
import { Visibility, FavoriteBorder, Chat } from "@mui/icons-material";
import { Image } from "antd";
import { breakPoints } from "../../../../commons/styles/media";

interface INavItemProps {
  isActive: boolean;
}
export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
  justify-content: space-between;
  margin-top: 3.125rem;
  padding: 0 1.125rem;
`;

// 네비게이션 탭 스타일: 상품정보,Q&A

export const NavWrapper = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: -71px;
  left: 0;
  z-index: 2;
  background-color: #ffffff;
  border-bottom: 1px solid #d9d9d9;
  transition: top 0.5s;
  @media ${breakPoints.mobile} {
    margin-top: 3.3em;
  }
`;
export const NavItemWrapper = styled.div`
  width: 75rem;
  display: flex;
  background-color: #ffffff;
`;
export const NavItem = styled.div`
  padding: 0.625rem;
  color: ${(props: INavItemProps) => (props.isActive ? "#000000" : "#d2d2d2")};
  font-weight: ${(props: INavItemProps) =>
    props.isActive ? "bold" : "normal"};
  border-bottom: ${(props) => (props.isActive ? "4px solid #FFD24C" : "none")};
  font-size: 1rem;
  :hover {
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  width: 100%;
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: 600;
`;
export const Subtitle = styled.h2`
  width: 100%;
  margin: 0;
  padding-bottom: 30px;
  font-size: 1.5rem;
  font-weight: 600;
`;
export const Label = styled.span`
  height: auto;
  overflow: scroll;
  font-size: 1rem;
`;

export const LeftWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
// 조회수, 찜한 수 감싸는 Wrapper
export const ViewPickWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 15px;
`;
export const ViewIcon = styled(Visibility)`
  font-size: 1.25rem;
`;
export const PickIcon = styled(FavoriteBorder)`
  font-size: 1.25rem;
`;

// 구분선
export const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 1.875rem 0;
  border-bottom: 1px solid #d9d9d9;
`;

export const DetailContents = styled.div`
  width: 100%;
  padding-top: 50px;
`;

export const RightWrapper = styled.div`
  width: 28%;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const SidebarWrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  width: 100%;
  top: 100px;
  display: flex;
  flex-direction: column;
  padding: 20px 5%;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background-color: #ffffff;
  transition: 0.2s;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  :hover {
    box-shadow: 0px 2px 4px 2px #00000033;
    transform: translateY(-5px);
  }
`;
export const BtnWrapper = styled.div`
  height: 140px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
// 유저: 구매,찜 버튼, 관계자: 수정,삭제 버튼
export const ActiveBtn = styled.button`
  width: 100%;
  padding: 0.625rem;
  border: none;
  border-radius: 10px;
  color: #000000;
  background-color: #ffd24c;
  font-size: 1.25rem;
  cursor: pointer;
`;
export const SellerActiveBtn = styled.button`
  width: 100%;
  padding: 0.625rem;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  background-color: #15133c;
  font-size: 1.25rem;
  cursor: pointer;
`;
export const WhiteBtn = styled.button`
  width: 100%;
  padding: 0.625rem;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  background-color: #ffffff;
  font-size: 1.25rem;
  cursor: pointer;
`;
export const SellerContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ImageItem = styled(Image)`
  width: 100%;
  max-height: 300px;
`;

export const DetailImage = styled(Image)`
  width: auto;
  max-width: 100%;
`;
export const PreviewGroup = styled.div`
  margin: 0.625rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
`;

// 모바일 화면일 때 하단에 고정되는 바
export const MobilePaymentBar = styled.div`
  display: none;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    padding: 0.625rem 1%;
    background-color: #ffffff;
  }
`;
export const MobilePrice = styled.h2`
  display: none;
  @media ${breakPoints.mobile} {
    display: block;
    width: 100%;
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
export const ChatWrapper = styled.div`
  position: fixed;
  bottom: 3%;
  right: 10%;
  animation: fadein 1s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const ChatIconWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  position: fixed;
  top: 85%;
  right: 13%;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #ffd24c;
  cursor: pointer;
  :hover {
    animation: motion 0.5s linear 0s infinite alternate;
  }
  @keyframes motion {
    0% {
      margin-top: 0px;
    }
    100% {
      margin-top: 10px;
    }
  }
`;
export const ChatIcon = styled(Chat)`
  color: white;
`;
