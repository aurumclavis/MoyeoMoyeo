import styled from "@emotion/styled";
import { Visibility, FavoriteBorder } from "@mui/icons-material";

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

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.625rem;
`;
export const Text = styled.span`
  display: block;
  font-size: 1rem;
`;
export const ViewPickWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;
export const ViewIcon = styled(Visibility)`
  font-size: 1.25rem;
`;
export const PickIcon = styled(FavoriteBorder)`
  font-size: 1.25rem;
`;
