import styles from "../styles/styles.module.css";
import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import { ProductCommonProps } from "../interfaces/interfaces";

export interface Props extends ProductCommonProps {
  title?: string;
}

export const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title || product.title}
    </span>
  );
};
