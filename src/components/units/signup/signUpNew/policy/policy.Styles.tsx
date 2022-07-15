import styled from "@emotion/styled";

export const OutWapper = styled.div`
  width: 100%;
  background-color: white;
  position: absolute;
  border: 2px solid black;
  border-radius: 10px;
  top: -200%;
  padding: 10px;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
`;
export const Header = styled.div`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  justify-content: space-between;
`;
export const Policy = styled.span`
  font-weight: 700;
`;
export const CancelIcon = styled.img`
  width: 13px;
  height: 13px;
  cursor: pointer;
`;
export const PolicyContents = styled.div`
  padding-top: 15px;
  font-size: 0.625rem;
  height: 300px;
`;
