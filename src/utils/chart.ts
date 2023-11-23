export const formatNumber = (value: number): string => {
  if (value > 999) {
    return `${Math.round(value / 1000)} K`;
  } else if (value > 99999) {
    return `${Math.round(value / 100000)} M`;
  } else {
    return String(Math.round(value));
  }
};
