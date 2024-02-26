export const Calendar = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-32 h-32 border">
        <p className="text-center text-red-600">日</p>
        <p className="text-center">1</p>
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
