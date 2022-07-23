import { useEffect, useRef, useState } from "react";
import BoardListPresenter from "./BoardList.presenter";
import { useRouter } from "next/router";
import { REQUEST_ACCOMPANY } from "./BoardList.queries";
import _ from "lodash";
import {
  defaultFromToMonthly,
  changeFromToWeekly,
  MonthlyMoveNext,
  MonthlyMovePrev,
  weeklyMoveNext,
  weeklyMovePrev,
} from "./dateFromTo";
import { getDate } from "../../../commons/getDate";
import { useMutation } from "@apollo/client";

export default function BoardListContainer(props: any) {
  const router = useRouter();

  // 디폴트날짜 구하기
  const [fromToDate, setFromToDate] = useState({
    ...defaultFromToMonthly(getDate(new Date())),
  });

  // 동행리스트 페이지의 기본설정인 동행일오름차순으로 정렬을 위한 깊은복사 + 날짜필터링으로 데이터 추출
  const sortedRawData = _.cloneDeep(props.rawData.fetchBoards).sort(
    (a: any, b: any) => {
      return Number(a.dateStart.replaceAll("-", "")) <
        Number(b.dateStart.replaceAll("-", ""))
        ? -1
        : 1;
    }
  );

  // 단계별(보기타입별, 날짜선택별, 카테고리별) 검색필터 부분
  // 날짜별 data추출 검색필터
  const [sortedData, setSortedData] = useState(
    sortedRawData.filter(
      (el: any) =>
        Number(fromToDate.from.replaceAll("-", "")) <=
          Number(el.dateStart.replaceAll("-", "")) &&
        Number(fromToDate.to.replaceAll("-", "")) >=
          Number(el.dateStart.replaceAll("-", ""))
    )
  );
  useEffect(() => {
    setSortedData(
      sortedRawData.filter(
        (el: any) =>
          Number(fromToDate.from.replaceAll("-", "")) <=
            Number(el.dateStart.replaceAll("-", "")) &&
          Number(fromToDate.to.replaceAll("-", "")) >=
            Number(el.dateStart.replaceAll("-", ""))
      )
    );
  }, [fromToDate]);

  // 보기타입별, 카테고리별, 모집여부별 data추출 검색필터
  const [viewTypeData, setViewTypeData] = useState(sortedData);
  const [categoryData, setCategoryData] = useState(viewTypeData);
  const [recruitData, setRecruitData] = useState(categoryData);
  useEffect(() => {
    setViewTypeData(sortedData);
  }, [sortedData]);
  // 선택된 카테고리의 상태를 유지하기 위해 아래서 퍼올리는 state
  const [selectedCategoryName, setSelectedCategoryName] = useState("");
  useEffect(() => {
    if (!selectedCategoryName || selectedCategoryName === "전체") {
      setCategoryData(viewTypeData);
    } else {
      setCategoryData(
        viewTypeData.filter(
          (el: any) => el.eventCategory === selectedCategoryName
        )
      );
    }
  }, [viewTypeData]);
  useEffect(() => {
    setRecruitData(categoryData);
  }, [categoryData]);
  const [data, setData] = useState(recruitData);
  useEffect(() => {
    setData(recruitData);
  }, [recruitData]);

  // 검색필터 클릭이벤트 부분
  // 서브헤더 이벤트 부분
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
    setViewTypeData(props.rawData.fetchBoards);
  };
  const onClickViewRequested = () => {
    setSelectAccompanyDate(false);
    setSelectLatest(false);
    setSelectRequested(true);
    setIsUseDateChanger(false);
    setViewTypeData(
      props.rawData.fetchBoards.filter(
        (el: any) =>
          props.userData?.fetchLoginUser.id ===
          el.accompanyRequests?.reqUser?.id
      )
    );
  };
  // 날짜선택기능 부분
  const [isWeekly, setIsWeekly] = useState(false);

  const onClickWeeklyMonthly = () => {
    isWeekly
      ? setFromToDate(defaultFromToMonthly(fromToDate.from))
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
  // 모집중선택기능 부분
  const [selectViewRecruit, setSelectViewRecruit] = useState(false);
  const onClickViewRecruit = () => {
    selectViewRecruit
      ? setRecruitData(categoryData)
      : setRecruitData(categoryData.filter((el: any) => !el.isFull));
    setSelectViewRecruit((prev) => !prev);
  };

  const onClickCreateBoard = () => {
    router.push("/boards/new/general");
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
  const eventCategory = props.rawData.fetchBoards
    .map((el: any) => el.eventCategory)
    .reduce(
      (acc: any, cur: any) => (acc.includes(cur) ? acc : [...acc, cur]),
      ["전체"]
    );

  // 게시글 상세로 이동
  const onClickGoDetail = (boardId: any) => () => {
    router.push(`/boards/${boardId}`);
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

  // 동행요청하기 버튼 부분
  const [requestAccompany] = useMutation(REQUEST_ACCOMPANY);
  const onClickRequestAccompany = (boardId: string) => async () => {
    await requestAccompany({ variables: { boardId } });
  };
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
      onClickViewRecruit={onClickViewRecruit}
      selectViewRecruit={selectViewRecruit}
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
      userData={props.userData}
      selectedCategoryName={selectedCategoryName}
      setSelectedCategoryName={setSelectedCategoryName}
      onClickRequestAccompany={onClickRequestAccompany}
    />
  );
}
