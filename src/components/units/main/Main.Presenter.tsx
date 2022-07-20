import * as S from "./Main.Styles";
import FAQ from "./mainSection/questionSection/FAQ";
import BoardSection from "./mainSection/boardSection";
import ProductSection from "./mainSection/productSection";
import EventSection from "./mainSection/eventSection";

import InfoSection from "./mainSection/infoSection";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";

export default function MainPageUI() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      <EventSection onClickMoveToPage={onClickMoveToPage} />
      <BoardSection onClickMoveToPage={onClickMoveToPage} />
      <ProductSection onClickMoveToPage={onClickMoveToPage} />
      <InfoSection />
      <FAQ />
    </S.Wrapper>
  );
}
