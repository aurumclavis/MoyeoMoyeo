import { Collapse } from "antd";
import React from "react";
import styled from "@emotion/styled";

const { Panel } = Collapse;
const text = `
      이것은 임의로 답변하는 답변창입니다. 추후에 추가데이터를 넣을 예정입니다.
    `;
export default function FAQ() {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <OutWrapper>
      <InnerWrapper>
        <TitleWrapper>
          <MainTitle># 자주하는 질문 </MainTitle>
          <TitleImage src="icon/done.png" />
        </TitleWrapper>
        <Wrapper defaultActiveKey={["1"]} onChange={onChange}>
          <Title header="자주하는 질문1 " key="1">
            <p>{text}</p>
          </Title>
          <Title header="자주하는 질문2" key="2">
            <p>{text}</p>
          </Title>
          <Title header="자주하는 질문3" key="3">
            <p>{text}</p>
          </Title>
        </Wrapper>
      </InnerWrapper>
      <InnerWrapper>
        <MainTitle># 자주하는 질문(관계자)</MainTitle>
        <Wrapper defaultActiveKey={["1"]} onChange={onChange}>
          <Titles header="자주하는 질문1 " key="1">
            <p>{text}</p>
          </Titles>
          <Titles header="자주하는 질문2" key="2">
            <p>{text}</p>
          </Titles>
          <Titles header="자주하는 질문3" key="3">
            <p>{text}</p>
          </Titles>
        </Wrapper>
      </InnerWrapper>
    </OutWrapper>
  );
}

const OutWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 50px; */
`;
const InnerWrapper = styled.div`
  width: 50%;
  height: 450px;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const MainTitle = styled.h2`
  /* width: 100%; */
  text-align: left;
  margin-bottom: 20px;
  position: relative;
`;
const TitleImage = styled.img`
  width: 34px;
  height: 34px;
`;
const Wrapper = styled(Collapse)`
  width: 100%;
  /* border: 1px solid #bdbdbd; */
  border-radius: 7px;
  border: none;
`;
const Title = styled(Panel)`
  width: 100%;
  /* border: 1px solid #bdbdbd; */
  border-radius: 7px;
  background-color: #ffe69a;
`;
const Titles = styled(Panel)`
  width: 100%;
  /* border: 1px solid #bdbdbd; */
  border-radius: 7px;
  background-color: lavender;
  color: white;
`;
