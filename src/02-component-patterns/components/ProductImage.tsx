import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import { ProductCommonProps } from "../interfaces/interfaces";

export interface Props extends ProductCommonProps {
  img?: string;
}

export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext);

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={img || product.img || noImage}
      style={style}
      alt="Product"
    />
  );
};
