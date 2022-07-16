import Slider from "react-slick";
import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import EachItem from "./CarouselItem";
import { v4 as uuidv4 } from "uuid";

const Wrapper = styled.div`
  width: 100%;
  .slick-next:before {
    opacity: 0.6;
    color: #15133c;
  }
  .slick-prev:before {
    opacity: 0;
  }
`;
const EachWrapper = styled.div``;

export default function UnevenSetsFinite(props: any) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToScroll: 3,
    slidesToShow: 7,
    responsive: [
      // 반응형
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };
  const [clickedIndex, setClickedIndex] = useState(0);
  const [categoryName, setCategoryName] = useState("");

  return (
    <Wrapper>
      <Slider {...settings}>
        {props.eventCategory.map((el: any, index: number) => (
          <EachWrapper key={uuidv4()}>
            <EachItem
              el={el}
              index={index}
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
              categoryName={categoryName}
              setCategoryName={setCategoryName}
              viewTypeData={props.viewTypeData}
              setCategoryData={props.setCategoryData}
            />
          </EachWrapper>
        ))}
      </Slider>
    </Wrapper>
  );
}
