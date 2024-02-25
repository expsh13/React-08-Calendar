export const CalendarHeader = () => {
  return (
    <div className="flex gap-4 items-center">
      <h1 className="text-2xl font-bold">カレンダー</h1>
      <button className="border p-1 border-gray-400 bg-white rounded">
        今日
      </button>
      <div>
        <button>＜</button>
        <button>＞</button>
      </div>
      <p>2024年2月</p>
    </div>
  );
};
