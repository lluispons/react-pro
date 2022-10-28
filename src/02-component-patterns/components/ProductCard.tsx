import { createContext } from "react";
import { useProduct } from "../hooks/useProduct";

import {
  ProductContextProps,
  Product,
  ProductCommonProps,
  onChangeArgs,
} from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export interface Props extends ProductCommonProps {
  children?: React.ReactElement | React.ReactElement[];
  product: Product;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
  className,
  style,
  value,
  onChange,
}: Props) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
