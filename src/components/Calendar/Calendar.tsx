import { dateStyle, dayStyle } from "../../functions/calendarStyle";
import { currentDateRange } from "../../functions/currentDateRange";
import { weeks } from "../../utils/day";

type PropsType = {
  currentDate: Date;
  onClickModal: (boolean: boolean) => void;
  onClickCurrentDate: (date: Date) => void;
};

export const Calendar = (props: PropsType) => {
  const { currentDate, onClickModal, onClickCurrentDate } = props;

  const handleOnClick = (date: Date) => {
    onClickModal(true);
    onClickCurrentDate(date);
  };

  const calendarDate = currentDateRange(currentDate);
  return (
    <div className="flex flex-wrap">
      {calendarDate.map((item, i) => (
        <button
          className="w-32 h-32 border flex flex-col items-center"
          key={item.getTime()}
          onClick={() => handleOnClick(item)}
          disabled={dateAble(currentDate, item)}
        >
          {i < weeks.length ? (
            <p className={dayStyle(i)}>{weeks[item.getDay()]}</p>
          ) : null}
          <p className={dateStyle(currentDate, item)}>{item.getDate()}</p>
          <p>{sessionStorage.getItem(String(item.getTime()))}</p>
        </button>
      ))}
    </div>
  );
};

const dateAble = (currentDate: Date, itemDate: Date): boolean => {
  if (currentDate.getMonth() === itemDate.getMonth()) {
    return false;
  } else {
    return true;
  }
};
