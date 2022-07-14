import { useEffect, useRef, useState } from "react";
import BoardListPresenter from "./BoardList.presenter";
import { useRouter } from "next/router";
import _ from "lodash";
import { useQuery } from "@apollo/client";
import {
  changeFromToMonthly,
  changeFromToWeekly,
  defaultFromToWeekly,
  MonthlyMoveNext,
  MonthlyMovePrev,
  weeklyMoveNext,
  weeklyMovePrev,
} from "./dateFromTo";
import { getDate } from "../../../commons/getDate";

export default function BoardListContainer() {
  const router = useRouter();
  // const { data: RawData, fetchMore } = useQuery({});
  const [rawData] = useState([
    {
      recruited: true,
      title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
      remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
      eventName: "동탄고양이플리마켓",
      maxHeadCount: 2,
      accompanyDate: { start: "2022-07-10", end: "2022-07-10" },
      requested: false,
      category: "실외공연",
    },
    {
      recruited: false,
      title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
      remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
      eventName: "동탄고양이플리마켓",
      maxHeadCount: 2,
      accompanyDate: { start: "2022-07-17", end: "2022-07-19" },
      requested: false,
      category: "플리마켓",
    },
    {
      recruited: false,
      title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
      remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
      eventName: "동탄고양이플리마켓",
      maxHeadCount: 2,
      accompanyDate: { start: "2022-07-20", end: "2022-07-20" },
      requested: true,
      category: "뮤지컬",
    },
    {
      recruited: true,
      title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
      remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
      eventName: "동탄고양이플리마켓",
      maxHeadCount: 2,
      accompanyDate: { start: "2022-08-30", end: "2022-08-30" },
      requested: false,
      category: "미술전시",
    },
    {
      recruited: false,
      title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
      remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
      eventName: "동탄고양이플리마켓",
      maxHeadCount: 2,
      accompanyDate: { start: "2022-08-10", end: "2022-08-10" },
      requested: false,
      category: "굿즈행사",
    },
    {
      recruited: false,
      title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
      remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
      eventName: "동탄고양이플리마켓",
      maxHeadCount: 2,
      accompanyDate: { start: "2022-07-28", end: "2022-07-28" },
      requested: true,
      category: "굿즈행사",
    },
    {
      recruited: true,
      title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
      remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
      eventName: "동탄고양이플리마켓",
      maxHeadCount: 2,
      accompanyDate: { start: "2022-08-02", end: "2022-08-02" },
      requested: false,
      category: "실외공연",
    },
    {
      recruited: false,
      title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
      remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
      eventName: "동탄고양이플리마켓",
      maxHeadCount: 2,
      accompanyDate: { start: "2022-09-01", end: "2022-09-02" },
      requested: false,
      category: "실내공연",
    },
    {
      recruited: false,
      title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
      remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
      eventName: "동탄고양이플리마켓",
      maxHeadCount: 2,
      accompanyDate: { start: "2022-08-01", end: "2022-08-01" },
      requested: true,
      category: "마당놀이",
    },
    {
      recruited: true,
      title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
      remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
      eventName: "동탄고양이플리마켓",
      maxHeadCount: 2,
      accompanyDate: { start: "2022-09-10", end: "2022-09-10" },
      requested: false,
      category: "기타",
    },
    {
      recruited: false,
      title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
      remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
      eventName: "동탄고양이플리마켓",
      maxHeadCount: 2,
      accompanyDate: { start: "2022-10-08", end: "2022-10-10" },
      requested: false,
      category: "미술전시",
    },
    {
      recruited: false,
      title: "주말에 플리마켓에서 물건 구경하고 산책하실 분",
      remark: "고양이 플리마켓 가서 구경도 하고 고양이도 인사해요",
      eventName: "동탄고양이플리마켓",
      maxHeadCount: 2,
      accompanyDate: { start: "2022-07-31", end: "2022-07-31" },
      requested: true,
      category: "실외공연",
    },
  ]);

  // 동행일 오름차순(리스트 페이지의 기본설정)으로 정렬을 위한 깊은복사
  const sortedRawData = _.cloneDeep(rawData).sort((a, b) => {
    return Number(a.accompanyDate.start.replaceAll("-", "")) <
      Number(b.accompanyDate.start.replaceAll("-", ""))
      ? -1
      : 1;
  });

  // 날짜선택 부분
  const [isWeekly, setIsWeekly] = useState(true);
  const [fromToDate, setFromToDate] = useState({
    ...defaultFromToWeekly(getDate(new Date())),
  });
  const onClickWeeklyMonthly = () => {
    isWeekly
      ? setFromToDate(changeFromToMonthly(fromToDate.from))
      : setFromToDate(changeFromToWeekly(fromToDate.from));
    setIsWeekly((prev) => !prev);
  };
  const onClickArrowLeft = () => {
    isWeekly
      ? setFromToDate(weeklyMovePrev(fromToDate.from, fromToDate.to))
      : setFromToDate(MonthlyMovePrev(fromToDate.from));
  };
  const onClickArrowRight = () => {
    isWeekly
      ? setFromToDate(weeklyMoveNext(fromToDate.from, fromToDate.to))
      : setFromToDate(MonthlyMoveNext(fromToDate.from));
  };

  // 날짜필터링된 raw데이터 추출
  const [sortedData, setSortedData] = useState(sortedRawData);

  // 단계별 검색필터 부분
  const [viewTypeData, setViewTypeData] = useState(sortedData);
  const [categoryData, setCategoryData] = useState(viewTypeData);
  useEffect(() => {
    setCategoryData(viewTypeData);
  }, [viewTypeData]);
  const [data, setData] = useState(categoryData);
  useEffect(() => {
    setData(categoryData);
  }, [categoryData]);

  // 서브헤더 보기타입 부분
  const [selectAccompanyDate, setSelectAccompanyDate] = useState(true);
  const [selectLatest, setSelectLatest] = useState(false);
  const [selectRequested, setSelectRequested] = useState(false);
  const [isUseDateChanger, setIsUseDateChanger] = useState(true);
  const onClickViewAccompanyDate = () => {
    setSelectAccompanyDate(true);
    setSelectLatest(false);
    setSelectRequested(false);
    setIsUseDateChanger(true);
    setViewTypeData(sortedData);
  };
  const onClickViewLatest = () => {
    setSelectAccompanyDate(false);
    setSelectLatest(true);
    setSelectRequested(false);
    setIsUseDateChanger(false);
    setViewTypeData(rawData);
  };
  const onClickViewRequested = () => {
    setSelectAccompanyDate(false);
    setSelectLatest(false);
    setSelectRequested(true);
    setIsUseDateChanger(false);
    setViewTypeData(rawData.filter((el) => el.requested));
  };

  const onClickCreateBoard = () => {
    router.push("/boards/new");
  };

  // 서브헤더 스크롤 부분
  const subHeader = useRef(null);
  const [isSubHeaderOnTop, setIsSubHeaderOnTop] = useState(false);

  const subHeaderThrottle = _.throttle(() => {
    if (!subHeader.current) return;
    subHeader.current.getBoundingClientRect().top <= 0
      ? setIsSubHeaderOnTop(true)
      : setIsSubHeaderOnTop(false);
  }, 50);

  useEffect(() => {
    window.addEventListener("scroll", subHeaderThrottle);
    return () => {
      window.removeEventListener("scroll", () => subHeaderThrottle);
    };
  });

  // 행사카테고리 중복제거 부분
  const eventCategory = rawData
    .map((el) => el.category)
    .reduce((acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]), ["전체"]);

  // 게시글 상세로 이동
  const onClickGoDetail = (eventName: any) => () => {
    router.push(`/boards/${eventName}`);
  };

  // 리스트 무한스크롤 부분
  // const loadFunc = () => {
  //   if (!data) return;
  //   fetchMore({
  //     variables: {
  //       page: Math.ceil(data.fetchBoardComments.length / 10) + 1, // 현재페이지+다음페이지 구하는 공식
  //     },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       if (!fetchMoreResult.fetchBoardComments)
  //         return {
  //           fetchBoardComments: [...prev.fetchBoardComments],
  //         };
  //       return {
  //         fetchBoardComments: [
  //           ...prev.fetchBoardComments,
  //           ...fetchMoreResult.fetchBoardComments,
  //         ],
  //       };
  //     },
  //   });
  // };

  return (
    <BoardListPresenter
      eventCategory={eventCategory}
      isUseDateChanger={isUseDateChanger}
      selectAccompanyDate={selectAccompanyDate}
      selectLatest={selectLatest}
      selectRequested={selectRequested}
      onClickViewAccompanyDate={onClickViewAccompanyDate}
      onClickViewLatest={onClickViewLatest}
      onClickViewRequested={onClickViewRequested}
      data={data}
      setData={setData}
      viewTypeData={viewTypeData}
      setCategoryData={setCategoryData}
      fromToDate={fromToDate}
      onClickWeeklyMonthly={onClickWeeklyMonthly}
      isWeekly={isWeekly}
      onClickArrowLeft={onClickArrowLeft}
      onClickArrowRight={onClickArrowRight}
      onClickCreateBoard={onClickCreateBoard}
      subHeader={subHeader}
      isSubHeaderOnTop={isSubHeaderOnTop}
      onClickGoDetail={onClickGoDetail}
    />
  );
}
