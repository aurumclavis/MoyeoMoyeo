import styled from "@emotion/styled";
import { LocalGroceryStore, Payments } from "@mui/icons-material";

export const SidebarWrapper = styled.div`
  min-width: 12.5rem;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//유저 정보를 보여주고 포인트 충전이 가능한 Wrapper
export const ProfileWrapper = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #15133c;
`;
export const ProfileImg = styled.img`
  width: 5em;
`;
export const ProfileContentsWrapper = styled.div`
  padding: 0.625rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ProfileText = styled.span`
  font-size: 1.125rem;
  color: #ffffff;
  padding: 0.313rem 0;
`;
export const PointWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;
export const PointBtnWrapper = styled.div`
  width: 60px;
  height: 100%;
`;
export const PointBtn = styled.button`
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 1px solid #d2d2d2;
  border-radius: 20px;
  :hover {
    cursor: pointer;
  }
`;

// 탭 감싸는 Wrapper
export const TabWrapper = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  background: #f1eee9;
  padding: 1.25rem;
`;
export const TabItemWrapper = styled.div`
  display: flex;
  padding: 0.625rem 0;
  :hover {
    cursor: pointer;
  }
`;
export const TabText = styled.span`
  font-size: 1.25rem;
  margin-left: 5px;
`;

// 탭에 들어가는 아이콘들
export const CartIcon = styled(LocalGroceryStore)`
  font-size: 2rem;
`;
export const PointIcon = styled(Payments)`
  font-size: 2rem;
`;
