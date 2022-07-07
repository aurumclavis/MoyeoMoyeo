import styled from "@emotion/styled";
import { SearchOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// 검색바를 포함한 상단바 영역
export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SelectWrapper = styled.select`
  width: 7.5rem;
  height: 45px;
  margin-right: 1.25rem;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 1rem;
  text-align: center;
`;
export const SearchBarWrapper = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  padding: 0.625rem;
  border: none;
  border-radius: 5px;
  background-color: #f4f4f4;
`;
export const SearchBarIcon = styled(SearchOutlined)`
  font-size: 1.5rem;
`;
export const SearchBarInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  padding: 0 0.625rem;
  font-size: 1rem;
  :focus {
    outline: none;
  }
`;

// 상품 등록 버튼
export const CreateBtnWrapper = styled.div`
  width: 7.5rem;
  height: 45px;
  padding-left: 1.25rem;
`;
export const CreateBtn = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5px;
  background-color: #ffd24c;
  font-size: 1rem;
`;

// 상품 그리드
export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1.25rem;
  @media screen and (max-width: 767px) {
    grid-gap: 0.625rem;
  }
  margin: 3.125rem 0;
`;
export const GridItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  ::after {
    display: block;
    content: "";
    padding-bottom: 100%;
  }
`;
export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const TextWrapper = styled.div``;
export const Text = styled.span`
  display: block;
  margin-top: 0.625rem;
  font-size: 1rem;
`;

// 페이지네이션
export const PaginationWrapper = styled.div`
  width: auto;
  text-align: center;
`;
export const PageNumber = styled.button`
  padding: 0 0.625rem;
  font-size: 1rem;
  border: none;
  background-color: transparent;
  :hover {
    cursor: pointer;
  }
`;
export const LeftIcon = styled(LeftOutlined)`
  font-size: 1rem;
  padding: 10px;
  :hover {
    cursor: pointer;
  }
`;
export const RightIcon = styled(RightOutlined)`
  font-size: 1rem;
  padding: 10px;
  :hover {
    cursor: pointer;
  }
`;
