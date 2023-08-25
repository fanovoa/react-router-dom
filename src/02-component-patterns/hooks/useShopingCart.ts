import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShopingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {

        setShoppingCart(oldShoppingCart => {

            if (count === 0) {

                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                return rest;
            } else {
                return {
                    ...oldShoppingCart,
                    [product.id]: { ...product, count }
                }
            }
        })
    }

    return {
        shoppingCart,
        onProductCountChange
    }
}
