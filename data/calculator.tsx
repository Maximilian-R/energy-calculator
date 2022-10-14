import { DateRange } from "./enums";

/**
 * @param effect Watt
 * @param price öre/kWh
 * @param usage hours
 * @param range DateRange
 * @returns total cost (kr)
 */
export const calculateCost = (
  effect: number,
  price: number,
  usage: number,
  range: DateRange
) => {
  const cost = (effect * price * usage) / 1000;
  return multiplyByDateRange(range, cost);
};

/**
 * @param effect Watt
 * @param usage hours
 * @param range DateRange
 * @returns total effect kWh
 */
export const calculateEffect = (
  effect: number,
  usage: number,
  range: DateRange
) => {
  const kWh = (effect * usage) / 1000;
  return multiplyByDateRange(range, kWh);
};

export const multiplyByDateRange = (range: DateRange, value: number) => {
  switch (range) {
    case DateRange.Day:
      return value;
    case DateRange.Week:
      return value * 7;
    case DateRange.Month:
      return (value * 365) / 12;
    case DateRange.Year:
      return value * 365;
  }
};
