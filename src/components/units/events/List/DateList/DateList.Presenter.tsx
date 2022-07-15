import CalederListUI from "./DateList.PresnterAdd";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import locale from "antd/lib/date-picker/locale/ko_KR";
import { getDate } from "../../../../commons/getDate";

import * as S from "./DateList.Styles";

export default function CalenderPageUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.NavWrapper>
          <S.InsideWrapper>
            <S.NavTitle>행사 타입</S.NavTitle>
            <S.Select>
              <option>공공행사</option>
              <option>추천행사</option>
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
        <CalederListUI isActive={props.isActive} />
      </S.Wrapper>
    </>
  );
}
