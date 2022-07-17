import styled from "@emotion/styled";
import { SearchOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 3.125rem 0;
  padding: 0 1.125rem;
`;

// 검색바를 포함한 상단바 영역
export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SelectBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SearchBarWrapper = styled.div`
  width: 30%;

  height: 45px;
  display: flex;
  padding: 0.625rem;
  border: none;
  border-radius: 5px;
  background-color: #f4f4f4;
  @media ${breakPoints.mobile} {
    width: 40%;
  }
`;
export const SearchBarIcon = styled(SearchOutlined)`
  font-size: 1.5rem;
`;
export const SearchBarInput = styled.input`
  width: 100%;
  padding: 0 0.625rem;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  :focus {
    outline: none;
  }
`;

// 상품 등록 버튼
export const CreateBtnWrapper = styled.div`
  width: 100%;
  height: 45px;
  padding-right: 5%;
`;
export const CreateBtn = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5px;
  background-color: #15133c;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
`;
export const Select = styled.select`
  width: 6.25rem;
  height: 45px;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  font-size: 1rem;
`;

// 상품 그리드
export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1.25rem;
  margin: 3.125rem 0;
  @media ${breakPoints.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
    grid-gap: 0.625rem;
  }
`;
export const GridItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  ::after {
    display: block;
    content: "";
    padding-bottom: 100%;
  }
`;
export const Image = styled.img`
  border-radius: 5px;
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
