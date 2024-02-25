type PropsType = {
  month: Date;
  onMonthChange: (month: Date) => void;
};

export const CalendarHeader = (props: PropsType) => {
  const { month, onMonthChange } = props;
  return (
    <div className="flex gap-4 items-center mt-3 mb-3">
      <h1 className="text-2xl font-bold">カレンダー</h1>
      <button
        className="border p-1 border-gray-400 bg-white rounded"
        onClick={() => onMonthChange(new Date())}
      >
        今日
      </button>
      <div>
        <button>＜</button>
        <button>＞</button>
      </div>
      <p>
        {month.getFullYear()}年{month.getMonth() + 1}月
      </p>
    </div>
  );
};
