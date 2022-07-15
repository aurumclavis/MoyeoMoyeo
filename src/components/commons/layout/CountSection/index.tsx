import React from "react";
import useScrollCount from "../../hooks/useScrollCount";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fcefa6;
  position: relative;
  margin-bottom: 30px;
`;
const MainTitle = styled.h1`
  margin-bottom: 30px;
`;
const List = styled.div`
  width: 100%;
  background-color: #fcefa6;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
const ListItem = styled.div`
  width: 351px;
  padding: 0 2rem;
  text-align: center;
  border-radius: 10px;
  background-color: #ffffff;
`;
const Number = styled.span`
  font-size: 3rem;
  font-weight: 700;
  color: #15133c;
  /* margin-bottom: 1rem; */
`;
const Unit = styled.span`
  font-size: 3rem;
  margin-bottom: 1rem;

  color: #15133c;
`;
const Title = styled.h3`
  margin: 0px;
  margin-top: 1rem;
`;
const Description = styled.p``;

const FIGURE_ITEMS = [
  {
    title: "등록된 행사",
    number: 630,
    unit: "+",
    description: "취향저격 행사들! 다 준비했어요!",
  },
  {
    title: "행사 참여 회원",
    number: 1240,
    unit: "+",
    description: "다같이 모여?모여!",
  },
  {
    title: "행사참여 후 굿즈구매율",
    number: 92,
    unit: "%",
    description: "추억템,커플템 인기가 쑥쑥! ",
  },
];

const CountSection = () => {
  const countItem = {
    0: useScrollCount(620),
    1: useScrollCount(800),
    2: useScrollCount(92),
  };

  return (
    // <Background>
    <Wrapper>
      <MainTitle>Welcome To 모여?모여!</MainTitle>
      <List>
        {FIGURE_ITEMS.map((item, index) => (
          <ListItem key={item.title}>
            <Title>{item.title}</Title>
            <Number {...countItem[index]}>0</Number>
            <Unit>{item.unit}</Unit>
            <Description>{item.description}</Description>
          </ListItem>
        ))}
      </List>
    </Wrapper>
    // </Background>
  );
};

export default CountSection;