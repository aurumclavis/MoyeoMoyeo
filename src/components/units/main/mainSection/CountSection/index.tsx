import React from "react";
import useScrollCount from "../../../../commons/hooks/useScrollCount";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  /* background-color: #03ec0f; */
  background-color: #fcefa6;
`;
const List = styled.div`
  width: 100%;
  background-color: #fcefa6;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const ListItem = styled.div`
  width: 30%;
  padding: 0 2rem;
  text-align: center;
  border-radius: 10px;
  background-color: #ffffff;
`;
const Number = styled.span`
  font-size: 3rem;
  margin-bottom: 1rem;
`;
const Unit = styled.span`
  font-size: 3rem;
  margin-bottom: 1rem;
`;
const Title = styled.h3`
  margin: 1rem 0;
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
    unit: "",
    description: "다같이 모여?모여!",
  },
  {
    title: "행사참여 후 굿즈구매율",
    number: 92,
    unit: "%",
    description: "누구나 좋아하는 추억템,커플템 인기가 쑥쑥! ",
  },
];

const CountSection = () => {
  const countItem = {
    0: useScrollCount(620),
    1: useScrollCount(1240),
    2: useScrollCount(92),
  };

  return (
    // <Background>
    <Wrapper>
      <List>
        {FIGURE_ITEMS.map((item, index) => (
          <ListItem key={item.title}>
            <Number {...countItem[index]}>0</Number>
            <Unit>{item.unit}</Unit>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
          </ListItem>
        ))}
      </List>
    </Wrapper>
    // </Background>
  );
};

export default CountSection;
