import moment from "moment";

// 월 단위 이동으로 변경할 때 from주가 포함된 월을 기준으로 세팅하는 함수
// 오늘이 속한 달의 시작과 끝 날짜를 객체로 리턴
export const defaultFromToMonthly = (currentFrom) => {
  const monthlyFrom = moment(currentFrom).startOf("month").format("YYYY-MM-DD");
  const monthlyTo = moment(currentFrom).endOf("month").format("YYYY-MM-DD");
  const result = { from: monthlyFrom, to: monthlyTo };
  return result;
};

// 월 단위로 이동할 때 지난 달, 다음 달 구하는 함수
export const MonthlyMovePrev = (currentFrom) => {
  const prevFrom = moment(currentFrom)
    .clone()
    .subtract(1, "month")
    .startOf("month")
    .format("YYYY-MM-DD");
  const prevTo = moment(currentFrom)
    .clone()
    .subtract(1, "month")
    .endOf("month")
    .format("YYYY-MM-DD");
  const result = {
    from: prevFrom,
    to: prevTo,
  };
  return result;
};
export const MonthlyMoveNext = (currentFrom) => {
  const nextFrom = moment(currentFrom)
    .clone()
    .add(1, "month")
    .startOf("month")
    .format("YYYY-MM-DD");
  const nextTo = moment(currentFrom)
    .clone()
    .add(1, "month")
    .endOf("month")
    .format("YYYY-MM-DD");
  const result = {
    from: nextFrom,
    to: nextTo,
  };
  return result;
};

// 주 단위로 이동할 때 지난 주, 다음 주 구하는 함수
export const weeklyMovePrev = (currentFrom, currentTo) => {
  const prevFrom = moment(currentFrom)
    .clone()
    .subtract(7, "days")
    .format("YYYY-MM-DD");
  const prevTo = moment(currentTo)
    .clone()
    .subtract(7, "days")
    .format("YYYY-MM-DD");
  const result = {
    from: prevFrom,
    to: prevTo,
  };
  return result;
};
export const weeklyMoveNext = (currentFrom, currentTo) => {
  const nextFrom = moment(currentFrom)
    .clone()
    .add(7, "days")
    .format("YYYY-MM-DD");
  const nextTo = moment(currentTo).clone().add(7, "days").format("YYYY-MM-DD");
  const result = {
    from: nextFrom,
    to: nextTo,
  };
  return result;
};

// 주 단위 이동으로 변경했을 때 함수
export const changeFromToWeekly = (currentFrom) => {
  const from = moment(currentFrom).startOf("week").format("YYYY-MM-DD");
  const to = moment(currentFrom).endOf("week").format("YYYY-MM-DD");
  const result = { from: from, to: to };
  return result;
};
