import { Children } from 'react';
import { createContext, ReactNode, useContext, useState } from 'react';

const CartContext = createContext

export function CartProvider(){

    return(
        <CartContext.Provider>
            {Children}
        </CartContext.Provider>
    )

}