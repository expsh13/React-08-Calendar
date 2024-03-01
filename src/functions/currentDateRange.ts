const weeks = ["日", "月", "火", "水", "木", "金", "土"];

export const currentDateRange = (currentDate: Date): Date[] => {
  const currentMonthStartDate = new Date(currentDate); // 月の最初の日
  currentMonthStartDate.setDate(1);
  const currentMonthEndDate = new Date(currentDate); // 月の最終日
  currentMonthEndDate.setMonth(currentDate.getMonth() + 1);
  currentMonthEndDate.setDate(0);

  const currentMonthStartDay = currentMonthStartDate.getDay(); // 月の最初の日の曜日を取得
  const currentMonthEndDay = currentMonthEndDate.getDay(); // 月の最終日の曜日

  const lastMonthRange = weeks.length - (weeks.length - currentMonthStartDay);
  const currentMonthRange = Math.floor(
    (currentMonthEndDate.getTime() - currentMonthStartDate.getTime()) /
      (1000 * 60 * 60 * 24)
  );
  const nextMonthRange = weeks.length - currentMonthEndDay;
  const dateArray: Date[] = [];
  for (let i = 1; i < lastMonthRange + 1; i++) {
    const newDate = new Date(currentMonthStartDate);
    newDate.setDate(newDate.getDate() - (lastMonthRange - i));
    dateArray.push();
  }
};
