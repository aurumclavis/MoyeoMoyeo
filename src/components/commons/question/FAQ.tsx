import { Collapse } from "antd";
import React from "react";
import styled from "@emotion/styled";

const { Panel } = Collapse;
const text = `
      질문에 대한 답변은 어쩌고 저쩌고 일단 나도 몰라요 이것만 하면 진짜 집간다 간다간다 집간다
    `;
export default function FAQ() {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <OutWrapper>
      <InnerWrapper>
        <MainTitle>자주하는 질문 일반회원 </MainTitle>
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
        <MainTitle>자주하는 질문 관계자회원</MainTitle>
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
`;
const InnerWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;
const MainTitle = styled.h3`
  width: 100%;
  text-align: left;
  margin: 20px;
  position: relative;
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
