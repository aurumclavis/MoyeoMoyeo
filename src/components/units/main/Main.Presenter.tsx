import * as S from "./Main.Styles";
import BoardSection from "./mainSection/boardSection/boardSection.Container";
import EventSection from "./mainSection/eventSection/eventSection.Container";
import InfoSection from "./mainSection/infoSection/inforSection.Container.";
import ProductSection from "./mainSection/productSection/productSection.Container";
import QuestionSection from "./mainSection/questionSection/question.Container";

export default function MainPageUI() {
  return (
    <S.Wrapper>
      <EventSection />
      <BoardSection />
      <ProductSection />
      <InfoSection />
      <QuestionSection />
    </S.Wrapper>
  );
}
