import * as S from "./Main.Styles";
import FAQ from "../../commons/mainSection/questionSection/FAQ";
import BoardSession from "../../commons/mainSection/boardSection";
import ProductSection from "../../commons/mainSection/productSection";
import EventSection from "../../commons/mainSection/eventSection";

export default function MainPageUI() {
  return (
    <S.Wrapper>
      <EventSection />
      <BoardSession />
      <ProductSection />
      <FAQ />
    </S.Wrapper>
  );
}
