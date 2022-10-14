import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { CalculatorState } from "../pages";
import { EffectMode, Product } from "../data/product";
import ProductModeMenu from "./product-mode-menu";
import { calculateCost, calculateEffect } from "../data/calculator";
import { rangeValueLabelFormat, TwoDecimalsFormat } from "../data/formatters";
import styled from "@emotion/styled";

export interface ProductCardProps {
  state: CalculatorState;
  product: Product;
}

const Card = styled(Paper)`
  padding: 1rem;

  label {
    font-weight: 700;
    font-size: 0.8rem;
    margin-right: 1rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .data {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 1.5rem;
    border-bottom: 2px dotted var(--primary-color);
  }

  .effect {
    font-size: 0.8rem;
  }

  .range {
    font-size: 0.8rem;
    margin: 0;
  }
`;

const ProductCard = ({ product, state }: ProductCardProps) => {
  const [effectMode, setEffectMode] = useState(product.effects[0]);
  const cost = calculateCost(
    effectMode.value,
    state.price / 100,
    state.hours,
    state.range
  );
  const effect = calculateEffect(effectMode.value, state.hours, state.range);

  return (
    <Card elevation={1}>
      <div className="header">
        <label>{product.name}</label>
        <ProductModeMenu
          product={product}
          selectedMode={effectMode}
          onChange={(selected: EffectMode) => setEffectMode(selected)}
        />
      </div>
      <div className="data">
        <span>{TwoDecimalsFormat(cost)}kr</span>
        <span className="effect">{TwoDecimalsFormat(effect)}kWh</span>
      </div>
      <p className="range">
        per {rangeValueLabelFormat(state.range, 0).toLowerCase()}
      </p>
    </Card>
  );
};

export default ProductCard;
