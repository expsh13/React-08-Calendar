import { useState } from "react";
import { Calendar } from "./components/Calendar/Calendar";
import { CalendarHeader } from "./components/Calendar/CalendarHeader";
import { Modal } from "./components/Modal/Modal";

export const App = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="w-8/12 m-auto">
      <CalendarHeader
        currentDate={currentDate}
        onMonthChange={(date: Date) => setCurrentDate(date)}
      />
      <Calendar
        currentDate={currentDate}
        onClickModal={(boolean: boolean) => setShowModal(boolean)}
        onClickCurrentDate={(date: Date) => setCurrentDate(date)}
      />
      {showModal ? (
        <Modal
          currentDate={currentDate}
          onClick={(boolean: boolean) => setShowModal(boolean)}
        />
      ) : null}
    </div>
  );
};
