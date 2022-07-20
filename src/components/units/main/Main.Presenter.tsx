import * as S from "./Main.Styles";
import FAQ from "./mainSection/questionSection/FAQ";
import BoardSection from "./mainSection/boardSection";
import ProductSection from "./mainSection/productSection";
import EventSection from "./mainSection/eventSection";

import InfoSection from "./mainSection/infoSection";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";
import MapBoxComponent from "../../commons/mapboxTest";

export default function MainPageUI() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      {/* <MapBoxComponent /> */}
      <EventSection onClickMoveToPage={onClickMoveToPage} />
      <BoardSection onClickMoveToPage={onClickMoveToPage} />
      <ProductSection onClickMoveToPage={onClickMoveToPage} />
      <InfoSection />
      <FAQ />
    </S.Wrapper>
  );
}
