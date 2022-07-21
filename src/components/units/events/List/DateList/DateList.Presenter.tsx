import CalederListUIAdd from "./DateList.PresnterAdd";
import locale from "antd/lib/date-picker/locale/ko_KR";
import { getDate } from "../../../../commons/getDate";
import * as S from "./DateList.Styles";
// import { ICaCalenderPageUI } from "./DateList.Types";

export default function CalenderPageUI() {
  return (
    <>
      <S.Wrapper>
        <S.NavWrapper>
          <S.InsideWrapper>
            <S.NavTitle>행사 타입</S.NavTitle>
            <S.Select>
              <option>행사 정보</option>
              <option>추천 행사</option>
            </S.Select>
          </S.InsideWrapper>
          <S.InsideWrapper>
            <S.NavTitle>날짜 선택</S.NavTitle>
            <S.DatePick
              locale={locale}
              placeholder={getDate(new Date())}
            ></S.DatePick>
          </S.InsideWrapper>
        </S.NavWrapper>
        <CalederListUIAdd />
      </S.Wrapper>
    </>
  );
}
