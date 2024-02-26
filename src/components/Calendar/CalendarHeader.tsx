type PropsType = {
  month: Date;
  onMonthChange: (month: Date) => void;
};

export const CalendarHeader = (props: PropsType) => {
  const { month, onMonthChange } = props;

  const handleAddMonth = () => {
    const newMonth = new Date(month);
    newMonth.setMonth(month.getMonth() + 1);
    onMonthChange(newMonth);
  };
  const handleSubtractMonth = () => {
    const newMonth = new Date(month);
    newMonth.setMonth(month.getMonth() - 1);
    onMonthChange(newMonth);
  };

  return (
    <div className="flex gap-6 items-center mt-3 mb-3">
      <h1 className="text-2xl font-bold">カレンダー</h1>
      <button
        className="border p-1 border-gray-400 bg-white rounded"
        onClick={() => onMonthChange(new Date())}
      >
        今日
      </button>
      <div className="flex gap-1">
        <button className="hover:cursor-pointer" onClick={handleSubtractMonth}>
          ＜
        </button>
        <button className="hover:cursor-pointer" onClick={handleAddMonth}>
          ＞
        </button>
      </div>
      <p>
        {month.getFullYear()}年{month.getMonth() + 1}月
      </p>
    </div>
  );
};
