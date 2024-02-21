import { Calendar } from "./components/Calendar/Calendar";
import { CalendarHeader } from "./components/Calendar/CalendarHeader";

export const App = () => {
  return (
    <div className="w-11/12 m-auto">
      <CalendarHeader />
      <Calendar />
    </div>
  );
};
