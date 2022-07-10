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
      <MainTitle>자주하는 질문 ~~ </MainTitle>
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
    </OutWrapper>
  );
}

const OutWrapper = styled.div`
  width: 1005px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`;
const MainTitle = styled.h3`
  width: 100%;
  text-align: left;
  margin: 20px;
`;
const Wrapper = styled(Collapse)`
  width: 1005px;
  /* border: 1px solid #bdbdbd; */
  border-radius: 7px;
  border: none;
`;
const Title = styled(Panel)`
  width: 1003px;
  /* border: 1px solid #bdbdbd; */
  border-radius: 7px;
  background-color: #ffe69a;
`;
