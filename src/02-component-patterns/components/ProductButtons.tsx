import styles from "../styles/styles.module.css";
import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import { ProductCommonProps } from "../interfaces/interfaces";

export interface Props extends ProductCommonProps {}

export const ProductButtons = ({ className, style }: Props) => {
  const { counter, increaseBy } = useContext(ProductContext);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        {" - "}
      </button>
      <div className={styles.countLabel}> {counter} </div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
        {" + "}
      </button>
    </div>
  );
};
