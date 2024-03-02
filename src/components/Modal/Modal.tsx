import { useRef } from "react";

type PropsType = {
  currentDate: Date;
  onClick: (boolean: boolean) => void;
};

export const Modal = (props: PropsType) => {
  const { currentDate, onClick } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const handleClickButton = (date: Date) => {
    if (!inputRef.current) return;
    onClick(false);
    sessionStorage.setItem(String(date.getTime()), inputRef.current.value);
  };
  const handleDeleteClick = (date: Date) => {
    onClick(false);
    sessionStorage.removeItem(String(date.getTime()));
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div
        className="absolute top-0 left-0 w-full h-full"
        onClick={() => onClick(false)}
      ></div>
      <div className="relative w-96 h-1/3 rounded shadow-md bg-gray-300 p-2">
        <p>
          {currentDate.getFullYear()}/{currentDate.getMonth()}/
          {currentDate.getDate()}
        </p>
        <p>アイテム名{sessionStorage.getItem(String(currentDate.getTime()))}</p>
        <div className="flex">
          <input ref={inputRef} type="text" />
          <button onClick={() => handleClickButton(currentDate)}>登録</button>
          <button onClick={() => handleDeleteClick(currentDate)}>削除</button>
        </div>
      </div>
    </div>
  );
};
