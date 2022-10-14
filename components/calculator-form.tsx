import React from "react";
import { CalculatorState } from "../pages";
import Slider from "./slider";
import {
  hoursValueLabelFormat,
  priceValueLabelFormat,
  rangeValueLabelFormat,
} from "../data/formatters";
import styled from "@emotion/styled";
import { multiplyByDateRange } from "../data/calculator";

export interface CalculatorFormProps {
  state: CalculatorState;
  onChange: (state: CalculatorState) => void;
}

const CalculatorForm = ({ state, onChange }: CalculatorFormProps) => {
  return (
    <>
      <Sliders state={state} onChange={onChange} />
      <FilterBar state={state} />
    </>
  );
};

const Section = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

const Sliders = ({ state, onChange }: CalculatorFormProps) => {
  return (
    <div>
      <Section>
        <Slider
          label="Elpris"
          value={state.price}
          onChange={(value: number) => onChange({ ...state, price: value })}
          formatter={priceValueLabelFormat}
          min={0}
          max={500}
          step={1}
        />
        <Slider
          label="Användning per dag"
          value={state.hours}
          onChange={(value: number) => onChange({ ...state, hours: value })}
          formatter={hoursValueLabelFormat}
          min={0}
          max={24}
          step={0.5}
        />
        <Slider
          label="Period"
          value={state.range}
          onChange={(value: number) => onChange({ ...state, range: value })}
          formatter={rangeValueLabelFormat}
          min={0}
          max={3}
          step={1}
        />
      </Section>
    </div>
  );
};

const FilterBarDiv = styled.div`
  margin: 2rem 0;
  display: flex;

  & > * {
    margin-right: 1rem;
  }
`;

const FilterBar = ({ state }: { state: CalculatorState }) => {
  const hours = multiplyByDateRange(state.range, state.hours);
  return (
    <FilterBarDiv>
      <div>
        När elen kostar <span>{priceValueLabelFormat(state.price, 0)}</span> och
        produkten används totalt <span>{hoursValueLabelFormat(hours, 0)}</span>{" "}
        per <span>{rangeValueLabelFormat(state.range, 0).toLowerCase()}</span>{" "}
        kostar...
      </div>
    </FilterBarDiv>
  );
};

export default CalculatorForm;
