import Slider from "react-slick";
import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import EachItem from "./CarouselItem";
const Wrapper = styled.div``;
const EachWrapper = styled.div``;

export default function UnevenSetsFinite(props: any) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 2,
    slidesToShow: 6,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {props.eventCategory.map((el: any) => (
          <EachWrapper key={el}>
            <EachItem el={el} />
          </EachWrapper>
        ))}
      </Slider>
    </Wrapper>
  );
}
