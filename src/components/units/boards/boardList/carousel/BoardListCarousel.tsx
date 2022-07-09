import Slider from "react-slick";
import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import EachItem from "./CarouselItem";
const EachWrapper = styled.div``;

export default function UnevenSetsFinite(props: any) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToScroll: 2,
    slidesToShow: 7,
  };
  const [clickedIndex, setClickedIndex] = useState(0);
  const [isTotal, setIsTotal] = useState("");

  return (
    <div>
      <Slider {...settings}>
        {props.eventCategory.map((el: any, index: number) => (
          <EachWrapper key={el}>
            <EachItem
              el={el}
              index={index}
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
              isTotal={isTotal}
              setIsTotal={setIsTotal}
              viewTypeData={props.viewTypeData}
              setCategoryData={props.setCategoryData}
            />
          </EachWrapper>
        ))}
      </Slider>
    </div>
  );
}
