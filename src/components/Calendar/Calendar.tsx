type PropsType = {
  currentDate: Date;
};

const weeks = ["日", "月", "火", "水", "木", "金", "土"];

export const Calendar = (props: PropsType) => {
  const { currentDate } = props;
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const currentMonthStartDate = new Date(currentYear, currentMonth - 1, 1); // 月の最初の日
  const currentMonthEndDate = new Date(currentYear, currentMonth, 0); // 月の最終日

  const startDay = currentMonthStartDate.getDay(); // 月の最初の日の曜日を取得
  const endDay = currentMonthEndDate.getDay(); // 月の最終日の曜日
  // const lastMonthendEndDate = new Date(
  //   currentYear,
  //   currentMonth - 1,
  //   0
  // ).getDate(); // 前月の最終日

  const lastMonthRange = weeks.length - (weeks.length - startDay);
  const currentMonthRange = currentMonthEndDate - currentMonthStartDate;
  const nextMonthRange = weeks.length - endDay;

  return (
    <div className="flex flex-wrap">
      {}
      <div className="w-32 h-32 border">
        <p className="text-center text-red-600">日</p>
        <p className="text-center text-gray-500">31</p>
      </div>
      <div className="w-32 h-32 border">
        <p className="text-center">月</p>
        <p className="text-center">2</p>
      </div>
      <div className="w-32 h-32 border">
        <p className="text-center">火</p>
        <p className="text-center">3</p>
      </div>
      <div className="w-32 h-32 border">
        <p className="text-center">水</p>
        <p className="text-center">4</p>
      </div>
      <div className="w-32 h-32 border">
        <p className="text-center">木</p>
        <p className="text-center">5</p>
      </div>
      <div className="w-32 h-32 border">
        <p className="text-center">金</p>
        <p className="text-center">6</p>
      </div>
      <div className="w-32 h-32 border">
        <p className="text-center text-blue-500">土</p>
        <p className="text-center">7</p>
      </div>
    </div>
  );
};
