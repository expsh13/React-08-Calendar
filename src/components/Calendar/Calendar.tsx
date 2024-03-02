import { dateStyle, dayStyle } from "../../functions/calendarStyle";
import { currentDateRange } from "../../functions/currentDateRange";
import { weeks } from "../../utils/day";

type PropsType = {
  currentDate: Date;
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
