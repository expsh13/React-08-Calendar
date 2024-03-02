export const dayStyle = (index: number): string => {
  if (index === 0) {
    return "text-center text-red-600";
  } else if (index === 6) {
    return "text-center text-blue-500";
  } else {
    return "text-center";
  }
};

export const dateStyle = (currentDate: Date, itemDate: Date): string => {
  const today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);

  if (today.getTime() === itemDate.getTime()) {
    return "m-auto text-white flex justify-center bg-blue-700 rounded-full w-6 h-6";
  } else if (currentDate.getMonth() === itemDate.getMonth()) {
    return "text-center";
  } else {
    return "text-center text-gray-400";
  }
};
