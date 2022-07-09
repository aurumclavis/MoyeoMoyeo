import styled from "@emotion/styled";

export const OutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled.div`
  width: 405px;
  height: auto;
  background-color: #ffffff;
  border-radius: 3px;
  padding: 60px 15px;
`;
export const HeaderTitle = styled.h1`
  & span {
    color: #42c2ff;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
`;
//kakao
export const KakaoWrapper = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fae100;
  border-radius: 5px;
  margin-bottom: 10px;
`;
export const SignUpTitle = styled.span`
  text-align: center;
  color: black;
`;

export const SnsIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`;
//naver

export const NaverWrapper = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #09ce20;
  border-radius: 5px;
  margin-bottom: 10px;
`;
export const NaverTitle = styled.span`
  color: #ffffff;
  text-align: center;
`;

// google
export const GoogleWrapper = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 30px;
  border: 1px solid #bdbdbd;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const BodyTitle = styled.div`
  color: #42c2ff;
  text-align: center;
  font-size: 1.188rem;
  margin-right: 5px;
  :hover {
    text-decoration: underline;
  }
`;
export const BodyIcon = styled.img`
  width: 16px;
  height: 16px;
  color: #42c2ff;
`;
