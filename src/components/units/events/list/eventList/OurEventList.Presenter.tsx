import * as S from "./OurEventList.Styles";
import InfiniteScroll from "react-infinite-scroller";

import { IOurEventListUI } from "./OurEventList.Types";
import OurEventListUIAdd from "./OurEventList.PresenterAdd";
import { ChangeEvent, useState } from "react";

import { getDate } from "../../../../commons/getDate";
export default function OurEventListUI(props: IOurEventListUI) {
  const [isSelect, setIsSelect] = useState("ListNow");
  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setIsSelect(event.target.value);
  };

  const ListAfter = props.data?.fetchPosts.filter(
    (el: any) => getDate(el?.dateStart) > getDate(new Date())
  );
  const ListBefore = props.data?.fetchPosts.filter(
    (el: any) => getDate(el.dateEnd) < getDate(new Date())
  );

  return (
    <>
      <S.Wrapper>
        <S.Select onChange={onChangeSelect}>
          <option value="ListNow">전체 행사</option>
          <option value="ListAfter">예정된 행사</option>
          <option value="ListBefore">종료된 행사</option>
        </S.Select>

        <InfiniteScroll
          pageStart={0}
          loadMore={props.ToloadFunc}
          hasMore={true}
          useWindow={true}
        >
          <S.InsideWrapper>
            {isSelect === "ListNow" &&
              props.data?.fetchPosts?.map((el: any) => (
                <OurEventListUIAdd key={el.id} el={el} />
              ))}
            {isSelect === "ListAfter" &&
              ListAfter?.map((el: any) => (
                <OurEventListUIAdd key={el.id} el={el} />
              ))}
            {isSelect === "ListBefore" &&
              ListBefore?.map((el: any) => (
                <OurEventListUIAdd key={el.id} el={el} />
              ))}
          </S.InsideWrapper>
        </InfiniteScroll>
      </S.Wrapper>
    </>
  );
}
