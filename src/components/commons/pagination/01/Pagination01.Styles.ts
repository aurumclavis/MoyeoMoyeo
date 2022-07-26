import styled from "@emotion/styled";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export const PaginationWrapper = styled.div`
  text-align: center;
`;
export const PageButton = styled.button`
  margin: 0 0.625rem;
  border: none;
  background-color: transparent;
  font-size: 1.125rem;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const LeftIcon = styled(LeftOutlined)`
  font-size: 1.125rem;
  margin: 0 0.625rem;
  :hover {
    cursor: pointer;
  }
`;

export const RightIcon = styled(RightOutlined)`
  font-size: 1.125rem;
  margin: 0 0.625rem;
  :hover {
    cursor: pointer;
  }
`;
