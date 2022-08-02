import * as S from "./festivalList.Styles";
// import InfiniteScroll from "react-infinite-scroller";
import FestivalListUIAdd from "./FestivalList.PresenterAdd";
import { IFestivalListUI } from "./FestivalList.Types";
import { ChangeEvent, useState } from "react";
// import { getDate } from "../../../../commons/getDate";

export default function FestivalListUI(props: IFestivalListUI) {
  const [isSelect, setIsSelect] = useState("ListNow");
  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setIsSelect(event.target.value);
  };

  // const ListAfter = props.data?.fetchEvents.filter(
  //   (el: any) => getDate(el?.date.split("-")[1]) > getDate(new Date())
  // );
  // const ListBefore = props.data?.fetchEvents.filter(
  //   (el: any) => getDate(el?.date.split("-")[0]) < getDate(new Date())
  // );

  return (
    <>
      <S.InsideWrapper>
        <S.Wrapper>
          <S.Select onChange={onChangeSelect}>
            <option value="ListNow">전체 행사</option>
            <option value="ListAfter">예정된 행사</option>
            <option value="ListBefore">종료된 행사</option>
          </S.Select>
          {isSelect === "ListNow" &&
            props.data?.fetchEvents.map((el: any) => (
              <FestivalListUIAdd key={el._id} el={el} />
            ))}
          {/* {isSelect === "ListAfter" &&
            ListAfter?.map((el: any) => (
              <FestivalListUIAdd key={el._id} el={el} />
            ))}
          {isSelect === "ListBefore" &&
            ListBefore?.map((el: any) => (
              <FestivalListUIAdd key={el._id} el={el} />
            ))} */}
        </S.Wrapper>{" "}
      </S.InsideWrapper>
    </>
  );
}
