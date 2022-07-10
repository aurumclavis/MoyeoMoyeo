import FAQ from "../../commons/\bquestion/FAQ";
import BoardCarousel from "../../commons/carousel/boardCarousel";
import EventCarousel from "../../commons/carousel/eventCarousel";
import ProductCarousel from "../../commons/carousel/productCarousel";
import * as S from "./Main.Styles";

export default function MainPageUI() {
  return (
    <S.Wrapper>
      <EventCarousel />
      <BoardCarousel />
      <ProductCarousel />
      <FAQ />
    </S.Wrapper>
  );
}
