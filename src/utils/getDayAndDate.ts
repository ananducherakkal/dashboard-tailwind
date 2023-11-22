const getDayAndDate = () => {
  const today: Date = new Date();
  const yesterday: Date = new Date();
  const tomorrow: Date = new Date();

  yesterday.setDate(today.getDate() - 1);
  tomorrow.setDate(today.getDate() + 1);

  const formatCustomDateObject = (
    date: Date
  ): { day: string; date: number } => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "numeric",
      month: "short",
    };
    const formattedDate: string = date.toLocaleDateString(undefined, options);
    const [weekday, restOfString] = formattedDate.split(",");
    const day = restOfString.trim().split(" ")[1];
    return {
      day: weekday.trim(),
      date: parseInt(day.trim()),
    };
  };

  return {
    today: formatCustomDateObject(today),
    yesterday: formatCustomDateObject(yesterday),
    tomorrow: formatCustomDateObject(tomorrow),
  };
};

export default getDayAndDate;
