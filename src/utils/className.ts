const cn = (...classNames: string[]): string => {
  const uniqueClassNames = new Set<string>(
    classNames.flatMap((className) => className.split(" "))
  );
  return Array.from(uniqueClassNames).join(" ");
};
