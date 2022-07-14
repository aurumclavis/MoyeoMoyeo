import { Calendar } from "antd";
import * as S from "./Calender.Styles";
export default function CalenderPage(props) {
  return (
    <>
      <S.Wrapper>
        <S.CalenderWrapper>
          <S.CalenderText>date</S.CalenderText>
          <Calendar fullscreen={false} />
          {/*  onSelect={props.setPickDate}  확인 필요 */}
        </S.CalenderWrapper>
        <S.ListWrapper isActive={props.isActive}>
          <S.List isActive={props.isActive}>
            <S.ListImg isActive={props.isActive} src="/배너이미지_동행1.png" />
            <S.Title>축제이름 </S.Title>
          </S.List>
          <S.List isActive={props.isActive}>
            <S.ListImg isActive={props.isActive} src="/배너이미지_동행1.png" />
            <S.Title>축제이름</S.Title>
          </S.List>
          <S.List isActive={props.isActive}>
            <S.ListImg isActive={props.isActive} src="/배너이미지_동행1.png" />
            <S.Title>축제이름 </S.Title>
          </S.List>
        </S.ListWrapper>
      </S.Wrapper>
    </>
  );
}
