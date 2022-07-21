import React from "react";
import useScrollCount from "../../hooks/useScrollCount";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fcefa6;
  position: relative;
  @media ${breakPoints.mobile} {
    display: flex;
    height: 200px;
  }
`;
const MainTitle = styled.h1`
  margin-bottom: 30px;
  @media ${breakPoints.mobile} {
    font-size: 1.25rem;
    margin-bottom: 15px;
  }
`;
const List = styled.div`
  width: 100%;
  background-color: #fcefa6;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media ${breakPoints.mobile} {
    display: flex;
    gap: 5px;
    padding: 0 0.313rem;
  }
`;
const ListItem = styled.div`
  width: 351px;
  padding: 0 2rem;
  text-align: center;
  border-radius: 10px;
  background-color: #ffffff;
  @media ${breakPoints.mobile} {
    width: 33%;
    height: 100px;
    padding: 0px;
  }
`;
const Number = styled.span`
  font-size: 3rem;
  font-weight: 700;
  color: #15133c;
  @media ${breakPoints.mobile} {
    font-size: 2rem;
  }
`;
const Unit = styled.span`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #15133c;
  @media ${breakPoints.mobile} {
    font-size: 2rem;
  }
`;
const Title = styled.h3`
  margin: 0px;
  margin-top: 1rem;
`;
const Description = styled.p`
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

const FIGURE_ITEMS = [
  {
    title: "등록된 행사",
    number: 630,
    unit: "+",
    description: "취향저격 행사들! 다 준비했어요!",
  },
  {
    title: "참여회원",
    number: 1240,
    unit: "+",
    description: "다같이 모여?모여!",
  },
  {
    title: "굿즈구매율",
    number: 92,
    unit: "%",
    description: "추억템,커플템 인기가 쑥쑥! ",
  },
];

const CountSection = () => {
  const countItem = {
    0: useScrollCount(62),
    1: useScrollCount(120),
    2: useScrollCount(92),
  };

  return (
    <Wrapper>
      <MainTitle>Welcome To 모여?모여!</MainTitle>
      <List>
        {FIGURE_ITEMS.map((item, index: any) => (
          <ListItem key={item.title}>
            <Title>{item.title}</Title>
            <Number {...countItem[index]}>0</Number>
            <Unit>{item.unit}</Unit>
            <Description>{item.description}</Description>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

export default CountSection;
