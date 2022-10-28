import { useState } from "react";
import { onChangeArgs, Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((oldCart) => {
      if (count === 0) {
        // * Option 1: Destructuring (more readable but slower and adds unnecessary variable)
        const { [product.id]: toDelete, ...rest } = oldCart;
        return rest;
        // * Option 2: Delete (less readable but a lot faster)
        // const newCart = {...oldCart};
        // delete newCart[product.id];
        // return newCart;
      }

      return {
        ...oldCart,
        [product.id]: { ...product, count },
      };
    });
  };

  return { shoppingCart, onProductCountChange };
};
