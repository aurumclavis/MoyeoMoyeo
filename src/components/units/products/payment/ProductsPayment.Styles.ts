import styled from "@emotion/styled";
export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 3.125rem;
  padding: 0 1.125rem;
`;
export const Title = styled.h2`
  width: 100%;
  margin: 0;
  padding-bottom: 20px;
  font-size: 1.5rem;
  font-weight: 600;
`;
export const Subtitle = styled.h2`
  width: 100%;
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
`;
export const Label = styled.span`
  overflow: scroll;
  font-size: 1rem;
`;
export const SmallLabel = styled.span`
  font-size: 0.875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const LeftWrapper = styled.div`
  width: 70%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 1.5rem 0;
  border-bottom: 1px solid #d9d9d9;
`;
export const ProductInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 2.5rem;
`;
export const ProductInfoTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 1.25rem;
`;
export const ProductInfoImage = styled.img`
  width: 6.25rem;
  height: 6.25rem;
`;
export const ShipInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.25rem;
`;

export const ZipcodeWrapper = styled.div`
  width: 40%;
  display: flex;
  margin: 0.625rem 0;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
export const AddressWrapper = styled.div`
  width: 100%;
  margin-bottom: 0.625rem;
`;
export const ZipcodeBtnWrapper = styled.div`
  min-width: 7.5rem;
  margin-left: 0.625rem;
`;

// 오른쪽 사이드바
export const RightWrapper = styled.div`
  width: 28%;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const SidebarWrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  padding: 20px 5%;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background-color: #ffffff;
  transition: 0.2s;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  :hover {
    box-shadow: 0px 2px 4px 2px #00000033;
    transform: translateY(-5px);
  }
`;

// 결제하기, 취소하기 버튼
export const BtnWrapper = styled.div`
  width: 100%;
  height: 140px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    flex-direction: row;
  }
`;
export const SkyblueBtn = styled.button`
  width: 100%;
  padding: 0.625rem;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  background-color: #42c2ff;
  font-size: 1.25rem;
  cursor: pointer;
`;
export const WhiteBtn = styled.button`
  width: 100%;
  padding: 0.625rem;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  background-color: #ffffff;
  font-size: 1.25rem;
  cursor: pointer;
`;
export const WhiteSmallBtn = styled.button`
  width: 100%;
  height: 100%;
  padding: 0.625rem;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  background-color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
`;
// 모바일 화면일 때 하단에 고정되는 바
export const MobilePaymentBar = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 85px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    padding: 0.625rem 1%;
    background-color: #ffffff;
  }
`;
export const MobilePrice = styled.h2`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    width: 100%;
    margin: 0;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 600;
  }
`;
