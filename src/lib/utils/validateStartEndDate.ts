const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

export const isValidDateOrder = (startDate: Date, endDate: Date): boolean => {
  const diffTime = endDate.getTime() - startDate.getTime();
  return diffTime > 0;
};

export const isValidDateRange = (startDate: Date, endDate: Date): boolean => {
  const diffTime = endDate.getTime() - startDate.getTime();
  return diffTime > ONE_DAY_IN_MS;
};
