import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

interface ITabItemProps {
  isActive: boolean;
}
export const Wrapper = styled.div`
  min-width: 15rem;
  padding-left: 1.5rem;
  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 0 1rem;
  }
`;
export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: -webkit-sticky;
  position: sticky;
  top: 100px;
`;
export const Title = styled.h2`
  margin: 0;
  font-weight: bold;
`;
//유저 정보를 보여주고 포인트 충전이 가능한 Wrapper
export const ProfileWrapper = styled.div`
  width: 100%;
  height: 250px;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #15133c;
  border: 1px solid #d9d9d9;
  border-radius: 4px;

  @media ${breakPoints.mobile} {
    flex-direction: row;
    height: 120px;
    padding: 1.25rem 0;
  }
`;
export const ProfileImg = styled.img`
  width: 5em;
`;
export const ProfileContentsWrapper = styled.div`
  padding: 0.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ProfileText = styled.span`
  padding: 0.313rem 0;
  color: #ffffff;
  font-size: 1rem;
`;

// 탭 감싸는 Wrapper

export const TabWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;

  /* 모바일 화면일 때 탭 가로 배치 */
  @media ${breakPoints.mobile} {
    flex-direction: row;
    justify-content: space-around;
    border: none;
    border-bottom: 1px solid #d9d9d9;
    margin-bottom: 1.25rem;
  }
`;

export const TabItemWrapper = styled.div`
  display: flex;
  padding: 1.25rem;
  :hover {
    cursor: pointer;
  }
  background-color: ${(props: ITabItemProps) =>
    props.isActive ? "#f4f4f4" : "#ffffff"};
  border-left: ${(props: ITabItemProps) =>
    props.isActive ? "3px solid #15133C" : "none"};

  /* 모바일 화면일 때 각각의 탭은 클릭했을 때 밑줄, 배경색 없음 */
  @media ${breakPoints.mobile} {
    padding: 0.625rem 0.313rem;
    background-color: #ffffff;
    border-left: none;
    border-bottom: ${(props) =>
      props.isActive ? "3px solid #15133C" : "none"};
  }
`;
export const TabText = styled.span`
  font-size: 1.25rem;
  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;
