import { useState } from "react";
import { onChangeArgs, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    // console.log({ count });

    setShoppingCart((oldCart) => {
      const productInCart: ProductInCart = oldCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldCart,
          [product.id]: productInCart,
        };
      }
      // * Option 1: Destructuring (more readable but slower and adds unnecessary variable)
      const { [product.id]: toDelete, ...rest } = oldCart;
      return { ...rest };

      // * Option 2: Delete (less readable but a lot faster)
      // const newCart = {...oldCart};
      // delete newCart[product.id];
      // return newCart;
    });
  };

  return { shoppingCart, onProductCountChange };
};
