import { currentDateRange } from "../../functions/currentDateRange";
import { weeks } from "../../utils/day";

type PropsType = {
  currentDate: Date;
};

const dayStyle = (index: number): string => {
  if (index === 0) {
    return "text-center text-red-600";
  } else if (index === 6) {
    return "text-center text-blue-500";
  } else {
    return "text-center";
  }
};

const dateStyle = (currentDate: Date, itemDate: Date): string => {
  const currentMonth = currentDate.getMonth();
  if (currentMonth === itemDate.getMonth()) {
    return "text-center";
  } else {
    return "text-center text-gray-500";
  }
};

export const Calendar = (props: PropsType) => {
  const { currentDate } = props;

  const calendarDate = currentDateRange(currentDate);
  return (
    <div className="flex flex-wrap">
      {calendarDate.map((item, i) => (
        <div className="w-32 h-32 border" key={item.getTime()}>
          {i < weeks.length ? (
            <p className={dayStyle(i)}>{weeks[item.getDay()]}</p>
          ) : null}
          <p className={dateStyle(currentDate, item)}>{item.getDate()}</p>
        </div>
      ))}
    </div>
  );
};
