import { useState } from "react";
import { Calendar } from "./components/Calendar/Calendar";
import { CalendarHeader } from "./components/Calendar/CalendarHeader";

export const App = () => {
  const [month, setMonth] = useState<Date>(new Date());
  return (
    <div className="w-8/12 m-auto">
      <CalendarHeader month={month} onMonthChange={(m: Date) => setMonth(m)} />
      <Calendar />
    </div>
  );
};
