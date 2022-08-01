import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";
import { Visibility, FavoriteBorder } from "@mui/icons-material";
export const OutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  @media ${breakPoints.mobile} {
    margin: 4rem 0rem 0rem 0rem;
    padding: 0 1.125rem;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const TitleIcon = styled.img`
  width: 20px;
  height: 16px;
  margin-right: 5px;
  @media ${breakPoints.mobile} {
    width: 1.5rem; //24
    height: 1.25rem; //20
  }
`;
export const Title = styled.h1`
  margin: 0;
  @media ${breakPoints.mobile} {
    font-size: 1.6rem;
  }
`;
export const TitleRightWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  gap: 5px;
`;
export const MoreBox = styled.div`
  width: 55px;
  display: flex;
  justify-content: center;
`;
export const More = styled.span`
  width: 40px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    color: #42c2ff;
  }
`;
export const ArrowIcon = styled.img`
  width: 10px;
  height: 11px;
  margin-top: 5px;
`;
export const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  @media ${breakPoints.mobile} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ProductImages = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;
export const ProductName = styled.div`
  width: 100%;
  font-size: 0.875rem;
  text-align: left;
`;

export const ProductPrice = styled.div`
  width: 100%;
  font-size: 0.875rem;
  text-align: left;
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: left;
  gap: 2px;
  margin-right: 5px;
`;
export const ViewIcon = styled(Visibility)`
  margin-top: 5px;
  font-size: 0.825rem;
`;
export const PickIcon = styled(FavoriteBorder)`
  margin-top: 5px;
  font-size: 0.825rem;
`;
export const Text = styled.span`
  margin-top: 1px;
  text-align: center;
  font-size: 0.825rem;
`;
export const ProductUnderWapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
