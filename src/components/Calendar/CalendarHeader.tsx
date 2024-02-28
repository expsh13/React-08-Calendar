type PropsType = {
  currentDate: Date;
  onMonthChange: (currentDate: Date) => void;
};

export const CalendarHeader = (props: PropsType) => {
  const { currentDate, onMonthChange } = props;

  const handleAddMonth = () => {
    const newMonth = new Date(currentDate);
    newMonth.setMonth(currentDate.getMonth() + 1);
    onMonthChange(newMonth);
  };
  const handleSubtractMonth = () => {
    const newMonth = new Date(currentDate);
    newMonth.setMonth(currentDate.getMonth() - 1);
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
        {currentDate.getFullYear()}年{currentDate.getMonth() + 1}月
      </p>
    </div>
  );
};
