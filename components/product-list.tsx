import React from "react";
import { CalculatorState } from "../pages";
import { products } from "../data/product";
import styled from "@emotion/styled";
import ProductCard from "./product-card";

export interface ProductListProps {
  state: CalculatorState;
}

const UL = styled.ul`
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 0;
`;

const ProductList = ({ state }: ProductListProps) => {
  return (
    <section>
      <UL>
        {products.map((product) => (
          <li key={product.name}>
            <ProductCard key={product.name} product={product} state={state} />
          </li>
        ))}
      </UL>
    </section>
  );
};

export default ProductList;
