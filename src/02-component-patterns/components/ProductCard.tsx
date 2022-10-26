import { createContext } from "react";
import { useProduct } from "../hooks/useProduct";

import {
  ProductContextProps,
  Product,
  ProductCommonProps,
} from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export interface Props extends ProductCommonProps {
  children?: React.ReactElement | React.ReactElement[];
  product: Product;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className, style }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
