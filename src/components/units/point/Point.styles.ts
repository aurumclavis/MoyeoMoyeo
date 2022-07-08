import styled from "@emotion/styled";
import { Clear } from "@mui/icons-material";
export const Wrapper = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;
  position: absolute;
  left: 50vh;
  top: 6.25rem;
  border: 1px solid #cccccc;
  border-radius: 20px;
  background-color: #ffffff;
`;
export const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;
export const CancelIcon = styled(Clear)`
  font-size: 1.5rem;
  :hover {
    cursor: pointer;
  }
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  text-align: center;
`;
export const ContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.25rem;
`;
export const SelectWrapper = styled.div`
  width: 80%;
  height: 40px;
  display: inline-block;
  padding: 0.625rem;
  border: none;
  border-bottom: 2px solid;
  background-repeat: no-repeat;
  background-image: url("https://img.icons8.com/material-rounded/24/000000/expand-arrow.png");
  background-position: right;
  color: #828282;
  font-size: 16px;
  cursor: pointer;
`;
export const SelctedPrice = styled.div`
  color: black;
  font-weight: bold;
  font-size: 18px;
`;

interface IsSelectProps {
  isSelect: boolean;
}
export const ListWrapper = styled.ul`
  width: 80%;
  display: ${(props: IsSelectProps) => props.isSelect || "none"};
  margin: 0.625rem 0px;
  padding-left: 0px;
  border-radius: 0.625rem;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  :hover {
    cursor: pointer;
  }
`;

export const List = styled.li`
  padding: 1.25rem;
  list-style: none;
  border-bottom: 1px solid #e0e0e0;
  color: #828282;
  :hover {
    color: black;
    font-weight: 700;
  }
`;
export const SubmitButton = styled.button`
  background: #42c2ff;
  border-radius: 1.875rem;
  color: #ffffff;
  width: 80%;
  height: 40px;
  text-align: center;
  padding: 0.625rem;
  border: none;
  margin: 1.875rem 0;
  :hover {
    cursor: pointer;
  }
`;
