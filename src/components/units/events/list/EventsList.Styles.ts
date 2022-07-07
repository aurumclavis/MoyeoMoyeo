import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ListWrapper = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ListImg = styled.img`
  width: 250px;
  height: 250px;
  overflow: hidden;
`;

export const ContentsWrapper = styled.div`
  width: 750px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContentsTitleWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 20px;
`;
export const ContentsTitle = styled.div`
  font-style: Bold;
  font-size: 36px;
`;
export const ContentsPeriod = styled.div`
  font-size: 16px;
`;

export const MarkerDetailWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Marker = styled.div`
  width: 500px;
  font-size: 20px;
  overflow: hidden;
`;

export const Btn = styled.div`
  width: 155px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #85f4ff;
  border-radius: 20px;
`;
