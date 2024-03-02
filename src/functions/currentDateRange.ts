import { weeks } from "../utils/day";

export const currentDateRange = (currentDate: Date): Date[] => {
  const formattedCurrentDate = new Date(currentDate);
  formattedCurrentDate.setHours(0);
  formattedCurrentDate.setMinutes(0);
  formattedCurrentDate.setSeconds(0);
  formattedCurrentDate.setMilliseconds(0);

  const currentMonthStartDate = new Date(formattedCurrentDate); // 月の最初の日
  currentMonthStartDate.setDate(1);
  const currentMonthEndDate = new Date(formattedCurrentDate); // 月の最終日
  currentMonthEndDate.setMonth(formattedCurrentDate.getMonth() + 1);
  currentMonthEndDate.setDate(0);

  const currentMonthStartDay = currentMonthStartDate.getDay(); // 月の最初の日の曜日を取得
  const currentMonthEndDay = currentMonthEndDate.getDay(); // 月の最終日の曜日

  const lastMonthRange = weeks.length - (weeks.length - currentMonthStartDay);
  const nextMonthRange = weeks.length - (currentMonthEndDay + 1);

  const calendarStartDate = new Date(currentMonthStartDate);
  calendarStartDate.setDate(currentMonthStartDate.getDate() - lastMonthRange);

  const calendarEndDate = new Date(currentMonthEndDate);
  calendarEndDate.setDate(currentMonthEndDate.getDate() + nextMonthRange);

  const dateArray: Date[] = [calendarStartDate];

  while (dateArray.slice(-1)[0].getTime() < calendarEndDate.getTime()) {
    // console.log(dateArray.slice(-1)[0], calendarEndDate);
    const newDate = new Date(dateArray.slice(-1)[0]);
    newDate.setDate(dateArray.slice(-1)[0].getDate() + 1);
    dateArray.push(newDate);
  }

  return dateArray;
};
