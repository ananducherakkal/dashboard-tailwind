export const cn = (...classNames: (string | undefined)[]): string => {
  const newClassNames = classNames.filter((item) => typeof item === "string");

  const uniqueClassNames = new Set<string>(
    newClassNames.flatMap((item) => (item ? item.split(" ") : []))
  );

  return Array.from(uniqueClassNames).join(" ");
};
