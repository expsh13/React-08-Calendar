type PropsType = {
  currentDate: Date;
};

const weeks = ["日", "月", "火", "水", "木", "金", "土"];

const currentDateRange = (currentDate: Date): Date[] => {
  const currentMonthStartDate = new Date(currentDate); // 月の最初の日
  currentMonthStartDate.setDate(1);
  const currentMonthEndDate = new Date(currentDate); // 月の最終日
  currentMonthEndDate.setMonth(currentDate.getMonth() + 1);
  currentMonthEndDate.setDate(0);

  const currentMonthStartDay = currentMonthStartDate.getDay(); // 月の最初の日の曜日を取得
  const currentMonthEndDay = currentMonthEndDate.getDay(); // 月の最終日の曜日

  const lastMonthRangeLength =
    weeks.length - (weeks.length - currentMonthStartDay);
  const currentMonthRange = Math.floor(
    (currentMonthEndDate.getTime() - currentMonthStartDate.getTime()) /
      (1000 * 60 * 60 * 24)
  );
  const nextMonthRangeLength = weeks.length - currentMonthEndDay;
};

export const Calendar = (props: PropsType) => {
  const { currentDate } = props;

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
