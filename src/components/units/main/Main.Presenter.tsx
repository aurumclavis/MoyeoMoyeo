import * as S from "./Main.Styles";
import FAQ from "./mainSection/questionSection/FAQ";
import BoardSection from "./mainSection/boardSection";
import ProductSection from "./mainSection/productSection";
import EventSection from "./mainSection/eventSection";
import CountSection from "./mainSection/CountSection";
import TopSection from "./mainSection/topSection";
import InfoSection from "./mainSection/infoSection";

export default function MainPageUI() {
  return (
    <S.Wrapper>
      {/* <TopSection /> */}
      <InfoSection />
      <CountSection />
      <ProductSection />
      <EventSection />
      <BoardSection />
      <FAQ />
    </S.Wrapper>
  );
}
