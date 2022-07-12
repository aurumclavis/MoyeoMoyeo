import styled from "@emotion/styled";
export const Wrapper = styled.div`
  min-width: 12.5rem;
  padding-left: 1.5rem;
  @media screen and (max-width: 767px) {
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
export const ProfileWrapper = styled.div`
  width: 100%;
  height: 250px;
  padding: 3.125rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;

  @media screen and (max-width: 767px) {
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
  font-size: 1rem;
  padding: 0.313rem 0;
`;
// export const PointWrapper = styled.div`
//   width: 80%;
//   display: flex;
//   justify-content: space-between;
// `;
// export const PointBtnWrapper = styled.div`
//   width: 60px;
//   height: 100%;
// `;
// export const PointBtn = styled.button`
//   width: 100%;
//   height: 100%;
//   background: #ffffff;
//   border: 1px solid #d2d2d2;
//   border-radius: 20px;
//   :hover {
//     cursor: pointer;
//   }
// `;

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
  @media screen and (max-width: 767px) {
    flex-direction: row;
    justify-content: space-around;
    border: none;
    border-bottom: 1px solid #d9d9d9;
    margin-bottom: 1.25rem;
  }
`;

interface ITabItemProps {
  isActive: boolean;
}
export const TabItemWrapper = styled.div`
  display: flex;
  padding: 1.25rem;
  cursor: pointer;
  background-color: ${(props: ITabItemProps) =>
    props.isActive ? "#f4f4f4" : "#ffffff"};
  border-left: ${(props: ITabItemProps) =>
    props.isActive ? "3px solid #ffd24c" : "none"};

  /* 모바일 화면일 때 각각의 탭은 클릭했을 때 밑줄, 배경색 없음 */
  @media screen and (max-width: 767px) {
    padding: 0.625rem 0.313rem;
    background-color: #ffffff;
    border-left: none;
    border-bottom: ${(props) =>
      props.isActive ? "3px solid #ffd24c" : "none"};
  }
`;
export const TabText = styled.span`
  font-size: 1.25rem;
`;
