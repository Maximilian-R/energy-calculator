import React from "react";
import { Slider as MuiSlider, Typography } from "@mui/material";
import styled from "@emotion/styled";

export interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  label: string;
  formatter: any;
  min: number;
  max: number;
  step: number;
}

const CustomizedSlider = styled(MuiSlider)(() => ({
  display: "block",
  padding: "0rem",
  marginTop: "0.5rem",
  height: "0.25rem",
  borderRadius: "0.1rem",
  color: "var(--primary-color)",
  "& .MuiSlider-thumb": {
    borderRadius: "25%",
    "&:focus, &:hover, &.Mui-active": {},
  },
  "& .MuiSlider-valueLabel": {
    backgroundColor: "var(--primary-color-dark)",
    "&:before": {},
    "& *": {},
  },
  "& .MuiSlider-track": {},
  "& .MuiSlider-rail": {},
  "& .MuiSlider-mark": {
    "&.MuiSlider-markActive": {},
  },
}));

const Slider = ({
  value,
  onChange,
  label,
  formatter,
  min,
  max,
  step,
}: SliderProps) => {
  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    onChange(newValue as number);
  };

  return (
    <SliderLayout>
      <div className="slider">
        <div className="label">
          <Typography>{label}</Typography>
          <Typography>{formatter(value, 0)}</Typography>
        </div>
        <CustomizedSlider
          value={value}
          valueLabelFormat={formatter}
          onChange={handleSliderChange}
          min={min}
          max={max}
          step={step}
          valueLabelDisplay="auto"
        />
      </div>
    </SliderLayout>
  );
};

const SliderLayout = styled.div`
  display: flex;
  align-items: center;

  .label {
    display: flex;
    justify-content: space-between;
  }

  .slider {
    flex-grow: 1;
  }
`;

export default Slider;
