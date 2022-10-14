import { DateRange } from "./enums";

export const priceValueLabelFormat = (value: number, index: number) => {
  if (value > 100) {
    return `${value / 100} kr/kWh`;
  } else {
    return `${value} öre/kWh`;
  }
};

export const hoursValueLabelFormat = (value: number, index: number) => {
  return `${value}h`;
};

export const rangeValueLabelFormat = (value: DateRange, index: number) => {
  switch (value) {
    case DateRange.Day:
      return "Dag";
    case DateRange.Week:
      return "Vecka";
    case DateRange.Month:
      return "Månad";
    case DateRange.Year:
      return "År";
  }
};

export const TwoDecimalsFormat = (value: number) => {
  return +value.toFixed(2);
};
