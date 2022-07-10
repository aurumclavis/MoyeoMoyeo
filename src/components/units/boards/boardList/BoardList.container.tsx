import { useEffect, useMemo, useRef, useState } from "react";
import BoardListPresenter from "./BoardList.presenter";
import { useRouter } from "next/router";
import _ from "lodash";

export default function BoardListContainer() {
  const router = useRouter();
  const [rawData] = useState([
    // {
    //   recruited: true,
    //   title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
    //   remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
    //   eventName: "동탄고양이플리마켓",
    //   maxHeadCount: 2,
    //   accompanyDate: { start: "2022.07.10", end: "2022.07.10" },
    //   accompanied: false,
    //   category: "실외공연",
    // },
    // {
    //   recruited: false,
    //   title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
    //   remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
    //   eventName: "동탄고양이플리마켓",
    //   maxHeadCount: 2,
    //   accompanyDate: { start: "2022.07.10", end: "2022.07.10" },
    //   accompanied: false,
    //   category: "플리마켓",
    // },
    // {
    //   recruited: false,
    //   title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
    //   remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
    //   eventName: "동탄고양이플리마켓",
    //   maxHeadCount: 2,
    //   accompanyDate: { start: "2022.07.10", end: "2022.07.10" },
    //   accompanied: true,
    //   category: "뮤지컬",
    // },
    // {
    //   recruited: true,
    //   title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
    //   remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
    //   eventName: "동탄고양이플리마켓",
    //   maxHeadCount: 2,
    //   accompanyDate: { start: "2022.07.10", end: "2022.07.10" },
    //   accompanied: false,
    //   category: "미술전시",
    // },
    // {
    //   recruited: false,
    //   title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
    //   remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
    //   eventName: "동탄고양이플리마켓",
    //   maxHeadCount: 2,
    //   accompanyDate: { start: "2022.07.10", end: "2022.07.10" },
    //   accompanied: false,
    //   category: "굿즈행사",
    // },
    // {
    //   recruited: false,
    //   title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
    //   remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
    //   eventName: "동탄고양이플리마켓",
    //   maxHeadCount: 2,
    //   accompanyDate: { start: "2022.07.10", end: "2022.07.10" },
    //   accompanied: true,
    //   category: "굿즈행사",
    // },
    {
      recruited: true,
      title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
      remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
      eventName: "동탄고양이플리마켓",
      maxHeadCount: 2,
      accompanyDate: { start: "2022.07.10", end: "2022.07.10" },
      accompanied: false,
      category: "실외공연",
    },
    {
      recruited: false,
      title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
      remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
      eventName: "동탄고양이플리마켓",
      maxHeadCount: 2,
      accompanyDate: { start: "2022.07.10", end: "2022.07.10" },
      accompanied: false,
      category: "실내공연",
    },
    {
      recruited: false,
      title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
      remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
      eventName: "동탄고양이플리마켓",
      maxHeadCount: 2,
      accompanyDate: { start: "2022.07.10", end: "2022.07.10" },
      accompanied: true,
      category: "마당놀이",
    },
    {
      recruited: true,
      title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
      remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
      eventName: "동탄고양이플리마켓",
      maxHeadCount: 2,
      accompanyDate: { start: "2022.07.10", end: "2022.07.10" },
      accompanied: false,
      category: "기타",
    },
    {
      recruited: false,
      title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
      remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
      eventName: "동탄고양이플리마켓",
      maxHeadCount: 2,
      accompanyDate: { start: "2022.07.10", end: "2022.07.10" },
      accompanied: false,
      category: "미술전시",
    },
    {
      recruited: false,
      title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
      remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
      eventName: "동탄고양이플리마켓",
      maxHeadCount: 2,
      accompanyDate: { start: "2022.07.10", end: "2022.07.10" },
      accompanied: true,
      category: "실외공연",
    },
  ]);
  // 단계별 검색필터 부분
  const [viewTypeData, setViewTypeData] = useState(_.cloneDeep(rawData));
  const [categoryData, setCategoryData] = useState(_.cloneDeep(viewTypeData));
  useEffect(() => {
    setCategoryData(_.cloneDeep(viewTypeData));
  }, [viewTypeData]);
  const [data, setData] = useState(_.cloneDeep(categoryData));
  useEffect(() => {
    setData(_.cloneDeep(categoryData));
  }, [categoryData]);

  // 서브헤더 보기타입 부분
  const [selectTotal, setSelectTotal] = useState(true);
  const [selectRecruit, setSelectRecruit] = useState(false);
  const [selectAccompany, setSelectAccompany] = useState(false);
  const onClickViewTotal = () => {
    setSelectTotal(true);
    setSelectRecruit(false);
    setSelectAccompany(false);
    setViewTypeData([...rawData]);
  };
  const onClickViewRecruitment = () => {
    setSelectTotal(false);
    setSelectRecruit(true);
    setSelectAccompany(false);
    setViewTypeData([...rawData.filter((el) => !el.recruited)]);
  };
  const onClickViewAccompany = () => {
    setSelectTotal(false);
    setSelectRecruit(false);
    setSelectAccompany(true);
  };
  const onClickCreateBoard = () => {
    router.push("/boards/new");
  };
  const [isWeekly, setIsWeekly] = useState(false);
  const onClickWeeklyMonthly = () => {
    setIsWeekly((prev) => !prev);
  };

  // 서브헤더 스크롤 부분
  const subHeader = useRef(null);
  const myThrottle = _.throttle(() => {
    if (!subHeader.current) return;
    subHeader.current.getBoundingClientRect().top <= 0
      ? setIsSubHeaderOnTop(true)
      : setIsSubHeaderOnTop(false);
    console.log("aaa");
  }, 50);
  const [isSubHeaderOnTop, setIsSubHeaderOnTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", myThrottle);
    return () => {
      window.removeEventListener("scroll", () => myThrottle);
    };
  });

  // 행사카테고리 부분
  const eventCategory = rawData
    .map((el) => el.category)
    .reduce((acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]), ["전체"]);

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
      setData={setData}
      viewTypeData={viewTypeData}
      setCategoryData={setCategoryData}
      onClickWeeklyMonthly={onClickWeeklyMonthly}
      isWeekly={isWeekly}
      onClickCreateBoard={onClickCreateBoard}
      subHeader={subHeader}
      isSubHeaderOnTop={isSubHeaderOnTop}
    />
  );
}
