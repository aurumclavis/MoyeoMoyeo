import styled from "@emotion/styled";
import { ErrorOutlined } from "@mui/icons-material";

const NoDataFoundWrapper = styled.div`
  width: 100%;
  height: 557px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default function NoDataFound() {
  return (
    <NoDataFoundWrapper>
      <ErrorOutlined />
      <div>데이터가 존재하지 않습니다.</div>
    </NoDataFoundWrapper>
  );
}
