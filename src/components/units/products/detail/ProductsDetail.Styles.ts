import styled from "@emotion/styled";
import { Visibility, FavoriteBorder } from "@mui/icons-material";
export const Wrapper = styled.div`
  height: auto;
  margin-top: 3.125rem;
`;

// 상세보기 전 상품정보들을 감싸는 Wrapper
export const SummaryWrapper = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
`;
export const SummaryImage = styled.img`
  width: 100%;
  height: 100%;
  padding-left: 1.25rem;
`;

// 사진 옆 오른쪽을 감싸는 Wrapper
export const SummaryContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.25rem;
`;
export const Title = styled.h1`
  margin: 1.25rem 0;
  font-size: 1.5rem;
  font-weight: 600;
`;

// 가격과 조회수, 찜한 수를 감싸는 Wrapper
export const SubtitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Subtitle = styled.h2`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 400;
`;

// 조회수, 찜한 수 감싸는 Wrapper
export const ViewPickWrapper = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
`;

export const ViewIcon = styled(Visibility)`
  font-size: 1.25rem;
`;
export const PickIcon = styled(FavoriteBorder)`
  font-size: 1.25rem;
`;

export const ContentsWrapper = styled.div`
  height: 300px;
  margin-bottom: 1.25rem;
`;
export const Label = styled.span`
  height: 100%;
  overflow: scroll;
  font-size: 1rem;
`;

// 구분선
export const Line = styled.div`
  height: 1px;
  margin: 1.25rem 0;
  border-bottom: 1px solid #d2d2d2;
`;

// 유저: 구매,찜 버튼, 관계자: 수정,삭제 버튼
export const SummaryBtnWrapper = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
`;
export const SkyblueBtn = styled.button`
  width: 45%;
  padding: 0.625rem;
  border: none;
  border-radius: 20px;
  color: #ffffff;
  background-color: #42c2ff;
  font-size: 1rem;
  :hover {
    cursor: pointer;
  }
`;
export const WhiteBtn = styled.button`
  width: 45%;
  padding: 0.625rem;
  border: 1px solid #d2d2d2;
  border-radius: 20px;
  background-color: #ffffff;
  font-size: 1rem;
  :hover {
    cursor: pointer;
  }
`;

// 상세보기, Q&A 이동하는 네비게이션탭
interface INavItemProps {
  isActive: boolean;
}
export const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 3.75rem 0;
  border-bottom: 1px solid #000000;
`;
export const NavItem = styled.button`
  width: 100%;
  padding: 0.625rem;
  background: ${(props: INavItemProps) =>
    props.isActive ? "#d2d2d2" : "#ffffff"};
  border: none;
  border-radius: 10px 10px 0px 0px;
  font-size: 1.25rem;
  :hover {
    cursor: pointer;
  }
`;

// 상세보기 이미지
export const DetailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DetailImage = styled.img`
  width: 90%;
`;
export const DetailContents = styled.p`
  width: 90%;
`;

// 판매자 정보
export const SellerContentsWrapper = styled.p`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
