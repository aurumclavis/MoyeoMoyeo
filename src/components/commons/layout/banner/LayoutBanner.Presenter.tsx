import * as S from "./LayoutBanner.Styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <S.Wrapper>
        <Slider
          dots={settings.dots}
          infinite={settings.infinite}
          speed={settings.speed}
          slidesToShow={settings.slidesToShow}
          slidesToScroll={settings.slidesToScroll}
          autoplay={settings.autoplay}
          autoplaySpeed={settings.autoplaySpeed}
        >
          <S.SliderDiv>
            <S.SliderImg src="/배너이미지_동행1.png" />
          </S.SliderDiv>
          <S.SliderDiv>
            <S.SliderImg src="/배너이미지_동행2.png" />
          </S.SliderDiv>
          <S.SliderDiv>
            <S.SliderImg src="/배너이미지_상품1.png" />
          </S.SliderDiv>
          <S.SliderDiv>
            <S.SliderImg src="/배너이미지_상품2.png" />
          </S.SliderDiv>
          <S.SliderDiv>
            <S.SliderImg src="/배너이미지_행사1.png" />
          </S.SliderDiv>
          <S.SliderDiv>
            <S.SliderImg src="/배너이미지_행사2.png" />
          </S.SliderDiv>
        </Slider>
      </S.Wrapper>
    </>
  );
}
