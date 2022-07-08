import { useState } from "react";
import BoardListPresenter from "./BoardList.presenter";

export default function BoardListContainer() {
  const eventCategory = [
    "전체",
    "실외공연",
    "플리마켓",
    "뮤지컬",
    "미술전시",
    "행사",
    "실내공연",
    "기타",
    "기타",
    "기타",
  ];
  const data = [
    {
      recruited: true,
      title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
      remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
      eventName: "동탄고양이플리마켓",
      maxHeadCount: 2,
      accompanyDate: { start: "2022.07.10", end: "2022.07.10" },
      accompanied: false,
    },
    {
      recruited: false,
      title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
      remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
      eventName: "동탄고양이플리마켓",
      maxHeadCount: 2,
      accompanyDate: { start: "2022.07.10", end: "2022.07.10" },
      accompanied: false,
    },
    {
      recruited: false,
      title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
      remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
      eventName: "동탄고양이플리마켓",
      maxHeadCount: 2,
      accompanyDate: { start: "2022.07.10", end: "2022.07.10" },
      accompanied: true,
    },
  ];
  const [selectTotal, setSelectTotal] = useState(true);
  const [selectRecruit, setSelectRecruit] = useState(false);
  const [selectAccompany, setSelectAccompany] = useState(false);
  const onClickViewTotal = () => {
    setSelectTotal(true);
    setSelectRecruit(false);
    setSelectAccompany(false);
  };
  const onClickViewRecruitment = () => {
    setSelectTotal(false);
    setSelectRecruit(true);
    setSelectAccompany(false);
  };
  const onClickViewAccompany = () => {
    setSelectTotal(false);
    setSelectRecruit(false);
    setSelectAccompany(true);
  };

  return (
    <BoardListPresenter
      eventCategory={eventCategory}
      selectTotal={selectTotal}
      selectRecruit={selectRecruit}
      selectAccompany={selectAccompany}
      onClickViewTotal={onClickViewTotal}
      onClickViewRecruitment={onClickViewRecruitment}
      onClickViewAccompany={onClickViewAccompany}
      data={data}
    />
  );
}
